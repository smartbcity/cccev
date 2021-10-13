package cccev.dsl.cc

import ccev.dsl.core.InformationConceptBase
import ccev.dsl.core.Ratio
import ccev.dsl.core.XSDDate

object Scope1: InformationConceptBase(
    identifier = "bubble_1631745628421x226481125220847400",
    name = "Scope 1",
    unit = TonsCo2E,
    type = CC.Scope,
    description = "Scope 1"
)

object Scope2: InformationConceptBase(
    identifier = "bubble_1631745725079x715449360344731600",
    name = "Scope 2",
    unit = TonsCo2E,
    type = CC.Scope,
    description = "Scope 2"
)

object Scope3: InformationConceptBase(
    identifier = "bubble_1631745764693x799770971892103800",
    name = "Scope 3",
    unit = TonsCo2E,
    type = CC.Scope,
    description = "Scope 3"
)

object ScopeTotal: InformationConceptBase(
    identifier = "scopeTotal",
    name = "Scope Total",
    unit = TonsCo2E,
    type = CC.Scope,
    description = "Scope Total",
    expressionOfExpectedValue = "${Scope1.identifier} + ${Scope2.identifier} + ${Scope3.identifier}",
    dependsOn = listOf(Scope1.identifier, Scope2.identifier, Scope3.identifier)
)

object VintagePeriodStart: InformationConceptBase(
    identifier = "vintagePeriodStart",
    name = "Début période référence",
    unit = XSDDate,
    type = CC.Vintage,
    description = "Scope 3"
)

object VintagePeriodEnd: InformationConceptBase(
    identifier = "vintagePeriodEnd",
    name = "Fin période référence",
    unit = XSDDate,
    type = CC.Vintage,
    description = "Scope 3"
)

object Participation: InformationConceptBase(
    identifier = "bubble_1633282057103x338292671526627460",
    name = "Participation",
    unit = Ratio,
    type = CCE.Participation,
    description = "Pourcentage de participation"
)

object AllocatedEmissions: InformationConceptBase(
    identifier = "allocatedEmissions",
    name = "Émissions allouées",
    unit = TonsCo2E,
    type = CCE.Participation,
    description = "Émissions allouées",
    expressionOfExpectedValue = "${ScopeTotal.identifier} * ${Participation.identifier} / 100",
    dependsOn = listOf(ScopeTotal.identifier, Participation.identifier)
)

