package cccev.dsl.dto.model

import ccev.dsl.core.EvidenceDTO
import ccev.dsl.core.EvidenceType

actual interface EvidenceTypeDTO: EvidenceType {
    actual val evidence: EvidenceDTO?
}
