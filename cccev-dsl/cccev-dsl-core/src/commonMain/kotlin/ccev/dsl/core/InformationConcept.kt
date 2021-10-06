package ccev.dsl.core

typealias InformationConceptId = String

expect interface InformationConcept {
	val identifier: InformationConceptId
	val name: String
	val unit: CUnitDTO
	val type: Code
	val description: String
	val expressionOfExpectedValue: String?
}

open class InformationConceptBase(
	override val identifier: InformationConceptId,
	override val name: String,
	override val unit: CUnit,
	override val type: Code,
	override val description: String,
	override val expressionOfExpectedValue: String?
): InformationConcept
