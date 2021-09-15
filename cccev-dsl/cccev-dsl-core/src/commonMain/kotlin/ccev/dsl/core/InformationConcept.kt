package ccev.dsl.core

open class InformationConcept(
	val identifier: String,
	val type: Code,
	val name: String,
	val description: String,
	val expressionOfExpectedValue: String?
)
