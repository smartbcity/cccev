package cccev.f2.model

import cccev.dsl.dto.model.InformationConceptDTOBase
import ccev.dsl.core.EvidenceTypeListId
import ccev.dsl.core.InformationConceptBase

fun InformationConceptBase.toDTO(evidenceTypeLists: List<EvidenceTypeListId>) = InformationConceptDTOBase(
    identifier = identifier,
    name = name,
    unit = unit,
    type = type,
    description = description,
    expressionOfExpectedValue = expressionOfExpectedValue,
    evidenceTypeLists = evidenceTypeLists.toTypedArray()
)
