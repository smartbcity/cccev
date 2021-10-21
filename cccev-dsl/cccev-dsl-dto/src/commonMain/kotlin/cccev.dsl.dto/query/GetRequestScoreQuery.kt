package cccev.dsl.dto.query

import cccev.s2.request.domain.model.RequestId
import ccev.dsl.core.InformationConceptId
import f2.dsl.fnc.F2Function

typealias GetRequestScoreQueryFunction = F2Function<GetRequestScoreQuery, GetRequestScoreQueryResult>

expect interface GetRequestScoreQueryDTO {
    val requestId: RequestId
}

class GetRequestScoreQuery(
    override val requestId: RequestId
): GetRequestScoreQueryDTO

expect interface GetRequestScoreQueryResultDTO {
    val score: Double
    val scorePerInformationConcept: Map<InformationConceptId, Double>
}

class GetRequestScoreQueryResult(
    override val score: Double,
    override val scorePerInformationConcept: Map<InformationConceptId, Double>
): GetRequestScoreQueryResultDTO
