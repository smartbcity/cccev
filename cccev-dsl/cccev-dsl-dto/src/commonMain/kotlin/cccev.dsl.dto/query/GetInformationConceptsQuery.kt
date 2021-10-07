package cccev.dsl.dto.query

import cccev.dsl.dto.model.InformationConceptDTO
import cccev.s2.request.domain.model.RequestId
import ccev.dsl.core.RequirementId
import f2.dsl.fnc.F2Function

typealias GetInformationConceptsQueryFunction = F2Function<GetInformationConceptsQuery, GetInformationConceptsQueryResult>

expect interface GetInformationConceptsQueryDTO {
    val id: RequestId
    val requirement: RequirementId
}

class GetInformationConceptsQuery(
    override val id: RequestId,
    override val requirement: RequirementId
): GetInformationConceptsQueryDTO

expect interface GetInformationConceptsQueryResultDTO {
    val informationConcepts: List<InformationConceptDTO>
}

class GetInformationConceptsQueryResult(
    override val informationConcepts: List<InformationConceptDTO>
): GetInformationConceptsQueryResultDTO
