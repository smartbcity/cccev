package cccev.s2.request.domain.features.command

import cccev.s2.request.domain.RequestCommand
import cccev.s2.request.domain.RequestEvent
import cccev.s2.request.domain.RequestState
import cccev.s2.request.domain.model.RequestId
import ccev.dsl.core.InformationConceptId
import ccev.dsl.core.SupportedValueDTO

actual interface RequestSupportedValueAddCommandDTO: RequestCommand {
	actual override val id: RequestId
	actual val supportedValue: SupportedValueDTO
}

actual interface RequestSupportedValueAddedEventDTO: RequestEvent {
	actual override val id: RequestId
	actual override val type: RequestState.Created
	actual val providesValueFor: InformationConceptId
}
