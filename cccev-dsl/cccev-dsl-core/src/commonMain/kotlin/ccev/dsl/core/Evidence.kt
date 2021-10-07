package ccev.dsl.core

typealias EvidenceId = String
typealias SupportedValueId = String

expect interface EvidenceDTO {
    val identifier: EvidenceId
    val isConformantTo: List<EvidenceTypeId>
    val supportsValue: List<SupportedValueId>
    val supportsConcept: List<InformationConceptId>
    val supportsRequirement: List<RequirementId>
    val validityPeriod: PeriodOfTime?
    val name: String
    val file: String?
}

open class Evidence(
    override val identifier: EvidenceId,
    override val isConformantTo: List<EvidenceTypeId>,
    override val supportsValue: List<SupportedValueId> = emptyList(),
    override val supportsConcept: List<InformationConceptId> = emptyList(),
    override val supportsRequirement: List<RequirementId> = emptyList(),
    override val validityPeriod: PeriodOfTime? = null,
    override val name: String = "",
    override val file: String? = null
): EvidenceDTO




