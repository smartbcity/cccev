package ccev.dsl.core

actual interface InformationConcept {
    actual val identifier: String
    actual val name: String
    actual val unit: CUnitDTO
    actual val type: Code
    actual val description: String
    actual val expressionOfExpectedValue: String?
    actual val dependsOn: List<InformationConceptId>
}
