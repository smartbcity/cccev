package cccev.s2.request.domain.features.command

import cccev.s2.request.domain.RequestCommand
import cccev.s2.request.domain.RequestEvent
import cccev.s2.request.domain.RequestState
import cccev.s2.request.domain.model.RequestId
import ccev.dsl.core.InformationConceptId
import ccev.dsl.core.SupportedValue
import ccev.dsl.core.SupportedValueDTO
import f2.dsl.fnc.F2Function

/**
 * Add a Supported Value to a request.
 * @D2 function
 * @parent [cccev.s2.request.domain.RequestAggregate]
 */
typealias RequestSupportedValueAddCommandFunction = F2Function<RequestSupportedValueAddCommand, RequestSupportedValueAddedEvent>

/**
 * Command to add an supported Value to a request.
 * @D2 command
 * @parent [RequestSupportedValueAddCommandFunction]
 */
expect interface RequestSupportedValueAddCommandDTO: RequestCommand {
	/**
	 * The unique id of the request.
	 */
	override val id: RequestId

	/**
	 * The supported value to add.
	 */
	val supportedValue: SupportedValueDTO
}

/**
 * Event sent when an supported Value has been add to a request.
 * @D2 event
 * @parent [RequestSupportedValueAddCommandFunction]
 */
expect interface RequestSupportedValueAddedEventDTO: RequestEvent {
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
	 * Identifier of the information concept for which the newly added supported value provides a value.
	 */
	val providesValueFor: InformationConceptId
}

class RequestSupportedValueAddCommand(
	override val id: RequestId,
	override val supportedValue: SupportedValue,
): RequestSupportedValueAddCommandDTO

class RequestSupportedValueAddedEvent(
	override val id: RequestId,
	override val type: RequestState.Created = RequestState.Created,
	override val providesValueFor: InformationConceptId,
): RequestSupportedValueAddedEventDTO
