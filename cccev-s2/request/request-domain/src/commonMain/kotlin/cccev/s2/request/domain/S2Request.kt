package cccev.s2.request.domain

import cccev.s2.request.domain.features.command.RequestAuditCommand
import cccev.s2.request.domain.features.command.RequestEvidenceAddCommand
import cccev.s2.request.domain.features.command.RequestEvidenceRemoveCommand
import cccev.s2.request.domain.features.command.RequestInitCommand
import cccev.s2.request.domain.features.command.RequestRefuseCommand
import cccev.s2.request.domain.features.command.RequestSendCommand
import cccev.s2.request.domain.features.command.RequestSignCommand
import cccev.s2.request.domain.features.command.RequestSupportedValueAddCommand
import cccev.s2.request.domain.model.RequestId
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2Event
import s2.dsl.automate.S2Role
import s2.dsl.automate.S2State
import s2.dsl.automate.builder.s2

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
	transaction<RequestEvidenceRemoveCommand> {
		from = RequestState.Created
		to = RequestState.Created
		role = EditorRole()
		cmd = RequestEvidenceRemoveCommand::class
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
	transaction<RequestEvidenceAddCommand> {
		from = RequestState.Sent
		to = RequestState.Sent
		role = EditorRole()
		cmd = RequestEvidenceAddCommand::class
	}
	transaction<RequestEvidenceRemoveCommand> {
		from = RequestState.Sent
		to = RequestState.Sent
		role = EditorRole()
		cmd = RequestEvidenceRemoveCommand::class
	}
	transaction<RequestSupportedValueAddCommand> {
		from = RequestState.Sent
		to = RequestState.Sent
		role = EditorRole()
		cmd = RequestSupportedValueAddCommand::class
	}
	transaction<RequestSendCommand> {
		from = RequestState.Sent
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
	transaction<RequestRefuseCommand> {
		from = RequestState.Signed
		to = RequestState.Created
		role = EditorRole()
		cmd = RequestRefuseCommand::class
	}
}

open class RequestState(override var position: Int): S2State {
	object Created: RequestState(position = 0)
	object Sent: RequestState(position = 10)
	object Signed: RequestState(position = 20)
	object Audited: RequestState(position = 30)
}

class EditorRole: S2Role
class AuditorRole: S2Role

expect interface RequestEvent: S2Event<RequestState, RequestId>

expect interface RequestCommand: S2Command<RequestId>
