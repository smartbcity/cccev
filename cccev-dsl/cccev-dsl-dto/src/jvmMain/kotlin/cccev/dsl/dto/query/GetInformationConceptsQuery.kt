package cccev.dsl.dto.query

import cccev.dsl.dto.model.InformationConceptDTO
import cccev.s2.request.domain.model.RequestId
import ccev.dsl.core.RequirementId

actual interface GetInformationConceptsQueryDTO {
    actual val requirement: RequirementId
    actual val requestId: RequestId
}

actual interface GetInformationConceptsQueryResultDTO {
    actual val informationConcepts: List<InformationConceptDTO>
}
