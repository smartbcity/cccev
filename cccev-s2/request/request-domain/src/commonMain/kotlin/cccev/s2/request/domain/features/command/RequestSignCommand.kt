package cccev.s2.request.domain.features.command

import cccev.s2.request.domain.RequestCommand
import cccev.s2.request.domain.RequestEvent
import cccev.s2.request.domain.RequestState
import cccev.s2.request.domain.model.RequestId
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Sign to a request.
 * @D2 function
 * @parent [cccev.s2.request.domain.RequestAggregate]
 */
typealias RequestSignCommandFunction = F2Function<RequestSignCommand, RequestSignedEvent>

/**
 * Command to add an supported Value to a request.
 * @D2 command
 * @parent [RequestSignCommandFunction]
 */
@JsName("RequestSignCommandDTO")
interface RequestSignCommandDTO: RequestCommand {
	/**
	 * The unique id of the request.
	 */
	override val id: RequestId
}

/**
 * Event sent when an supported Value has been add to a request.
 * @D2 event
 * @parent [RequestSignCommandFunction]
 */
@JsName("RequestSignedEventDto")
interface RequestSignedEventDTO: RequestEvent {
	/**
	 * The unique id of the request.
	 */
	override val id: RequestId

	/**
	 * The current state of the request.
	 * @example "Signed"
	 */
	override val type: RequestState.Signed
}

@JsExport
@JsName("RequestSignCommand")
class RequestSignCommand(
	override val id: RequestId,
): RequestSignCommandDTO

@JsExport
@JsName("RequestSignedEvent")
class RequestSignedEvent(
	override val id: RequestId,
	override val type: RequestState.Signed = RequestState.Signed,
): RequestSignedEventDTO
