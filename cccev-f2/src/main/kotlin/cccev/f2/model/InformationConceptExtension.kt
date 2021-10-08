package cccev.f2.model

import cccev.dsl.dto.model.InformationConceptDTOBase
import ccev.dsl.core.EvidenceTypeId
import ccev.dsl.core.InformationConceptBase
import ccev.dsl.core.SupportedValue
import java.util.UUID

fun InformationConceptBase.toDTO(evidenceTypes: List<List<EvidenceTypeId>>, supportedValue: SupportedValue?) = InformationConceptDTOBase(
    identifier = identifier,
    name = name,
    unit = unit,
    type = type,
    description = description,
    expressionOfExpectedValue = expressionOfExpectedValue,
    evidenceTypes = evidenceTypes.map(List<EvidenceTypeId>::toTypedArray).toTypedArray(),
    supportedValue = supportedValue ?: SupportedValue(
        identifier = UUID.randomUUID().toString(),
        providesValueFor = identifier
    )
)
