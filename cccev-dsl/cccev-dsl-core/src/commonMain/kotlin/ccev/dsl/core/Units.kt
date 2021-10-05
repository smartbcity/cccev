package ccev.dsl.core

expect interface CUnitDTO {
    val identifier: String
    val name: String
    val description: String
    val notation: String?
    val type: CUnitType
}

open class CUnit(
    override val identifier: String,
    override val name: String,
    override val description: String,
    override val notation: String? = null,
    override val type: CUnitType
): CUnitDTO

enum class CUnitType {
    boolean, date, number, string
}

object XSDDate: CUnit(
    identifier = "xsdDate",
    name = "XSDDate",
    description = "Date",
    type = CUnitType.date
)

object XSDDouble: CUnit(
    identifier = "xsdDouble",
    name = "XSDDouble",
    description = "Nombre réel quelconque",
    type = CUnitType.number
)

object XSDInt: CUnit(
    identifier = "xsdInt",
    name = "XSDInt",
    description = "Nombre entier quelconque",
    type = CUnitType.number
)

object XSDString: CUnit(
    identifier = "xsdString",
    name = "XSDString",
    description = "Chaîne de caractères quelconque",
    type = CUnitType.string
)

object Duration {
    object Hour: CUnit(
        identifier = "hourDuration",
        name = "Durée en heures",
        description = "Durée en heures",
        notation = "h",
        type = CUnitType.number
    )
    object Year: CUnit(
        identifier = "yearDuration",
        name = "Durée en années",
        description = "Durée en années",
        notation = "an(s)",
        type = CUnitType.number
    )
}
