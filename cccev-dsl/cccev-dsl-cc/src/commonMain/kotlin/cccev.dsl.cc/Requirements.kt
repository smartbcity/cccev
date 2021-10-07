@file:Suppress("MatchingDeclarationName")
package cccev.dsl.cc

import ccev.dsl.core.InformationRequirement

object ScopeInfo: InformationRequirement(
    description = "Scope",
    identifier = "Scope",
    name = "Scope",
    type = CC.Scope,
    hasConcept = listOf(
        Scope1,
        Scope2,
        Scope3,
        ScopeTotal
    ),
    hasEvidenceTypeList = listOf(
        BilanCarboneETL,
    )
)

object VintagePeriod: InformationRequirement(
    identifier = "vintagePeriod",
    name = "Période de référence",
    description = "Période de référence",
    type = CC.Vintage,
    hasConcept = listOf(
        VintagePeriodStart,
        VintagePeriodEnd
    ),
    hasEvidenceTypeList = listOf(
        BilanCarboneETL,
    )
)
