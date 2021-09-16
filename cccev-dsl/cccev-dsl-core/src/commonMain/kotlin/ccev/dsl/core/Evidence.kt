package ccev.dsl.core

open class Evidence(
    val isConformantTo: List<EvidenceType>,
    val supportsValue: List<SupportedValue> = emptyList(),
    val supportsConcept: List<InformationConcept> = emptyList(),
    val supportsRequirement: List<Requirement> = emptyList(),
    val validityPeriod: PeriodOfTime? = null
)

open class SupportedValue (
    val value: String? = null,
    val query: String? = null,
    val providesValueFor: InformationConcept
)

