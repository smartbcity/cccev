package cccev.s2.request.app.config

import cccev.s2.request.app.entity.RequestEntity
import cccev.s2.request.app.entity.RequestRepository
import cccev.s2.request.domain.RequestState
import cccev.s2.request.domain.S2Request
import cccev.s2.request.domain.model.RequestId
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Service
import s2.spring.automate.data.S2SpringDataConfigurerAdapter
import s2.spring.automate.executor.S2AutomateExecutorSpring

@Configuration
class RequestS2SpringDataConfigurerAdapter(
	repository: RequestRepository,
) : S2SpringDataConfigurerAdapter<RequestState, RequestId, RequestEntity, RequestS2Aggregate>(
	repository) {
	override fun automate() = S2Request

	@Autowired
	lateinit var requestS2Aggregate: RequestS2Aggregate

	override fun executor(): RequestS2Aggregate = requestS2Aggregate
}

@Service
class RequestS2Aggregate : S2AutomateExecutorSpring<RequestState, RequestId, RequestEntity>()
