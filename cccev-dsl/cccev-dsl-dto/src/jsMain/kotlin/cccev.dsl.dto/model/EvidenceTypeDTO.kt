package cccev.dsl.dto.model

import ccev.dsl.core.Evidence
import ccev.dsl.core.EvidenceType

@JsExport
@JsName("EvidenceTypeDTO")
actual external interface EvidenceTypeDTO: EvidenceType {
    actual val evidence: Evidence?
}