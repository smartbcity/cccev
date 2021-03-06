package cccev.s2.request.domain.features.command

import cccev.s2.request.domain.RequestCommand
import cccev.s2.request.domain.RequestEvent
import cccev.s2.request.domain.RequestState
import cccev.s2.request.domain.model.RequestId
import ccev.dsl.core.EvidenceTypeId

@JsExport
@JsName("RequestEvidenceRemoveCommandDTO")
actual external interface RequestEvidenceRemoveCommandDTO: RequestCommand {
	actual override val id: RequestId
	actual val evidenceTypeId: EvidenceTypeId
}

@JsExport
@JsName("RequestEvidenceRemovedEventDTO")
actual external interface RequestEvidenceRemovedEventDTO: RequestEvent {
	actual override val id: RequestId
	actual override val type: RequestState.Created
	actual val evidenceTypeId: EvidenceTypeId
}
