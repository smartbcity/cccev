package cccev.dsl.dto.query

import cccev.dsl.dto.model.EvidenceTypeListDTO
import ccev.dsl.core.RequirementId

@JsExport
@JsName("GetEvidenceTypeListsQueryDTO")
actual external interface GetEvidenceTypeListsQueryDTO {
    actual val requirement: RequirementId
}

@JsExport
@JsName("GetEvidenceTypeListsQueryResultDTO")
actual external interface GetEvidenceTypeListsQueryResultDTO {
    actual val evidenceTypeLists: List<List<EvidenceTypeListDTO>>
}
