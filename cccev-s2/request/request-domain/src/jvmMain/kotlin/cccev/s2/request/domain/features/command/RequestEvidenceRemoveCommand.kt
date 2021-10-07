package cccev.s2.request.domain.features.command

import cccev.s2.request.domain.RequestCommand
import cccev.s2.request.domain.RequestEvent
import cccev.s2.request.domain.RequestState
import cccev.s2.request.domain.model.RequestId
import ccev.dsl.core.EvidenceId

actual interface RequestEvidenceRemoveCommandDTO: RequestCommand {
	actual override val id: RequestId
	actual val evidenceId: EvidenceId
}

actual interface RequestEvidenceRemovedEventDTO: RequestEvent {
	actual override val id: RequestId
	actual override val type: RequestState.Created
	actual val evidenceId: EvidenceId
}
