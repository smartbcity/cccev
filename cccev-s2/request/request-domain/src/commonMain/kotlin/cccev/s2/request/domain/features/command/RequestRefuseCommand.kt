package cccev.s2.request.domain.features.command

import cccev.s2.request.domain.RequestCommand
import cccev.s2.request.domain.RequestEvent
import cccev.s2.request.domain.RequestState
import cccev.s2.request.domain.model.RequestId
import f2.dsl.fnc.F2Function

/**
 * Refuse to a request.
 * @D2 function
 * @parent [cccev.s2.request.domain.RequestAggregate]
 */
typealias RequestRefuseCommandFunction = F2Function<RequestRefuseCommand, RequestRefusedEvent>

/**
 * Command to add a supported Value to a request.
 * @D2 command
 * @parent [RequestRefuseCommandFunction]
 */
expect interface RequestRefuseCommandDTO: RequestCommand {
	/**
	 * The unique id of the request.
	 */
	override val id: RequestId
}

/**
 * Event sent when an supported Value has been add to a request.
 * @D2 event
 * @parent [RequestRefuseCommandFunction]
 */
expect interface RequestRefusedEventDTO: RequestEvent {
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

class RequestRefuseCommand(
	override val id: RequestId,
): RequestRefuseCommandDTO

class RequestRefusedEvent(
	override val id: RequestId,
	override val type: RequestState.Created = RequestState.Created,
): RequestRefusedEventDTO
