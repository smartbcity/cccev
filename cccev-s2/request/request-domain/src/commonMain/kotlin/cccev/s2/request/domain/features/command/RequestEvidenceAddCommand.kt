package cccev.s2.request.domain.features.command

import cccev.s2.request.domain.model.RequestId
import cccev.s2.request.domain.RequestCommand
import cccev.s2.request.domain.RequestEvent
import cccev.s2.request.domain.RequestState
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Add evidence to a request.
 * @D2 function
 * @parent [cccev.s2.request.domain.RequestAggregate]
 */
typealias RequestEvidenceAddCommandFunction = F2Function<RequestEvidenceAddCommandDTO, RequestEvidenceAddedEventDTO>

/**
 * Command to add an evidence to a request.
 * @D2 command
 * @parent [RequestEvidenceAddCommandFunction]
 */
@JsName("RequestEvidenceAddCommandDTO")
interface RequestEvidenceAddCommandDTO : RequestCommand {
	/**
	 * The unique id of the request.
	 */
	override val id: RequestId
}

/**
 * Event sent when an evidence has been add to a request.
 * @D2 event
 * @parent [RequestEvidenceAddCommandFunction]
 */
@JsName("RequestEvidenceAddedEventDto")
interface RequestEvidenceAddedEventDTO : RequestEvent {
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
@JsName("RequestEvidenceAddCommand")
class RequestEvidenceAddCommand(
	override val id: RequestId,
) : RequestEvidenceAddCommandDTO

@JsExport
@JsName("RequestEvidenceAddedEvent")
class RequestEvidenceAddedEvent(
	override val id: RequestId,
	override val type: RequestState.Created = RequestState.Created,
) : RequestEvidenceAddedEventDTO
