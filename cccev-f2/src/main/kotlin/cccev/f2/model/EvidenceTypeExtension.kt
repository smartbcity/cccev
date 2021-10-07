package cccev.f2.model

import cccev.dsl.dto.model.EvidenceTypeDTOBase
import cccev.dsl.dto.model.EvidenceTypeListDTOBase
import ccev.dsl.core.Evidence
import ccev.dsl.core.EvidenceTypeBase
import ccev.dsl.core.EvidenceTypeId
import ccev.dsl.core.EvidenceTypeListBase

fun EvidenceTypeListBase.toDTO(evidences: Map<EvidenceTypeId, Evidence?>) = EvidenceTypeListDTOBase(
    identifier = identifier,
    name = name,
    description = description,
    specifiesEvidenceType = specifiesEvidenceType.map { it.toDTO(evidences) }
)

fun EvidenceTypeBase.toDTO(evidences: Map<EvidenceTypeId, Evidence?>) = EvidenceTypeDTOBase(
    identifier = identifier,
    name = name,
    evidenceTypeClassification = evidenceTypeClassification,
    validityPeriodConstraint = validityPeriodConstraint,
    issuingPlace = issuingPlace,
    evidence = evidences[identifier]
)
