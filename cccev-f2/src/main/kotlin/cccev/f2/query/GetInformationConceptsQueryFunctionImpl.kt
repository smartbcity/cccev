package cccev.f2.query

import cccev.dsl.dto.model.InformationConceptDTO
import cccev.dsl.dto.model.InformationConceptDTOBase
import cccev.dsl.dto.query.GetInformationConceptsQueryFunction
import cccev.dsl.dto.query.GetInformationConceptsQueryResult
import cccev.dsl.dto.query.GetRequirementQuery
import cccev.dsl.dto.query.GetRequirementQueryFunction
import cccev.f2.exception.NotFoundException
import cccev.f2.model.toDTO
import ccev.dsl.core.EvidenceTypeListBase
import ccev.dsl.core.InformationConceptBase
import ccev.dsl.core.Requirement
import f2.dsl.fnc.f2Function
import f2.dsl.fnc.invoke
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class GetInformationConceptsQueryFunctionImpl(
    private val getRequirementQueryFunction: GetRequirementQueryFunction
) {
    @Bean
    fun getInformationConceptsQueryFunction(): GetInformationConceptsQueryFunction = f2Function { query ->
        val getRequirementQuery = GetRequirementQuery(query.requirement)
        val requirement = getRequirementQueryFunction.invoke(getRequirementQuery).requirement
            ?: throw NotFoundException("Requirement not found")
        GetInformationConceptsQueryResult(requirement.informationConcepts())
    }

    private fun Requirement.informationConcepts(): List<InformationConceptDTO> {
        return hasRequirement.orEmpty()
            .flatMap { it.informationConcepts() }
            .plus(hasConcept.orEmpty().toDTOs(this))
    }

    private fun List<InformationConceptBase>.toDTOs(parent: Requirement): List<InformationConceptDTOBase> {
        val evidenceTypeLists = parent.hasEvidenceTypeList.orEmpty().map(EvidenceTypeListBase::identifier)
        return map { ic -> ic.toDTO(evidenceTypeLists) }
    }
}
