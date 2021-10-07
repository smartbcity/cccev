package cccev.s2.request.domain.features.command

import cccev.s2.request.domain.model.RequestId
import ccev.dsl.core.RequirementId
import s2.dsl.automate.S2InitCommand

actual interface RequestInitCommandDTO: S2InitCommand {
	actual val id: RequestId
	actual val frameworkId: RequirementId
}

actual interface RequestInitializedEventDTO {
	actual val id: RequestId
}
