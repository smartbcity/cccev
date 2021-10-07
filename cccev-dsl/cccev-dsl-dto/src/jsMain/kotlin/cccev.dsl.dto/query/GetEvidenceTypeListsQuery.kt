package cccev.dsl.dto.query

import cccev.dsl.dto.model.EvidenceTypeListDTO
import cccev.s2.request.domain.model.RequestId
import ccev.dsl.core.RequirementId

@JsExport
@JsName("GetEvidenceTypeListsQueryDTO")
actual external interface GetEvidenceTypeListsQueryDTO {
    actual val requirement: RequirementId
    actual val id: RequestId
}

@JsExport
@JsName("GetEvidenceTypeListsQueryResultDTO")
actual external interface GetEvidenceTypeListsQueryResultDTO {
    actual val evidenceTypeLists: List<List<EvidenceTypeListDTO>>
}
