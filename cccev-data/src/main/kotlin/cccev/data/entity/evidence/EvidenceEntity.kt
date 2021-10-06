package cccev.data.entity.evidence

import cccev.data.EntityBase
import ccev.dsl.core.EvidenceId
import ccev.dsl.core.EvidenceTypeId
import ccev.dsl.core.InformationConceptId
import ccev.dsl.core.PeriodOfTime
import ccev.dsl.core.RequirementId
import ccev.dsl.core.SupportedValueId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.UUID

@Document("evidence")
class EvidenceEntity(
    @Id
    val id: EvidenceId = UUID.randomUUID().toString(),
    val isConformantTo: List<EvidenceTypeId>,
    val supportsValue: List<SupportedValueId> = emptyList(),
    val supportsConcept: List<InformationConceptId> = emptyList(),
    val supportsRequirement: List<RequirementId> = emptyList(),
    val validityPeriod: PeriodOfTime? = null
): EntityBase()
