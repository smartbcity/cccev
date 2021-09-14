package ccev.dsl.core

open class EvidenceTypeList(
	description: String,
	identifier: String,
	name: String,
	specifiesEvidenceType: List<EvidenceType>
)

open class EvidenceType(
	evidenceTypeClassification: Code,
	identifier: String,
	validityPeriodConstraint: PeriodOfTime? = null,
	issuingPlace: CoreLocationLocation? = null
)

open class CoreLocationLocation

open class PeriodOfTime(
	duration: String? = null,
	endTime: Int? = null,
	startTime: Int? = null,
)
