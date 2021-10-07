package cccev.s2.request.domain.features.command

import cccev.s2.request.domain.RequestCommand
import cccev.s2.request.domain.RequestEvent
import cccev.s2.request.domain.RequestState
import cccev.s2.request.domain.model.RequestId
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Send to a request.
 * @D2 function
 * @parent [cccev.s2.request.domain.RequestAggregate]
 */
typealias RequestSendCommandFunction = F2Function<RequestSendCommand, RequestSentEvent>

/**
 * Command to add an supported Value to a request.
 * @D2 command
 * @parent [RequestSendCommandFunction]
 */
@JsName("RequestSendCommandDTO")
interface RequestSendCommandDTO: RequestCommand {
	/**
	 * The unique id of the request.
	 */
	override val id: RequestId
}

/**
 * Event sent when an supported Value has been add to a request.
 * @D2 event
 * @parent [RequestSendCommandFunction]
 */
@JsName("RequestSentEventDto")
interface RequestSentEventDTO: RequestEvent {
	/**
	 * The unique id of the request.
	 */
	override val id: RequestId

	/**
	 * The current state of the request.
	 * @example "Sent"
	 */
	override val type: RequestState.Sent
}

@JsExport
@JsName("RequestSendCommand")
class RequestSendCommand(
	override val id: RequestId,
): RequestSendCommandDTO

@JsExport
@JsName("RequestSentEvent")
class RequestSentEvent(
	override val id: RequestId,
	override val type: RequestState.Sent = RequestState.Sent,
): RequestSentEventDTO
