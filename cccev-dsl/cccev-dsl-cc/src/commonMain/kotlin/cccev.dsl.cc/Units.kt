@file:Suppress("MatchingDeclarationName")
package cccev.dsl.cc

import ccev.dsl.core.CUnit
import ccev.dsl.core.CUnitType

object TonsCo2E: CUnit(
    identifier = "tonsCO2e",
    name = "Tonnes de CO2e",
    description = "Tonnes de CO2 équivalent",
    notation = "tCO2e",
    type = CUnitType.number
)
