package cccev.f2.handler

import cccev.bubble.core.Entry
import cccev.bubble.core.KtorRepository
import cccev.bubble.core.Request
import cccev.dsl.cc.AllocatedEmissions
import cccev.dsl.cc.CarbonCopy
import cccev.dsl.cc.Equity
import cccev.dsl.cc.ScopeTotal
import cccev.dsl.dto.model.EvidenceTypeListDTOBase
import cccev.dsl.dto.query.GetEvidenceTypeListsQuery
import cccev.dsl.dto.query.GetEvidenceTypeListsQueryFunction
import cccev.dsl.dto.query.GetInformationConceptsQuery
import cccev.dsl.dto.query.GetInformationConceptsQueryFunction
import cccev.s2.request.app.entity.RequestRepository
import cccev.s2.request.domain.features.command.RequestSentEvent
import f2.dsl.fnc.invoke
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import kotlinx.coroutines.reactor.awaitSingle
import org.springframework.context.event.EventListener
import org.springframework.stereotype.Component
import cccev.bubble.core.SupportedValue as BubbleSupportedValue

@Component
class SendDataToBubbleHandler(
	private val getInformationConceptsQueryFunction: GetInformationConceptsQueryFunction,
	private val getEvidenceTypeListsQueryFunction: GetEvidenceTypeListsQueryFunction,
	private val requestRepository: RequestRepository
) {
	/*
	 * Use spring configuration for the bearer token
	 */
	val ktorRepository = KtorRepository("95f4b5790e3d55cee1f6badeb192c9a1")

	companion object {
		const val BASE_URL = "https://app.impactmate.earth/"
	}

	@Suppress("LongMethod")
	@EventListener
	fun onRequestSent(event: RequestSentEvent) = GlobalScope.launch(Dispatchers.IO) {
		val requestId = event.id
		println("Send request [$requestId] to bubble")
		val requestEntity = requestRepository.findById(requestId).awaitSingle()

		val request = ktorRepository.getOne<Request>(requestId).response

		val informationConcepts = getInformationConceptsQueryFunction.invoke(
			GetInformationConceptsQuery(requestId, requestEntity.frameworkId)
		).informationConcepts

		val entryId = request.entry ?: let {
			println("Creating entry")

			val value = when (requestEntity.frameworkId) {
				CarbonCopy.identifier -> informationConcepts.firstOrNull { it.identifier == ScopeTotal.identifier }
				Equity.identifier -> informationConcepts.firstOrNull { it.identifier == AllocatedEmissions.identifier }
				else -> null
			}?.supportedValue?.value

			val entry = Entry(
				_id = null,
				request = requestId,
				value = value ?: "",
				status = "Pending",
				registry = request.registry,
				refDateFrom = "2021-01-01T11:00:00.000Z",
				refDateTo = "2021-12-31T11:00:00.000Z",
			)
			val result = ktorRepository.saveObject(entry)
			println("Created entry [${result.id}]")
			request.entry = result.id
			ktorRepository.updateObject(requestId, request)
			println("Updated request [$requestId] with entry")
			result.id
		}
		println("Entry is [$entryId]")

		val evidenceTypes = getEvidenceTypeListsQueryFunction.invoke(
			GetEvidenceTypeListsQuery(requestId, requestEntity.frameworkId)
		).evidenceTypeLists.flatMap { etl ->
			etl.flatMap(EvidenceTypeListDTOBase::specifiesEvidenceType)
		}.associateBy { it.identifier }

		val bubbleValues = informationConcepts.mapNotNull { infoConcept ->
			val prefix = "bubble_"
			if (!infoConcept.identifier.startsWith(prefix)) return@mapNotNull null

			val requirementId = infoConcept.identifier.removePrefix(prefix)

			val supportedValue = requestEntity.supportedValues[infoConcept.identifier]
				?: return@mapNotNull null

			val evidenceType = infoConcept.evidenceTypes.flatten()
				.mapNotNull(evidenceTypes::get)
				.firstOrNull { it.evidence != null }

			val existingValueId = try {
				ktorRepository.getOne<BubbleSupportedValue>(requestId).response._id
			} catch (e: Exception) {
				null
			}

			BubbleSupportedValue(
				_id = existingValueId,
				entry = entryId,
				label = infoConcept.name,
				requirement = requirementId,
				value = supportedValue.value,
				evidence = evidenceType?.let { buildUrl(requestId, requestEntity.frameworkId, it.identifier) }
			)
		}

		bubbleValues.onEach(::println)
			.forEach { value ->
				value._id
					?.let { id -> ktorRepository.updateObject(id, value) }
					?: ktorRepository.saveObject(value)
			}
		println("Data sent to bubble :)")
	}

	private fun buildUrl(requestId: String, frameworkId: String, evidenceTypeId: String): String {
		return "$BASE_URL/?&request=$requestId&framework=$frameworkId&evidence=$evidenceTypeId"
	}
}
