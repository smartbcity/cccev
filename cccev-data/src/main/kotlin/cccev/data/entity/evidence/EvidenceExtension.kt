package cccev.data.entity.evidence

import ccev.dsl.core.Evidence

fun EvidenceEntity.toEvidence() = Evidence(
    identifier = id,
    isConformantTo = isConformantTo,
    supportsValue = supportsValue,
    supportsConcept = supportsConcept,
    supportsRequirement = supportsRequirement,
    validityPeriod = validityPeriod
)
