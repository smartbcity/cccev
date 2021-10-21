package cccev.f2.query

import cccev.dsl.dto.model.EvidenceTypeListDTOBase
import cccev.dsl.dto.query.GetEvidenceTypeListsQueryFunction
import cccev.dsl.dto.query.GetEvidenceTypeListsQueryResult
import cccev.dsl.dto.query.GetRequirementQuery
import cccev.dsl.dto.query.GetRequirementQueryFunction
import cccev.f2.exception.NotFoundException
import cccev.f2.model.toDTO
import cccev.s2.request.app.RequestAggregateService
import cccev.s2.request.app.entity.RequestEntity
import cccev.s2.request.app.entity.RequestRepository
import cccev.s2.request.domain.features.command.RequestInitCommand
import ccev.dsl.core.Evidence
import ccev.dsl.core.EvidenceTypeId
import ccev.dsl.core.EvidenceTypeListBase
import ccev.dsl.core.Requirement
import f2.dsl.fnc.f2Function
import f2.dsl.fnc.invoke
import kotlinx.coroutines.reactor.awaitSingle
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.dao.DuplicateKeyException

@Configuration
class GetEvidenceTypeListsQueryFunctionImpl(
    private val getRequirementQueryFunction: GetRequirementQueryFunction,
    private val requestRepository: RequestRepository,
    private val requestAggregateService: RequestAggregateService
) {
    @Bean
    fun getEvidenceTypeListsQueryFunction(): GetEvidenceTypeListsQueryFunction = f2Function { query ->
        println("Request [${query.id}]: GetEvidenceTypeLists")
        val getRequirementQuery = GetRequirementQuery(query.requirement)
        val requirement = getRequirementQueryFunction.invoke(getRequirementQuery).requirement
            ?: throw NotFoundException("Requirement not found")

        try {
            val requestId = requestAggregateService.init().invoke(RequestInitCommand(id = query.id, frameworkId = query.requirement)).id
            println("Request [$requestId]")
        } catch (e: DuplicateKeyException) {
            println("Request exists")
        }

        val request = requestRepository.findById(query.id).awaitSingle()

        val evidences = requirement.evidenceTypeLists(request).distinctBy {
            it.flatMap { it.specifiesEvidenceType }.joinToString { it.identifier }
        }
        GetEvidenceTypeListsQueryResult(evidences)
    }

    private fun Requirement.evidenceTypeLists(request: RequestEntity): List<List<EvidenceTypeListDTOBase>> {
        val evidences = request.evidences.associateBy { it.isConformantTo.first() }

        return hasRequirement.orEmpty()
            .flatMap { it.evidenceTypeLists(request) }
            .plus(listOf(hasEvidenceTypeList.orEmpty().toDTOs(evidences)))
    }

    private fun List<EvidenceTypeListBase>.toDTOs(evidences: Map<EvidenceTypeId, Evidence?>) = map { it.toDTO(evidences) }
}

//fun test(): List<List<EvidenceTypeList>> {
//    return listOf(
//        listOf(
//            ETL1,
//            // OR
//            ETL2
//        ),
//        // AND
//        listOf(ETL3),
//        // AND
//        listOf(ETL4),
//    )
//}
