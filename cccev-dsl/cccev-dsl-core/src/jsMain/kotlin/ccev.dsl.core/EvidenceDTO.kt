package ccev.dsl.core

@JsExport
@JsName("EvidenceDTO")
actual external interface EvidenceDTO {
    actual val identifier: EvidenceId
    actual val isConformantTo: List<EvidenceTypeId>
    actual val supportsValue: List<SupportedValueId>
    actual val supportsConcept: List<InformationConceptId>
    actual val supportsRequirement: List<RequirementId>
    actual val validityPeriod: PeriodOfTime?
    actual val name: String
    actual val file: String?
}
