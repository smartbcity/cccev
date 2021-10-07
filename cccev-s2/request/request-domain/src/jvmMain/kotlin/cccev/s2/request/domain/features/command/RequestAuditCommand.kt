package cccev.s2.request.domain.features.command

import cccev.s2.request.domain.RequestCommand
import cccev.s2.request.domain.RequestEvent
import cccev.s2.request.domain.RequestState
import cccev.s2.request.domain.model.RequestId

actual interface RequestAuditCommandDTO: RequestCommand {
	actual override val id: RequestId
}

actual interface RequestAuditedEventDTO: RequestEvent {
	actual override val id: RequestId
	actual override val type: RequestState.Audited
}
