package cccev.dsl.dto.query

import ccev.dsl.core.Requirement
import ccev.dsl.core.RequirementId

@JsExport
@JsName("GetRequirementQueryDTO")
actual external interface GetRequirementQueryDTO {
    actual val requirementId: RequirementId
}

@JsExport
@JsName("GetRequirementQueryResultDTO")
actual external interface GetRequirementQueryResultDTO {
    actual val requirement: Requirement?
}
