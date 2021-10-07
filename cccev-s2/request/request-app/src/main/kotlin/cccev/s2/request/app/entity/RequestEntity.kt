package cccev.s2.request.app.entity

import cccev.s2.request.domain.RequestState
import cccev.s2.request.domain.features.command.RequestAuditedEvent
import cccev.s2.request.domain.features.command.RequestEvidenceAddedEvent
import cccev.s2.request.domain.features.command.RequestEvidenceRemovedEvent
import cccev.s2.request.domain.features.command.RequestRefusedEvent
import cccev.s2.request.domain.features.command.RequestSentEvent
import cccev.s2.request.domain.features.command.RequestSignedEvent
import cccev.s2.request.domain.features.command.RequestSupportedValueAddedEvent
import cccev.s2.request.domain.model.RequestId
import ccev.dsl.core.Evidence
import ccev.dsl.core.EvidenceTypeId
import ccev.dsl.core.InformationConceptId
import ccev.dsl.core.RequirementId
import ccev.dsl.core.SupportedValue
import f2.spring.data.entity.EntityBase
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import s2.dsl.automate.S2Event
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State
import java.util.UUID

@Document("request")
class RequestEntity(
	@Id
	val id: RequestId = UUID.randomUUID().toString(),
	var status: RequestState,
	val frameworkId: RequirementId,
	val evidences: MutableList<Evidence>,
	val supportedValues: MutableMap<InformationConceptId, SupportedValue>
): EntityBase(), WithS2Id<RequestId>, WithS2State<RequestState> {
	override fun s2Id() = id
	override fun s2State() = status

	fun addEvidence(evidence: Evidence): RequestEvidenceAddedEvent {
		evidences.add(evidence)

		return RequestEvidenceAddedEvent(
			id = id,
			evidenceId = evidence.identifier
		)
	}

	fun removeEvidence(evidenceTypeId: EvidenceTypeId): RequestEvidenceRemovedEvent {
		evidences.removeIf { evidence -> evidenceTypeId in evidence.isConformantTo }

		return RequestEvidenceRemovedEvent(
			id = id,
			evidenceTypeId = evidenceTypeId
		)
	}

	fun addSupportedValue(value: SupportedValue): RequestSupportedValueAddedEvent {
		supportedValues[value.providesValueFor] = value

		return RequestSupportedValueAddedEvent(
			id = id,
			providesValueFor = value.providesValueFor
		)
	}

	fun send() = updateStatus {
		RequestSentEvent(id = id)
	}

	fun sign() = updateStatus {
		RequestSignedEvent(id = id)
	}

	fun audit() = updateStatus {
		RequestAuditedEvent(id = id)
	}

	fun refuse() = updateStatus {
		RequestRefusedEvent(id = id)
	}

	private fun <E: S2Event<RequestState, RequestId>> updateStatus(buildEvent: () -> E): E {
		return buildEvent().also { event -> status = event.type }
	}
}
