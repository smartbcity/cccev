package cccev.s2.request.domain

import cccev.s2.request.domain.features.command.RequestAuditCommand
import cccev.s2.request.domain.features.command.RequestEvidenceAddCommand
import cccev.s2.request.domain.features.command.RequestSendCommand
import cccev.s2.request.domain.features.command.RequestSignCommand
import cccev.s2.request.domain.features.command.RequestSupportedValueAddCommand
import cccev.s2.request.domain.model.RequestId
import kotlin.js.JsExport
import kotlin.js.JsName
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2Event
import s2.dsl.automate.S2InitCommand
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.builder.s2

@JsExport
@JsName("s2Request")
fun s2Request() = S2Request

val S2Request = s2<RequestId, RequestState> {
	name = "RequestS2"
	init<RequestInitCommand> {
		to = RequestState.Created
		role = EditorRole()
		cmd = RequestInitCommand::class
	}
	transaction<RequestEvidenceAddCommand> {
		from = RequestState.Created
		to = RequestState.Created
		role = EditorRole()
		cmd = RequestEvidenceAddCommand::class
	}
	transaction<RequestSupportedValueAddCommand> {
		from = RequestState.Created
		to = RequestState.Created
		role = EditorRole()
		cmd = RequestSupportedValueAddCommand::class
	}
	transaction<RequestSendCommand> {
		from = RequestState.Created
		to = RequestState.Sent
		role = EditorRole()
		cmd = RequestSendCommand::class
	}
	transaction<RequestSignCommand> {
		from = RequestState.Sent
		to = RequestState.Signed
		role = EditorRole()
		cmd = RequestSignCommand::class
	}
	transaction<RequestAuditCommand> {
		from = RequestState.Signed
		to = RequestState.Audited
		role = EditorRole()
		cmd = RequestAuditCommand::class
	}
}

@Suppress("MagicNumber")
@JsExport
open class RequestState(override var position: Int) : S2State {
	object Created : RequestState(0)
	object Sent : RequestState(10)
	object Signed : RequestState(20)
	object Audited : RequestState(30)
}


@JsExport
@JsName("EditorRole")
class EditorRole : S2Role

@JsExport
@JsName("AuditorRole")
class AuditorRole : S2Role


interface RequestEvent : S2Event<RequestState, RequestId>

interface RequestInitCommand : S2InitCommand

interface RequestCommand : S2Command<RequestId>
