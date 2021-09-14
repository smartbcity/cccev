package f2.dsl.fnc

import ccev.dsl.core.CerfaCode
import ccev.dsl.core.Code
import ccev.dsl.core.Contraint
import ccev.dsl.core.EvidenceType
import ccev.dsl.core.EvidenceTypeList
import ccev.dsl.core.InformationConcept
import ccev.dsl.core.InformationRequirement
import ccev.dsl.core.PeriodOfTime
import ccev.dsl.core.ReferenceFramework
import ccev.dsl.core.Requirement
import ccev.dsl.core.XSDString
import ccev.dsl.core.criterion
import kotlin.time.Duration

val cee = ReferenceFramework(
	identifier = "Cee",
	isDerivedFrom = listOf(
		IND_BA_116
	)
)
