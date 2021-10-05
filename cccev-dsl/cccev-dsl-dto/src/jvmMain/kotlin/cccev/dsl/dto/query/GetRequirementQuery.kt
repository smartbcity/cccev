package cccev.dsl.dto.query

import ccev.dsl.core.Requirement
import ccev.dsl.core.RequirementId

actual interface GetRequirementQueryDTO {
    actual val requirementId: RequirementId
}

actual interface GetRequirementQueryResultDTO {
    actual val requirement: Requirement?
}
