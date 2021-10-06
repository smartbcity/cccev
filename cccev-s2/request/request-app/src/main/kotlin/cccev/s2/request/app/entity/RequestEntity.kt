package cccev.s2.request.app.entity

import cccev.s2.request.domain.RequestState
import cccev.s2.request.domain.model.RequestId
import f2.spring.data.entity.EntityBase
import org.springframework.data.annotation.Id
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State
import java.util.UUID

class RequestEntity(
	@Id
	val id: RequestId = UUID.randomUUID().toString(),
	val status: RequestState,
): EntityBase(), WithS2Id<RequestId>, WithS2State<RequestState> {
	override fun s2Id() = id
	override fun s2State() = status
}
