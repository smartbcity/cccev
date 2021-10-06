package cccev.data.entity.evidence

import cccev.s2.request.app.entity.EvidenceEntity
import ccev.dsl.core.Evidence

fun EvidenceEntity.toEvidence() = Evidence(
    isConformantTo = isConformantTo,
    supportsValue = supportsValue,
    supportsConcept = supportsConcept,
    supportsRequirement = supportsRequirement,
    validityPeriod = validityPeriod
)
