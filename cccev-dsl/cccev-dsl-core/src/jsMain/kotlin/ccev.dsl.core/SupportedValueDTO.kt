package ccev.dsl.core

@JsExport
@JsName("SupportedValueDTO")
actual external interface SupportedValueDTO {
    actual val identifier: SupportedValueId
    actual val value: String?
    actual val query: String?
    actual val providesValueFor: InformationConceptId
}
