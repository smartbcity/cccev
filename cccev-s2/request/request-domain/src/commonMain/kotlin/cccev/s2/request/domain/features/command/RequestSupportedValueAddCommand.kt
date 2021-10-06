package cccev.s2.request.domain.features.command

import cccev.s2.request.domain.model.RequestId
import cccev.s2.request.domain.RequestCommand
import cccev.s2.request.domain.RequestEvent
import cccev.s2.request.domain.RequestState
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Add supported Value to a request.
 * @D2 function
 * @parent [cccev.s2.request.domain.RequestAggregate]
 */
typealias RequestSupportedValueAddCommandFunction = F2Function<RequestSupportedValueAddCommandDTO, RequestSupportedValueAddedEventDTO>

/**
 * Command to add an supported Value to a request.
 * @D2 command
 * @parent [RequestSupportedValueAddCommandFunction]
 */
@JsName("RequestSupportedValueAddCommandDTO")
interface RequestSupportedValueAddCommandDTO : RequestCommand {
	/**
	 * The unique id of the request.
	 */
	override val id: RequestId
}

/**
 * Event sent when an supported Value has been add to a request.
 * @D2 event
 * @parent [RequestSupportedValueAddCommandFunction]
 */
@JsName("RequestSupportedValueAddedEventDto")
interface RequestSupportedValueAddedEventDTO : RequestEvent {
	/**
	 * The unique id of the request.
	 */
	override val id: RequestId

	/**
	 * The current state of the request.
	 * @example "Created"
	 */
	override val type: RequestState.Created
}

@JsExport
@JsName("RequestSupportedValueAddCommand")
class RequestSupportedValueAddCommand(
	override val id: RequestId,
) : RequestSupportedValueAddCommandDTO

@JsExport
@JsName("RequestSupportedValueAddedEvent")
class RequestSupportedValueAddedEvent(
	override val id: RequestId,
	override val type: RequestState.Created = RequestState.Created,
) : RequestSupportedValueAddedEventDTO
