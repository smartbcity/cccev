package cccev.s2.request.app

import cccev.s2.request.app.config.RequestS2Aggregate
import cccev.s2.request.app.entity.RequestEntity
import cccev.s2.request.domain.RequestAggregate
import cccev.s2.request.domain.RequestState
import cccev.s2.request.domain.features.command.RequestAuditCommandFunction
import cccev.s2.request.domain.features.command.RequestEvidenceAddCommandFunction
import cccev.s2.request.domain.features.command.RequestEvidenceRemoveCommandFunction
import cccev.s2.request.domain.features.command.RequestInitCommandFunction
import cccev.s2.request.domain.features.command.RequestInitializedEvent
import cccev.s2.request.domain.features.command.RequestRefuseCommandFunction
import cccev.s2.request.domain.features.command.RequestSendCommandFunction
import cccev.s2.request.domain.features.command.RequestSignCommandFunction
import cccev.s2.request.domain.features.command.RequestSupportedValueAddCommandFunction
import f2.dsl.fnc.f2Function
import org.springframework.context.annotation.Bean
import org.springframework.stereotype.Service

@Service
class RequestService(
	private val aggregate: RequestS2Aggregate,
//	private val ktorRepository: KtorRepository
): RequestAggregate {
	@Bean
	override fun init(): RequestInitCommandFunction = f2Function { cmd ->
		aggregate.createWithEvent(cmd, { RequestInitializedEvent(id = id) }) {
			RequestEntity(
				id = cmd.id,
				status = RequestState.Created,
				frameworkId = cmd.frameworkId,
				evidences = mutableListOf(),
				supportedValues = mutableMapOf()
			)
		}
	}

	@Bean
	override fun addEvidence(): RequestEvidenceAddCommandFunction = f2Function { cmd ->
		aggregate.doTransition(cmd) {
			this to addEvidence(cmd.evidence)
		}
	}

	@Bean
	override fun removeEvidence(): RequestEvidenceRemoveCommandFunction = f2Function { cmd ->
		aggregate.doTransition(cmd) {
			this to removeEvidence(cmd.evidenceTypeId)
		}
	}

	@Bean
	override fun addSupportedValue(): RequestSupportedValueAddCommandFunction = f2Function { cmd ->
		aggregate.doTransition(cmd) {
			this to addSupportedValue(cmd.supportedValue)
		}
	}

	@Bean
	override fun send(): RequestSendCommandFunction = f2Function { cmd ->
		aggregate.doTransition(cmd) {

			this to send()
		}
	}

	@Bean
	override fun sign(): RequestSignCommandFunction = f2Function { cmd ->
		aggregate.doTransition(cmd) {
			this to sign()
		}
	}

	@Bean
	override fun audit(): RequestAuditCommandFunction = f2Function { cmd ->
		aggregate.doTransition(cmd) {
			this to audit()
		}
	}

	@Bean
	override fun refuse(): RequestRefuseCommandFunction = f2Function { cmd ->
		aggregate.doTransition(cmd) {
			this to refuse()
		}
	}
}
