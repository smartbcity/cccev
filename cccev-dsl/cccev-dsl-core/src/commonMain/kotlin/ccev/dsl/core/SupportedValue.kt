package ccev.dsl.core

expect interface SupportedValueDTO {
    val identifier: SupportedValueId
    val value: String?
    val query: String?
    val providesValueFor: InformationConceptId
}

open class SupportedValue(
    override val identifier: SupportedValueId,
    override val value: String? = null,
    override val query: String? = null,
    override val providesValueFor: InformationConceptId
): SupportedValueDTO
