package cccev.dsl.cee.indba116

import ccev.dsl.core.CUnit
import ccev.dsl.core.CUnitType

object LumenPerW: CUnit(
    identifier = "lumenPerWatt",
    name = "Lumen par Watt",
    description = "Lumen par Watt",
    notation = "lm/W",
    type = CUnitType.number
)

object Variation: CUnit(
    identifier = "variation",
    name = "Variation",
    description = "Variation d'une valeur à une autre",
    notation = "%",
    type = CUnitType.number
)

object KWhCumacPerW: CUnit(
    identifier = "kwhCumacPerWatt",
    name = "Kilowatt-heures Cumac par Watt",
    description = "Kilowatt-heures cumulés et actualisés par Watt",
    notation = "kWh Cumac/W",
    type = CUnitType.number
)

object Watt: CUnit(
    identifier = "watt",
    name = "Watt",
    description = "Watt",
    notation = "W",
    type = CUnitType.number
)
