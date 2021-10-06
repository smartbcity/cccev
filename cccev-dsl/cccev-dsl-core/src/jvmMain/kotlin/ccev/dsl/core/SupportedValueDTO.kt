package ccev.dsl.core

actual interface SupportedValueDTO {
    actual val identifier: SupportedValueId
    actual val value: String?
    actual val query: String?
    actual val providesValueFor: InformationConceptId
}
