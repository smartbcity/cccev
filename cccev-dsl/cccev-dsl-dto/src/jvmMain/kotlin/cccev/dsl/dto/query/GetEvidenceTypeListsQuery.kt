package cccev.dsl.dto.query

import cccev.dsl.dto.model.EvidenceTypeListDTO
import ccev.dsl.core.RequirementId

actual interface GetEvidenceTypeListsQueryDTO {
    actual val requirement: RequirementId
}

actual interface GetEvidenceTypeListsQueryResultDTO {
    actual val evidenceTypeLists: List<List<EvidenceTypeListDTO>>
}
