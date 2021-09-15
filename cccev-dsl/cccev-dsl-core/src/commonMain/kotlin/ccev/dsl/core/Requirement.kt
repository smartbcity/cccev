package ccev.dsl.core

sealed interface Requirement {
	val description: String?
	val identifier: String?
	val name: String?
	val type: Code?
	val hasRequirement: List<Requirement>?
	val hasConcept: List<InformationConcept>?
	val hasEvidenceTypeList: List<EvidenceTypeList>?
}

open class Criterion(
	override val description: String? = null,
	override val identifier: String?,
	override val name: String?,
	override val type: Code?,
	val bias: Double? = null,
	val weight: Double? = null,
	val weightingConsiderationDescription: String? = null,
	val weightingType: Code? = null,
	override val hasConcept: List<InformationConcept>? = emptyList(),
	override val hasRequirement: List<Requirement>? = emptyList(),
	override val hasEvidenceTypeList: List<EvidenceTypeList>? = emptyList(),
): Requirement

open class InformationRequirement(
	override val description: String?,
	override val identifier: String?,
	override val name: String?,
	override val type: Code?,
	override val hasConcept: List<InformationConcept>? = emptyList(),
	override val hasRequirement: List<Requirement>? = emptyList(),
	override val hasEvidenceTypeList: List<EvidenceTypeList>? = emptyList(),
): Requirement

open class Constraint(
	override val description: String?,
	override val identifier: String?,
	override val name: String?,
	override val type: Code?,
	override val hasConcept: List<InformationConcept>? = emptyList(),
	override val hasRequirement: List<Requirement>? = emptyList(),
	override val hasEvidenceTypeList: List<EvidenceTypeList>? = emptyList(),
): Requirement

/**
 * Custom requirement which is considered validated when at least K of its N sub-requirements are met
 * where K is defined by the property [minRequirementsToMeet] and N is the size of the list [hasRequirement]
 * TODO more meaningful name
 */
open class PartialRequirement(
	override val description: String?,
	override val identifier: String?,
	override val name: String?,
	override val type: Code?,
	val minRequirementsToMeet: Int,
	override val hasConcept: List<InformationConcept>? = emptyList(),
	override val hasRequirement: List<Requirement>? = emptyList(),
	override val hasEvidenceTypeList: List<EvidenceTypeList>? = emptyList(),
): Requirement

interface RequirementBuilder<T: Requirement> {
	var description: String?
	var identifier: String?
	var name: String?
	var type: Code?

	//	var hasRequirement: List<Requirement>?
	var hasConcept: List<InformationConcept>?
	var hasEvidenceTypeList: List<EvidenceTypeList>?

	fun criterion(init: CriterionBuilder.() -> Unit)
	fun informationRequirement(init: InformationRequirementBuilder.() -> Unit)
	fun constraint(init: ConstraintBuilder.() -> Unit)

	operator fun Requirement.unaryPlus()

	fun build(): Requirement
}

class CriterionBuilder: AbstractRequirementBuilder<Criterion>() {
	var bias: Double? = null
	var weight: Double? = null
	var weightingConsiderationDescription: String? = null
	var weightingType: Code? = null

	override fun build(): Criterion = Criterion(
		description = description,
		identifier = identifier,
		name = name,
		type = type,

		hasRequirement = requirements,
		hasConcept = hasConcept,
		hasEvidenceTypeList = hasEvidenceTypeList,

		bias = bias,
		weight = weight,
		weightingConsiderationDescription = weightingConsiderationDescription,
		weightingType = weightingType,
	)
}

class InformationRequirementBuilder: RequirementBuilder<InformationRequirement>,
	AbstractRequirementBuilder<InformationRequirement>() {
	override fun build() = InformationRequirement(
		description = description,
		identifier = identifier,
		name = name,
		type = type,

		hasRequirement = requirements,
		hasConcept = hasConcept,
		hasEvidenceTypeList = hasEvidenceTypeList,
	)
}

class ConstraintBuilder: RequirementBuilder<Constraint>, AbstractRequirementBuilder<Constraint>() {
	override fun build() = Constraint(
		description = description,
		identifier = identifier,
		name = name,
		type = type,
		hasRequirement = requirements,
		hasConcept = hasConcept,
		hasEvidenceTypeList = hasEvidenceTypeList,
	)
}

abstract class AbstractRequirementBuilder<T: Requirement>: RequirementBuilder<T> {
	override var description: String? = null
	override var identifier: String? = null
	override var name: String? = null
	override var type: Code? = null
	override var hasConcept: List<InformationConcept>? = null
	override var hasEvidenceTypeList: List<EvidenceTypeList>? = null
	protected var requirements = mutableListOf<Requirement>()

	override fun criterion(init: CriterionBuilder.() -> Unit) {
		+CriterionBuilder().apply(init).build()
	}

	override fun informationRequirement(init: InformationRequirementBuilder.() -> Unit) {
		+InformationRequirementBuilder().apply(init).build()
	}

	override fun constraint(init: ConstraintBuilder.() -> Unit) {
		+ConstraintBuilder().apply(init).build()
	}

	override operator fun Requirement.unaryPlus() {
		requirements.add(this)
	}
}

fun criterion(init: CriterionBuilder.() -> Unit): Criterion =
	CriterionBuilder().apply(init).build()

fun informationRequirement(init: InformationRequirementBuilder.() -> Unit): InformationRequirement =
	InformationRequirementBuilder().apply(init).build()

fun constraint(init: ConstraintBuilder.() -> Unit): Constraint =
	ConstraintBuilder().apply(init).build()
