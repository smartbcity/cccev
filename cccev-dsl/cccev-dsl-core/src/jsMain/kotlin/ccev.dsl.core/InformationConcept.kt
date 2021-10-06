package ccev.dsl.core

@JsExport
@JsName("InformationConcept")
actual external interface InformationConcept {
    actual val identifier: String
    actual val name: String
    actual val unit: CUnitDTO
    actual val type: Code
    actual val description: String
    actual val expressionOfExpectedValue: String?
}
