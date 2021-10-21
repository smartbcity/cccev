package cccev.f2.query

import cccev.dsl.dto.model.EvidenceTypeDTOBase
import cccev.dsl.dto.model.EvidenceTypeListDTOBase
import cccev.dsl.dto.model.InformationConceptDTO
import cccev.dsl.dto.query.GetEvidenceTypeListsQuery
import cccev.dsl.dto.query.GetEvidenceTypeListsQueryFunction
import cccev.dsl.dto.query.GetInformationConceptsQuery
import cccev.dsl.dto.query.GetInformationConceptsQueryFunction
import cccev.dsl.dto.query.GetRequestScoreQueryFunction
import cccev.dsl.dto.query.GetRequestScoreQueryResult
import cccev.s2.request.app.entity.RequestEntity
import cccev.s2.request.app.entity.RequestRepository
import ccev.dsl.core.EvidenceTypeId
import f2.dsl.fnc.f2Function
import f2.dsl.fnc.invoke
import kotlinx.coroutines.reactor.awaitSingle
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration


@Configuration
class GetRequestScoreQueryFunctionImpl(
    private val getEvidenceTypeListsQueryFunction: GetEvidenceTypeListsQueryFunction,
    private val getInformationConceptsQueryFunction: GetInformationConceptsQueryFunction,
    private val requestRepository: RequestRepository
) {

    object Score {
        const val VALUE = 50
        const val EVIDENCE = 50
    }

    @Bean
    fun getRequestScoreQueryFunction(): GetRequestScoreQueryFunction = f2Function { query ->
        val request = requestRepository.findById(query.requestId).awaitSingle()
        val evidenceTypes = request.evidenceTypes()
        val informationConcepts = request.informationConcepts()

        val scorePerInformationConcept = informationConcepts
            .filter { informationConcept -> informationConcept.expressionOfExpectedValue == null }
            .associateBy(InformationConceptDTO::identifier)
            .mapValues { (_, informationConcept) ->
                if (informationConcept.hasValue()) {
                    Score.VALUE + informationConcept.computeEvidenceScore(evidenceTypes)
                } else {
                    0.0
                }
            }

        GetRequestScoreQueryResult(
            score = scorePerInformationConcept.values.average(),
            scorePerInformationConcept = scorePerInformationConcept
        )
    }

    private suspend fun RequestEntity.evidenceTypes(): List<EvidenceTypeDTOBase> {
        val command = GetEvidenceTypeListsQuery(
            id = id,
            requirement = frameworkId
        )
        return getEvidenceTypeListsQueryFunction.invoke(command)
            .evidenceTypeLists
            .flatMap { evidenceTypeLists -> evidenceTypeLists.flatMap(EvidenceTypeListDTOBase::specifiesEvidenceType) }
    }

    private suspend fun RequestEntity.informationConcepts(): List<InformationConceptDTO> {
        val command = GetInformationConceptsQuery(
            id = id,
            requirement = frameworkId
        )
        return getInformationConceptsQueryFunction.invoke(command).informationConcepts
    }

    private fun EvidenceTypeDTOBase.hasEvidence() = evidence != null
    private fun InformationConceptDTO.hasValue() = supportedValue.value != null

    private fun InformationConceptDTO.computeEvidenceScore(actualEvidenceTypes: List<EvidenceTypeDTOBase>): Double {
        val scoreRatio = evidenceTypes.map { evidenceTypeIds ->
            val fulfilledCount = evidenceTypeIds.count { evidenceTypeId -> actualEvidenceTypes.isEvidenceTypeFulfilled(evidenceTypeId) }
            fulfilledCount.toDouble() / evidenceTypeIds.size
        }.maxOrNull() ?: 0.0
        return Score.EVIDENCE * scoreRatio
    }

    private fun List<EvidenceTypeDTOBase>.isEvidenceTypeFulfilled(evidenceTypeId: EvidenceTypeId) = any { evidenceType ->
        evidenceType.identifier == evidenceTypeId && evidenceType.hasEvidence()
    }
}
