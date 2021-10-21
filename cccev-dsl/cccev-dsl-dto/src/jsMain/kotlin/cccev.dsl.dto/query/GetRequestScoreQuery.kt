package cccev.dsl.dto.query

import cccev.s2.request.domain.model.RequestId
import ccev.dsl.core.InformationConceptId

@JsExport
@JsName("GetRequestScoreQueryDTO")
actual external interface GetRequestScoreQueryDTO {
    actual val requestId: RequestId
}

@JsExport
@JsName("GetRequestScoreQueryResultDTO")
actual external interface GetRequestScoreQueryResultDTO {
    actual val score: Double
    actual val scorePerInformationConcept: Map<InformationConceptId, Double>
}
