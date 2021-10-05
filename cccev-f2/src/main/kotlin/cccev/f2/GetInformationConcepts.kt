package cccev.f2

import cccev.dsl.dto.model.InformationConceptDTO
import cccev.dsl.dto.model.InformationConceptDTOBase
import cccev.f2.model.toDTO
import ccev.dsl.core.EvidenceTypeListBase
import ccev.dsl.core.InformationConceptBase
import ccev.dsl.core.Requirement
import ccev.dsl.core.RequirementId
import f2.dsl.fnc.F2Function
import f2.dsl.fnc.f2Function
import f2.dsl.fnc.invoke
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

typealias GetInformationConceptsQueryFunction = F2Function<GetInformationConceptsQuery, GetInformationConceptsQueryResult>

class GetInformationConceptsQuery(
    val requirement: RequirementId
)

class GetInformationConceptsQueryResult(
    val informationConcepts: List<InformationConceptDTO>
)

@Configuration
class GetInformationConceptsQueryFunctionImpl(
    private val getRequirementQueryFunction: GetRequirementQueryFunction
) {
    @Bean
    fun getInformationConceptsQueryFunction(): GetInformationConceptsQueryFunction = f2Function { query ->
        val getRequirementQuery = GetRequirementQuery(query.requirement)
        val requirement = getRequirementQueryFunction.invoke(getRequirementQuery).requirement
            ?: throw Exception("Requirement not found")
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
