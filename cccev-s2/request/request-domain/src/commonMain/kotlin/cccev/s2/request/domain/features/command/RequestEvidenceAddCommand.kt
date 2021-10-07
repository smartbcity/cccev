package cccev.s2.request.domain.features.command

import cccev.s2.request.domain.RequestCommand
import cccev.s2.request.domain.RequestEvent
import cccev.s2.request.domain.RequestState
import cccev.s2.request.domain.model.RequestId
import ccev.dsl.core.Evidence
import ccev.dsl.core.EvidenceDTO
import ccev.dsl.core.EvidenceId
import f2.dsl.fnc.F2Function

/**
 * Add evidence to a request.
 * @D2 function
 * @parent [cccev.s2.request.domain.RequestAggregate]
 */
typealias RequestEvidenceAddCommandFunction = F2Function<RequestEvidenceAddCommand, RequestEvidenceAddedEvent>

/**
 * Command to add an evidence to a request.
 * @D2 command
 * @parent [RequestEvidenceAddCommandFunction]
 */
expect interface RequestEvidenceAddCommandDTO: RequestCommand {
	/**
	 * The unique id of the request.
	 */
	override val id: RequestId

	/**
	 * The evidence to add.
	 */
	val evidence: EvidenceDTO
}

/**
 * Event sent when an evidence has been added to a request.
 * @D2 event
 * @parent [RequestEvidenceAddCommandFunction]
 */
expect interface RequestEvidenceAddedEventDTO: RequestEvent {
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
	 * Identifier of the newly added evidence.
	 */
	val evidenceId: EvidenceId
}

class RequestEvidenceAddCommand(
	override val id: RequestId,
	override val evidence: Evidence,
): RequestEvidenceAddCommandDTO

class RequestEvidenceAddedEvent(
	override val id: RequestId,
	override val type: RequestState.Created = RequestState.Created,
	override val evidenceId: EvidenceId,
): RequestEvidenceAddedEventDTO
