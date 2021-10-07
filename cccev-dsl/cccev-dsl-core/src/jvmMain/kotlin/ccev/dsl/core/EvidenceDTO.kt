package ccev.dsl.core

actual interface EvidenceDTO {
    actual val identifier: EvidenceId
    actual val isConformantTo: List<EvidenceTypeId>
    actual val supportsValue: List<SupportedValueId>
    actual val supportsConcept: List<InformationConceptId>
    actual val supportsRequirement: List<RequirementId>
    actual val validityPeriod: PeriodOfTime?
    actual val file: String?
}
