package cccev.f2.query

import cccev.dsl.dto.model.InformationConceptDTO
import cccev.dsl.dto.model.InformationConceptDTOBase
import cccev.dsl.dto.query.GetInformationConceptsQueryFunction
import cccev.dsl.dto.query.GetInformationConceptsQueryResult
import cccev.dsl.dto.query.GetRequirementQuery
import cccev.dsl.dto.query.GetRequirementQueryFunction
import cccev.f2.exception.NotFoundException
import cccev.f2.model.toDTO
import cccev.s2.request.app.RequestService
import cccev.s2.request.app.entity.RequestEntity
import cccev.s2.request.app.entity.RequestRepository
import cccev.s2.request.domain.features.command.RequestInitCommand
import ccev.dsl.core.EvidenceTypeListBase
import ccev.dsl.core.InformationConceptBase
import ccev.dsl.core.Requirement
import f2.dsl.fnc.f2Function
import f2.dsl.fnc.invoke
import kotlinx.coroutines.reactor.awaitSingle
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.dao.DuplicateKeyException

@Configuration
class GetInformationConceptsQueryFunctionImpl(
    private val getRequirementQueryFunction: GetRequirementQueryFunction,
    private val requestRepository: RequestRepository,
    private val requestService: RequestService
) {
    @Bean
    fun getInformationConceptsQueryFunction(): GetInformationConceptsQueryFunction = f2Function { query ->
        println("Request [${query.id}]: GetInformationConcepts")
        val getRequirementQuery = GetRequirementQuery(query.requirement)
        val requirement = getRequirementQueryFunction.invoke(getRequirementQuery).requirement
            ?: throw NotFoundException("Requirement not found")

        try {
            val requestId = requestService.init().invoke(RequestInitCommand(id = query.id, frameworkId = query.requirement)).id
            println("Request [$requestId]")
        } catch (e: DuplicateKeyException) {
            println("Request exists")
        }

        val request = requestRepository.findById(query.id).awaitSingle()

        GetInformationConceptsQueryResult(requirement.informationConcepts(request))
    }

    private fun Requirement.informationConcepts(request: RequestEntity): List<InformationConceptDTO> {
        return hasRequirement.orEmpty()
            .flatMap { it.informationConcepts(request) }
            .plus(hasConcept.orEmpty().toDTOs(this, request))
    }

    private fun List<InformationConceptBase>.toDTOs(parent: Requirement, request: RequestEntity): List<InformationConceptDTOBase> {
        val evidenceTypeLists = parent.hasEvidenceTypeList.orEmpty().map(EvidenceTypeListBase::identifier)
        return map { ic -> ic.toDTO(evidenceTypeLists, request.supportedValues[ic.identifier]) }
    }
}
