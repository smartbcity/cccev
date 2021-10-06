package cccev.dsl.dto.query

import cccev.dsl.dto.model.InformationConceptDTO
import ccev.dsl.core.RequirementId
import f2.dsl.fnc.F2Function

typealias GetInformationConceptsQueryFunction = F2Function<GetInformationConceptsQuery, GetInformationConceptsQueryResult>

expect interface GetInformationConceptsQueryDTO {
    val requirement: RequirementId
}

class GetInformationConceptsQuery(
    override val requirement: RequirementId
): GetInformationConceptsQueryDTO

expect interface GetInformationConceptsQueryResultDTO {
    val informationConcepts: List<InformationConceptDTO>
}

class GetInformationConceptsQueryResult(
    override val informationConcepts: List<InformationConceptDTO>
): GetInformationConceptsQueryResultDTO
