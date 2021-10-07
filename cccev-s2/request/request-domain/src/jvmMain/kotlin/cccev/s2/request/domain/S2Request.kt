package cccev.s2.request.domain

import cccev.s2.request.domain.model.RequestId
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2Event

actual interface RequestEvent: S2Event<RequestState, RequestId>

actual interface RequestCommand: S2Command<RequestId>