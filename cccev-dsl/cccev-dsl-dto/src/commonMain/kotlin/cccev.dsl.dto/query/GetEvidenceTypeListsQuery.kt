package cccev.dsl.dto.query

import cccev.dsl.dto.model.EvidenceTypeListDTO
import cccev.dsl.dto.model.EvidenceTypeListDTOBase
import cccev.s2.request.domain.model.RequestId
import ccev.dsl.core.RequirementId
import f2.dsl.fnc.F2Function

typealias GetEvidenceTypeListsQueryFunction = F2Function<GetEvidenceTypeListsQuery, GetEvidenceTypeListsQueryResult>

expect interface GetEvidenceTypeListsQueryDTO {
    val id: RequestId
    val requirement: RequirementId
}

class GetEvidenceTypeListsQuery(
    override val id: RequestId,
    override val requirement: RequirementId
): GetEvidenceTypeListsQueryDTO

expect interface GetEvidenceTypeListsQueryResultDTO {
    val evidenceTypeLists: List<List<EvidenceTypeListDTO>>
}

class GetEvidenceTypeListsQueryResult(
    override val evidenceTypeLists: List<List<EvidenceTypeListDTOBase>>
): GetEvidenceTypeListsQueryResultDTO
