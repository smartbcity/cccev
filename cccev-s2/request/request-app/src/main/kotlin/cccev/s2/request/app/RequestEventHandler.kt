package cccev.s2.request.app

import cccev.bubble.core.KtorRepository
import cccev.s2.request.domain.features.command.RequestSentEvent
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import org.springframework.context.event.EventListener
import org.springframework.stereotype.Component

@Component
class RequestEventHandler {
	/*
	 * Use spring configuration for the bearer token
	 */
	val ktorRepository = KtorRepository("95f4b5790e3d55cee1f6badeb192c9a1")

	@EventListener
	fun automateTransitionEnded(event: RequestSentEvent) = GlobalScope.launch(Dispatchers.IO) {
//		ktorRepository
	}
}
