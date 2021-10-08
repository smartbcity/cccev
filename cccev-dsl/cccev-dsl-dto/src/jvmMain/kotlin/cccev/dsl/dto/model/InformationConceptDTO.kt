package cccev.dsl.dto.model

import ccev.dsl.core.EvidenceTypeId
import ccev.dsl.core.InformationConcept
import ccev.dsl.core.SupportedValueDTO

actual interface InformationConceptDTO: InformationConcept {
    actual val evidenceTypes: Array<Array<EvidenceTypeId>>
    actual val supportedValue: SupportedValueDTO
}
