package ccev.dsl.core

open class Evidence(
    val isConformantTo: List<EvidenceTypeBase>,
    val supportsValue: List<SupportedValue> = emptyList(),
    val supportsConcept: List<InformationConceptBase> = emptyList(),
    val supportsRequirement: List<Requirement> = emptyList(),
    val validityPeriod: PeriodOfTime? = null
)

open class SupportedValue (
    val value: String? = null,
    val query: String? = null,
    val providesValueFor: InformationConceptBase
)

