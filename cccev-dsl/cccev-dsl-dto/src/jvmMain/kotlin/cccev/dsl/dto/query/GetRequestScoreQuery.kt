package cccev.dsl.dto.query

import cccev.s2.request.domain.model.RequestId
import ccev.dsl.core.InformationConceptId

actual interface GetRequestScoreQueryDTO {
    actual val requestId: RequestId
}

actual interface GetRequestScoreQueryResultDTO {
    actual val score: Double
    actual val scorePerInformationConcept: Map<InformationConceptId, Double>
}
