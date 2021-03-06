package cccev.f2.scheduler

import cccev.bubble.core.KtorRepository
import cccev.bubble.core.Request
import cccev.s2.request.app.RequestAggregateService
import cccev.s2.request.app.entity.RequestEntity
import cccev.s2.request.app.entity.RequestRepository
import cccev.s2.request.domain.RequestState
import cccev.s2.request.domain.features.command.RequestAuditCommand
import cccev.s2.request.domain.features.command.RequestRefuseCommand
import cccev.s2.request.domain.features.command.RequestSignCommand
import f2.dsl.fnc.invoke
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import kotlinx.coroutines.reactor.awaitSingle
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Service
import s2.spring.utils.logger.Logger

@Service
class SyncRequestBubbleScheduler(
    private val requestRepository: RequestRepository,
    private val requestAggregateService: RequestAggregateService
) {
    private val logger by Logger()

    private val ktorRepository = KtorRepository("95f4b5790e3d55cee1f6badeb192c9a1")

    companion object {
        enum class BubbleState(val id: String, val resultState: RequestState) {
            SIGNED("Signed", RequestState.Signed),
            AUDITED("Audited", RequestState.Audited),
            DECLINED("Declined", RequestState.Created)
        }
    }

    @Scheduled(cron = "0/30 0 0 ? * *", zone = "Europe/Paris")
    fun syncRequests() = GlobalScope.launch(Dispatchers.IO) {
        logger.info("SyncRequestBubbleScheduler: Start")

        try {
            val requests = ktorRepository.getList<Request>().response.results

            BubbleState.values().forEach { state ->
                syncRequestsWithState(requests, state)
            }
        } catch (e: Exception) {
            logger.error("SyncRequestBubbleScheduler: Error", e)
        }

        logger.info("SyncRequestBubbleScheduler: End")
    }

    private suspend fun syncRequestsWithState(requests: List<Request>, state: BubbleState) {
        val requestsWithState = requests.filter { it.status == state.id }

        val requestEntities = requestsWithState.map { request -> requestRepository.findById(request._id!!).awaitSingle() }

        requestEntities.filter { it.status != state.resultState }
            .forEach { it.updateStatus(state.resultState) }
    }

    private suspend fun RequestEntity.updateStatus(status: RequestState) {
        when (status) {
            RequestState.Signed -> requestAggregateService.sign().invoke(RequestSignCommand(id))
            RequestState.Audited -> requestAggregateService.audit().invoke(RequestAuditCommand(id))
            RequestState.Created -> requestAggregateService.refuse().invoke(RequestRefuseCommand(id))
        }
    }
}
