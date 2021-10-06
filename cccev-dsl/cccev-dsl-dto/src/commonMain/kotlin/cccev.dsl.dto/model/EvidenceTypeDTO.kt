package cccev.dsl.dto.model

import ccev.dsl.core.Code
import ccev.dsl.core.CoreLocationLocation
import ccev.dsl.core.Evidence
import ccev.dsl.core.EvidenceType
import ccev.dsl.core.EvidenceTypeId
import ccev.dsl.core.PeriodOfTime

expect interface EvidenceTypeDTO: EvidenceType {
    val evidence: Evidence?
}

class EvidenceTypeDTOBase(
    override val identifier: EvidenceTypeId,
    override val name: String,
    override val evidenceTypeClassification: Code,
    override val validityPeriodConstraint: PeriodOfTime?,
    override val issuingPlace: CoreLocationLocation?,
    override val evidence: Evidence?
): EvidenceTypeDTO
