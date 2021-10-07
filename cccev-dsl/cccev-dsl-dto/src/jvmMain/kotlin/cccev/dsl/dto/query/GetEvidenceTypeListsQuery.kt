package cccev.dsl.dto.query

import cccev.dsl.dto.model.EvidenceTypeListDTO
import cccev.s2.request.domain.model.RequestId
import ccev.dsl.core.RequirementId

actual interface GetEvidenceTypeListsQueryDTO {
    actual val requirement: RequirementId
    actual val id: RequestId
}

actual interface GetEvidenceTypeListsQueryResultDTO {
    actual val evidenceTypeLists: List<List<EvidenceTypeListDTO>>
}
