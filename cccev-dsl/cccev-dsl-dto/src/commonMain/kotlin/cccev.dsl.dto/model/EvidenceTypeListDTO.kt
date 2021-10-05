package cccev.dsl.dto.model

import ccev.dsl.core.EvidenceTypeList
import ccev.dsl.core.EvidenceTypeListId

expect interface EvidenceTypeListDTO: EvidenceTypeList {
    override val specifiesEvidenceType: List<EvidenceTypeDTO>
}

class EvidenceTypeListDTOBase(
    override val description: String,
    override val identifier: EvidenceTypeListId,
    override val name: String,
    override val specifiesEvidenceType: List<EvidenceTypeDTOBase>
): EvidenceTypeListDTO
