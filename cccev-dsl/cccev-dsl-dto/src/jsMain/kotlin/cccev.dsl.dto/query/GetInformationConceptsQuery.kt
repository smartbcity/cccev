package cccev.dsl.dto.query

import cccev.dsl.dto.model.InformationConceptDTO
import ccev.dsl.core.RequirementId

@JsExport
@JsName("GetInformationConceptsQueryDTO")
actual external interface GetInformationConceptsQueryDTO {
    actual val requirement: RequirementId
}

@JsExport
@JsName("GetInformationConceptsQueryResultDTO")
actual external interface GetInformationConceptsQueryResultDTO {
    actual val informationConcepts: List<InformationConceptDTO>
}
