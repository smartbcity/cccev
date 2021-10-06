package cccev.dsl.cee

import ccev.dsl.core.EvidenceTypeBase
import ccev.dsl.core.EvidenceTypeListBase
import ccev.dsl.core.PeriodOfTime


object CertificatProfessionnel: EvidenceTypeListBase(
    identifier = "CertificatProfessionnel",
    name = "Certificat Professionnel",
    description = "CertificatProfessionnel",
    specifiesEvidenceType = listOf(
        CertificatCerfa
    )
)

object CertificatCerfa: EvidenceTypeBase(
    identifier = "CERFA-2321122",
    name = "Certificat Cerfat",
    evidenceTypeClassification = CerfaCode,
    validityPeriodConstraint = PeriodOfTime(
        duration = "10 ans"
    )
)
