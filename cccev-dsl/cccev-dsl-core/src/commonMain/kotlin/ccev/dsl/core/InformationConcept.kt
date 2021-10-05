package ccev.dsl.core

expect interface InformationConcept {
	val identifier: String
	val name: String
	val unit: CUnitDTO
	val type: Code
	val description: String
	val expressionOfExpectedValue: String?
}

open class InformationConceptBase(
	override val identifier: String,
	override val name: String,
	override val unit: CUnit,
	override val type: Code,
	override val description: String,
	override val expressionOfExpectedValue: String?
): InformationConcept
