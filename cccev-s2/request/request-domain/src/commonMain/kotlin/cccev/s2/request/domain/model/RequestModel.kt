package cccev.s2.request.domain.model

import kotlin.js.JsExport
import kotlin.js.JsName

typealias RequestId = String

@JsName("RequestModelDTO")
interface RequestModelDTO {
	/**
	 * The unique id of the organization.
	 */
	val id: RequestId
}

@JsExport
@JsName("RequestModel")
open class RequestModel(
	override val id: RequestId,
) : RequestModelDTO
