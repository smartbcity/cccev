package ccev.dsl.core

typealias EvidenceId = String
typealias SupportedValueId = String
typealias InformationConceptId = String

expect interface EvidenceDTO {
    val isConformantTo: List<EvidenceTypeId>
    val supportsValue: List<SupportedValueId>
    val supportsConcept: List<InformationConceptId>
    val supportsRequirement: List<RequirementId>
    val validityPeriod: PeriodOfTime?
    val file: String?
}

open class Evidence(
    val isConformantTo: List<EvidenceTypeId>,
    val supportsValue: List<SupportedValueId> = emptyList(),
    val supportsConcept: List<InformationConceptId> = emptyList(),
    val supportsRequirement: List<RequirementId> = emptyList(),
    val validityPeriod: PeriodOfTime? = null,
    val file: String? = null
)




