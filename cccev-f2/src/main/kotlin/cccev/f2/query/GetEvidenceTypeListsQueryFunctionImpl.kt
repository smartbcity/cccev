package cccev.f2.query

import cccev.dsl.dto.model.EvidenceTypeListDTOBase
import cccev.dsl.dto.query.GetEvidenceTypeListsQueryFunction
import cccev.dsl.dto.query.GetEvidenceTypeListsQueryResult
import cccev.dsl.dto.query.GetRequirementQuery
import cccev.dsl.dto.query.GetRequirementQueryFunction
import cccev.f2.exception.NotFoundException
import cccev.f2.model.toDTO
import ccev.dsl.core.EvidenceTypeListBase
import ccev.dsl.core.Requirement
import f2.dsl.fnc.f2Function
import f2.dsl.fnc.invoke
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class GetEvidenceTypeListsQueryFunctionImpl(
    private val getRequirementQueryFunction: GetRequirementQueryFunction
) {
    @Bean
    fun getEvidenceTypeListsQueryFunction(): GetEvidenceTypeListsQueryFunction = f2Function { query ->
        val getRequirementQuery = GetRequirementQuery(query.requirement)
        val requirement = getRequirementQueryFunction.invoke(getRequirementQuery).requirement
            ?: throw NotFoundException("Requirement not found")
        GetEvidenceTypeListsQueryResult(requirement.evidenceTypeLists())
    }

    private fun Requirement.evidenceTypeLists(): List<List<EvidenceTypeListDTOBase>> {
        return hasRequirement.orEmpty()
            .flatMap { it.evidenceTypeLists() }
            .plus(listOf(hasEvidenceTypeList.orEmpty().toDTOs()))
    }

    private fun List<EvidenceTypeListBase>.toDTOs() = map(EvidenceTypeListBase::toDTO)
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
