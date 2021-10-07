package cccev.dsl.cc

import ccev.dsl.core.EvidenceTypeBase
import ccev.dsl.core.EvidenceTypeListBase

object BilanCarboneETL: EvidenceTypeListBase(
    identifier = "bilanCarboneETL",
    name = "Bilan Carbone",
    description = "BilanCarbone",
    specifiesEvidenceType = listOf(
        BilanCarboneET
    )
)

object BilanCarboneET: EvidenceTypeBase(
    identifier = "bilanCarboneET",
    name = "Bilan Carbone",
    evidenceTypeClassification = BilanCarbone
)

object BilanParticipationETL: EvidenceTypeListBase(
    identifier = "bilanParticipationETL",
    name = "Bilan Participation",
    description = "BilanParticipation",
    specifiesEvidenceType = listOf(
        BilanParticipationET
    )
)

object BilanParticipationET: EvidenceTypeBase(
    identifier = "bilanParticipationET",
    name = "Bilan Participation",
    evidenceTypeClassification = BilanParticipation
)
