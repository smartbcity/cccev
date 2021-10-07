package cccev.s2.request.domain

import cccev.s2.request.domain.features.command.RequestAuditCommandFunction
import cccev.s2.request.domain.features.command.RequestEvidenceAddCommandFunction
import cccev.s2.request.domain.features.command.RequestEvidenceRemoveCommandFunction
import cccev.s2.request.domain.features.command.RequestInitCommandFunction
import cccev.s2.request.domain.features.command.RequestRefuseCommandFunction
import cccev.s2.request.domain.features.command.RequestSendCommandFunction
import cccev.s2.request.domain.features.command.RequestSignCommandFunction
import cccev.s2.request.domain.features.command.RequestSupportedValueAddCommandFunction

/**
 * - fun init(): [RequestInitCommandFunction][cccev.s2.request.domain.features.command.RequestInitCommandFunction]
 * - fun addEvidence(): [RequestEvidenceAddCommandFunction][cccev.s2.request.domain.features.command.RequestEvidenceAddCommandFunction]
 * - fun removeEvidence(): [RequestEvidenceRemoveCommandFunction][cccev.s2.request.domain.features.command.RequestEvidenceRemoveCommandFunction]
 * - fun addSupportedValue(): [RequestSupportedValueAddCommandFunction][cccev.s2.request.domain.features.command.RequestSupportedValueAddCommandFunction]
 * - fun send(): [RequestSendCommandFunction][cccev.s2.request.domain.features.command.RequestSendCommandFunction]
 * - fun sign(): [RequestSignCommandFunction][cccev.s2.request.domain.features.command.RequestSignCommandFunction]
 * - fun audit(): [RequestAuditCommandFunction][cccev.s2.request.domain.features.command.RequestAuditCommandFunction]
 * - fun refuse(): [RequestRefuseCommandFunction][cccev.s2.request.domain.features.command.RequestRefuseCommandFunction]
 * @d2 model
 * @title Entrypoints
 * @page
 * Handle cccev request.
 * @@title Core Resources/Request
 */
interface RequestAggregate {
	fun init(): RequestInitCommandFunction
	fun addEvidence(): RequestEvidenceAddCommandFunction
	fun removeEvidence(): RequestEvidenceRemoveCommandFunction
	fun addSupportedValue(): RequestSupportedValueAddCommandFunction
	fun send(): RequestSendCommandFunction
	fun sign(): RequestSignCommandFunction
	fun audit(): RequestAuditCommandFunction
	fun refuse(): RequestRefuseCommandFunction
}
