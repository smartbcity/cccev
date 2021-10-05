package ccev.dsl.core

actual interface CUnitDTO {
    actual val identifier: String
    actual val name: String
    actual val description: String
    actual val notation: String?
    actual val type: CUnitType
}