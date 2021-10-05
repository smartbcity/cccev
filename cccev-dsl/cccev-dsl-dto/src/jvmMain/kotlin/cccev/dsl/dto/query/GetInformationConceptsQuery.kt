package cccev.dsl.dto.query

import cccev.dsl.dto.model.InformationConceptDTO
import ccev.dsl.core.RequirementId

actual interface GetInformationConceptsQueryDTO {
    actual val requirement: RequirementId
}

actual interface GetInformationConceptsQueryResultDTO {
    actual val informationConcepts: List<InformationConceptDTO>
}
