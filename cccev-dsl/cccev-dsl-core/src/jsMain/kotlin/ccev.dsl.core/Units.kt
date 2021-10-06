@file:Suppress("MatchingDeclarationName")
package ccev.dsl.core

@JsExport
@JsName("UnitDTO")
actual external interface CUnitDTO {
    actual val identifier: String
    actual val name: String
    actual val description: String
    actual val notation: String?
    actual val type: CUnitType
}
