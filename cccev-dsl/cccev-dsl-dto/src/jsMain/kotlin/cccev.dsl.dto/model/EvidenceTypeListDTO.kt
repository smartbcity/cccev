package cccev.dsl.dto.model

import ccev.dsl.core.EvidenceTypeList

@JsExport
@JsName("EvidenceTypeListDTO")
actual external interface EvidenceTypeListDTO: EvidenceTypeList {
    actual override val specifiesEvidenceType: List<EvidenceTypeDTO>
}
