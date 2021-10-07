package cccev.s2.request.domain.features.command

import cccev.s2.request.domain.model.RequestId
import ccev.dsl.core.RequirementId
import s2.dsl.automate.S2InitCommand

@JsExport
@JsName("RequestInitCommandDTO")
actual external interface RequestInitCommandDTO: S2InitCommand {
	actual val id: RequestId
	actual val frameworkId: RequirementId
}

@JsExport
@JsName("RequestInitializedEventDTO")
actual external interface RequestInitializedEventDTO {
	actual val id: RequestId
}
