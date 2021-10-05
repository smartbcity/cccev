package cccev.f2.model

import cccev.dsl.dto.model.EvidenceTypeDTOBase
import cccev.dsl.dto.model.EvidenceTypeListDTOBase
import ccev.dsl.core.EvidenceTypeBase
import ccev.dsl.core.EvidenceTypeListBase

fun EvidenceTypeListBase.toDTO() = EvidenceTypeListDTOBase(
    identifier = identifier,
    name = name,
    description = description,
    specifiesEvidenceType = specifiesEvidenceType.map(EvidenceTypeBase::toDTO)
)

fun EvidenceTypeBase.toDTO() = EvidenceTypeDTOBase(
    identifier = identifier,
    name = name,
    evidenceTypeClassification = evidenceTypeClassification,
    validityPeriodConstraint = validityPeriodConstraint,
    issuingPlace = issuingPlace,
    evidence = null
)
