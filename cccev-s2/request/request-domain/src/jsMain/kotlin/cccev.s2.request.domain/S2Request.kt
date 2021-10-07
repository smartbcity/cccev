package cccev.s2.request.domain

import cccev.s2.request.domain.model.RequestId
import s2.dsl.automate.S2Command
import s2.dsl.automate.S2Event

@JsExport
@JsName("RequestEvent")
actual external interface RequestEvent: S2Event<RequestState, RequestId>

@JsExport
@JsName("RequestCommand")
actual external interface RequestCommand: S2Command<RequestId>
