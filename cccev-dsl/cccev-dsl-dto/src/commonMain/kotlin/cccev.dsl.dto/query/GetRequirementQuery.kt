package cccev.dsl.dto.query

import ccev.dsl.core.Requirement
import ccev.dsl.core.RequirementId
import f2.dsl.fnc.F2Function

typealias GetRequirementQueryFunction = F2Function<GetRequirementQuery, GetRequirementQueryResult>

expect interface GetRequirementQueryDTO {
    val requirementId: RequirementId
}

class GetRequirementQuery(
    override val requirementId: RequirementId
): GetRequirementQueryDTO

expect interface GetRequirementQueryResultDTO {
    val requirement: Requirement?
}

class GetRequirementQueryResult(
    override val requirement: Requirement?
): GetRequirementQueryResultDTO
