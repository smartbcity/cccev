package cccev.dsl.cee.baten101

import ccev.dsl.core.CUnit
import ccev.dsl.core.CUnitType

object SquareMeter: CUnit(
    identifier = "squareMeter",
    name = "Mètre carré",
    description = "Mètre carré",
    notation = "m²",
    type = CUnitType.number
)

object SquareMeterKelvinPerWatt: CUnit(
    identifier = "squareMeterKelvinPerWatt",
    name = "Mètre carré kelvin par watt",
    description = "Mètre carré kelvin par watt",
    notation = "m²K/W",
    type = CUnitType.number
)

object kWhCumacPerSquareMeter: CUnit(
    identifier = "kwhPerSquareMeter",
    name = "Killowatt-heure Cumac par mètre carré",
    description = "Killowatt-heure Cumac par mètre carré",
    notation = "kWh Cumac/m²",
    type = CUnitType.number
)
