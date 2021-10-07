package cccev.s2.request.domain.features.command

import cccev.s2.request.domain.RequestCommand
import cccev.s2.request.domain.RequestEvent
import cccev.s2.request.domain.RequestState
import cccev.s2.request.domain.model.RequestId
import ccev.dsl.core.EvidenceId
import f2.dsl.fnc.F2Function

/**
 * Remove evidence from a request.
 * @D2 function
 * @parent [cccev.s2.request.domain.RequestAggregate]
 */
typealias RequestEvidenceRemoveCommandFunction = F2Function<RequestEvidenceRemoveCommand, RequestEvidenceRemovedEvent>

/**
 * Command to remove an evidence from a request.
 * @D2 command
 * @parent [RequestEvidenceRemoveCommandFunction]
 */
expect interface RequestEvidenceRemoveCommandDTO: RequestCommand {
	/**
	 * The unique id of the request.
	 */
	override val id: RequestId

	/**
	 * Identifier of the evidence to remove.
	 */
	val evidenceId: EvidenceId
}

/**
 * Event sent when an evidence has been added to a request.
 * @D2 event
 * @parent [RequestEvidenceRemoveCommandFunction]
 */
expect interface RequestEvidenceRemovedEventDTO: RequestEvent {
	/**
	 * The unique id of the request.
	 */
	override val id: RequestId

	/**
	 * The current state of the request.
	 * @example "Created"
	 */
	override val type: RequestState.Created

	/**
	 * Identifier of the removed evidence.
	 */
	val evidenceId: EvidenceId
}

class RequestEvidenceRemoveCommand(
	override val id: RequestId,
	override val evidenceId: EvidenceId,
): RequestEvidenceRemoveCommandDTO

class RequestEvidenceRemovedEvent(
	override val id: RequestId,
	override val type: RequestState.Created = RequestState.Created,
	override val evidenceId: EvidenceId,
): RequestEvidenceRemovedEventDTO
