package cccev.dsl.dto.query

import cccev.dsl.dto.model.InformationConceptDTO
import cccev.s2.request.domain.model.RequestId
import ccev.dsl.core.RequirementId

@JsExport
@JsName("GetInformationConceptsQueryDTO")
actual external interface GetInformationConceptsQueryDTO {
    actual val requirement: RequirementId
    actual val requestId: RequestId
}

@JsExport
@JsName("GetInformationConceptsQueryResultDTO")
actual external interface GetInformationConceptsQueryResultDTO {
    actual val informationConcepts: List<InformationConceptDTO>
}
