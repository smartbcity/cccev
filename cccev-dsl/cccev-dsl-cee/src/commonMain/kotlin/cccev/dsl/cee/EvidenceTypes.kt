package cccev.dsl.cee

import ccev.dsl.core.EvidenceType
import ccev.dsl.core.EvidenceTypeList
import ccev.dsl.core.PeriodOfTime


object CertificatProfessionnel: EvidenceTypeList(
    identifier = "CertificatProfessionnel",
    name = "Certificat Professionnel",
    description = "CertificatProfessionnel",
    specifiesEvidenceType = listOf(
        CertificatCerfa
    )
)

object CertificatCerfa: EvidenceType(
    identifier = "CERFA-2321122",
    evidenceTypeClassification = CerfaCode,
    validityPeriodConstraint = PeriodOfTime(
        duration = "10 ans"
    )
)