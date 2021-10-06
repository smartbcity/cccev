package cccev.dsl.cc

import ccev.dsl.core.InformationConceptBase

object Scope1: InformationConceptBase(
    identifier = "scope1",
    name = "Scope 1",
    unit = TonsCo2E,
    type = CC.Scope,
    description = "Scope 1",
    expressionOfExpectedValue = null
)

object Scope2: InformationConceptBase(
    identifier = "scope2",
    name = "Scope 2",
    unit = TonsCo2E,
    type = CC.Scope,
    description = "Scope 2",
    expressionOfExpectedValue = null
)

object Scope3: InformationConceptBase(
    identifier = "scope3",
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
