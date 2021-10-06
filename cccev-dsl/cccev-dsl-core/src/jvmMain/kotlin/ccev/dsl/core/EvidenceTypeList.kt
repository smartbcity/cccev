package ccev.dsl.core

actual interface EvidenceTypeList {
    actual val description: String
    actual val identifier: EvidenceTypeListId
    actual val name: String
    actual val specifiesEvidenceType: List<EvidenceType>
}

actual interface EvidenceType {
    actual val identifier: EvidenceTypeId
    actual val name: String
    actual val evidenceTypeClassification: Code
    actual val validityPeriodConstraint: PeriodOfTime?
    actual val issuingPlace: CoreLocationLocation?
}
