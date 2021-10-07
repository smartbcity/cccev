package cccev.s2.request.domain.features.command

import cccev.s2.request.domain.RequestCommand
import cccev.s2.request.domain.RequestEvent
import cccev.s2.request.domain.RequestState
import cccev.s2.request.domain.model.RequestId

@JsExport
@JsName("RequestSignCommandDTO")
actual external interface RequestSignCommandDTO: RequestCommand {
	actual override val id: RequestId
}

@JsExport
@JsName("RequestSignedEventDto")
actual external interface RequestSignedEventDTO: RequestEvent {
	actual override val id: RequestId
	actual override val type: RequestState.Signed
}
