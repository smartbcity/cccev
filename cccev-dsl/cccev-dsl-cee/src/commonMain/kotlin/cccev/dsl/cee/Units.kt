package cccev.dsl.cee

import ccev.dsl.core.CUnit
import ccev.dsl.core.CUnitType

object KWhCumac: CUnit(
    identifier = "kWhCumac",
    name = "Kilowatt-Heure CUMAC",
    description = "kilowatt-heures cumulés et actualisés",
    notation = "kWh Cumac",
    type = CUnitType.number
)
