package cccev.dsl.dto.model

import ccev.dsl.core.EvidenceTypeList

actual interface EvidenceTypeListDTO: EvidenceTypeList {
    actual override val specifiesEvidenceType: List<EvidenceTypeDTO>
}