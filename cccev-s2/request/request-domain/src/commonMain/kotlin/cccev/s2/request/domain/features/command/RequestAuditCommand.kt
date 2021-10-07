package cccev.s2.request.domain.features.command

import cccev.s2.request.domain.RequestCommand
import cccev.s2.request.domain.RequestEvent
import cccev.s2.request.domain.RequestState
import cccev.s2.request.domain.model.RequestId
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Audit to a request.
 * @D2 function
 * @parent [cccev.s2.request.domain.RequestAggregate]
 */
typealias RequestAuditCommandFunction = F2Function<RequestAuditCommand, RequestAuditedEvent>

/**
 * Command to add a supported Value to a request.
 * @D2 command
 * @parent [RequestAuditCommandFunction]
 */
@JsName("RequestAuditCommandDTO")
interface RequestAuditCommandDTO: RequestCommand {
	/**
	 * The unique id of the request.
	 */
	override val id: RequestId
}

/**
 * Event sent when a supported Value has been added to a request.
 * @D2 event
 * @parent [RequestAuditCommandFunction]
 */
@JsName("RequestAuditedEventDto")
interface RequestAuditedEventDTO: RequestEvent {
	/**
	 * The unique id of the request.
	 */
	override val id: RequestId

	/**
	 * The current state of the request.
	 * @example "Audited"
	 */
	override val type: RequestState.Audited
}

@JsExport
@JsName("RequestAuditCommand")
class RequestAuditCommand(
	override val id: RequestId,
): RequestAuditCommandDTO

@JsExport
@JsName("RequestAuditedEvent")
class RequestAuditedEvent(
	override val id: RequestId,
	override val type: RequestState.Audited = RequestState.Audited,
): RequestAuditedEventDTO
