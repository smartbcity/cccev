package cccev.s2.request.domain.features.command

import cccev.s2.request.domain.model.RequestId
import cccev.s2.request.domain.RequestInitCommand
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * @D2 function Init a request
 * @parent [cccev.s2.request.domain.RequestAggregate]
 */
typealias RequestInitCommandFunction = F2Function<RequestInitCommandDTO, RequestInitializedEventDTO>

/**
 * Command to init a request.
 * @D2 command
 * @parent [RequestInitCommandFunction]
 */
@JsName("RequestInitCommandDTO")
interface RequestInitCommandDTO : RequestInitCommand

/**
 * Event sent when an organization has been created.
 * @D2 event
 * @parent [RequestInitCommandFunction]
 */
@JsName("RequestInitializedEventDTO")
interface RequestInitializedEventDTO

@JsExport
@JsName("RequestInitCommand")
class RequestInitCommand(
	val id: RequestId
) : RequestInitCommandDTO

@JsExport
@JsName("RequestInitializedEvent")
class RequestInitializedEvent(
	val id: RequestId,
) : RequestInitializedEventDTO
