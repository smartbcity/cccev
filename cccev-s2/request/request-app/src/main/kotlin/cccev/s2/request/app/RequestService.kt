package cccev.s2.request.app

import cccev.s2.request.app.config.RequestS2Aggregate
import cccev.s2.request.domain.RequestAggregate
import cccev.s2.request.domain.features.command.RequestAuditCommandFunction
import cccev.s2.request.domain.features.command.RequestEvidenceAddCommandFunction
import cccev.s2.request.domain.features.command.RequestInitCommandFunction
import cccev.s2.request.domain.features.command.RequestInitializedEvent
import cccev.s2.request.domain.features.command.RequestRefuseCommandFunction
import cccev.s2.request.domain.features.command.RequestSendCommandFunction
import cccev.s2.request.domain.features.command.RequestSignCommandFunction
import cccev.s2.request.domain.features.command.RequestSupportedValueAddCommandFunction
import f2.dsl.fnc.f2Function
import org.springframework.stereotype.Service

@Service
class RequestService(
	private val aggregate: RequestS2Aggregate,
) : RequestAggregate {
	override suspend fun init(): RequestInitCommandFunction = f2Function { cmd ->
		aggregate.createWithEvent(cmd, { RequestInitializedEvent(id = id) }) {
			TODO("Not yet implemented")
		}
	}


	override suspend fun addEvidence(): RequestEvidenceAddCommandFunction = f2Function { cmd ->
		aggregate.doTransition(cmd) {
			TODO("Not yet implemented")
		}
	}

	override suspend fun addSupportedValue(): RequestSupportedValueAddCommandFunction = f2Function { cmd ->
		aggregate.doTransition(cmd) {
			TODO("Not yet implemented")
		}
	}

	override suspend fun send(): RequestSendCommandFunction = f2Function { cmd ->
		aggregate.doTransition(cmd) {
			TODO("Not yet implemented")
		}
	}

	override suspend fun sign(): RequestSignCommandFunction = f2Function { cmd ->
		aggregate.doTransition(cmd) {
			TODO("Not yet implemented")
		}
	}

	override suspend fun audit(): RequestAuditCommandFunction = f2Function { cmd ->
		aggregate.doTransition(cmd) {
			TODO("Not yet implemented")
		}
	}

	override suspend fun refuse(): RequestRefuseCommandFunction = f2Function { cmd ->
		aggregate.doTransition(cmd) {
			TODO("Not yet implemented")
		}
	}


}
