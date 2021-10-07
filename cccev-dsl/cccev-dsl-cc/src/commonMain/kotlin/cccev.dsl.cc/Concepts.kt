package cccev.dsl.cc

import ccev.dsl.core.InformationConceptBase
import ccev.dsl.core.XSDDate

object Scope1: InformationConceptBase(
    identifier = "1631745628421x226481125220847400",
    name = "Scope 1",
    unit = TonsCo2E,
    type = CC.Scope,
    description = "Scope 1",
    expressionOfExpectedValue = null
)

object Scope2: InformationConceptBase(
    identifier = "1631745725079x715449360344731600",
    name = "Scope 2",
    unit = TonsCo2E,
    type = CC.Scope,
    description = "Scope 2",
    expressionOfExpectedValue = null
)

object Scope3: InformationConceptBase(
    identifier = "1631745764693x799770971892103800",
    name = "Scope 3",
    unit = TonsCo2E,
    type = CC.Scope,
    description = "Scope 3",
    expressionOfExpectedValue = null
)

object ScopeTotal: InformationConceptBase(
    identifier = "scopeTotal",
    name = "Scope Total",
    unit = TonsCo2E,
    type = CC.Scope,
    description = "Scope Total",
    expressionOfExpectedValue = "${Scope1.identifier} + ${Scope2.identifier} + ${Scope3.identifier}"
)

object VintagePeriodStart: InformationConceptBase(
    identifier = "vintagePeriodStart",
    name = "Début période référence",
    unit = XSDDate,
    type = CC.Vintage,
    description = "Scope 3",
    expressionOfExpectedValue = null
)

object VintagePeriodEnd: InformationConceptBase(
    identifier = "vintagePeriodEnd",
    name = "Fin période référence",
    unit = XSDDate,
    type = CC.Vintage,
    description = "Scope 3",
    expressionOfExpectedValue = null
)
