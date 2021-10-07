package cccev.f2.model

import cccev.dsl.dto.model.InformationConceptDTOBase
import ccev.dsl.core.EvidenceTypeListId
import ccev.dsl.core.InformationConceptBase
import ccev.dsl.core.SupportedValue
import java.util.UUID

fun InformationConceptBase.toDTO(evidenceTypeLists: List<EvidenceTypeListId>, supportedValue: SupportedValue?) = InformationConceptDTOBase(
    identifier = identifier,
    name = name,
    unit = unit,
    type = type,
    description = description,
    expressionOfExpectedValue = expressionOfExpectedValue,
    evidenceTypeLists = evidenceTypeLists.toTypedArray(),
    supportedValue = supportedValue ?: SupportedValue(
        identifier = UUID.randomUUID().toString(),
        providesValueFor = identifier
    )
)
