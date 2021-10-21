package features.cccev.test.entities.evidence

import ccev.dsl.core.Evidence
import ccev.dsl.core.EvidenceId
import ccev.dsl.core.EvidenceTypeId
import ccev.dsl.core.InformationConceptId
import ccev.dsl.core.PeriodOfTime
import ccev.dsl.core.RequirementId
import ccev.dsl.core.SupportedValueId
import features.cccev.test.data.DataTest
import java.util.UUID

fun DataTest.evidence(
    identifier: EvidenceId = UUID.randomUUID().toString(),
    isConformantTo: List<EvidenceTypeId> = emptyList(),
    supportsValue: List<SupportedValueId> = emptyList(),
    supportsConcept: List<InformationConceptId> = emptyList(),
    supportsRequirement: List<RequirementId> = emptyList(),
    validityPeriod: PeriodOfTime? = null,
    name: String = "",
    file: String? = null
) = Evidence(
    identifier = identifier,
    isConformantTo = isConformantTo,
    supportsValue = supportsValue,
    supportsConcept = supportsConcept,
    supportsRequirement = supportsRequirement,
    validityPeriod = validityPeriod,
    name = name,
    file = file
)
