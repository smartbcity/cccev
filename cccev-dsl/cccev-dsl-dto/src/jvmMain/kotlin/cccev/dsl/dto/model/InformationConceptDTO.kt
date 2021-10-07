package cccev.dsl.dto.model

import ccev.dsl.core.EvidenceTypeListId
import ccev.dsl.core.InformationConcept
import ccev.dsl.core.SupportedValueDTO

actual interface InformationConceptDTO: InformationConcept {
    actual val evidenceTypeLists: Array<EvidenceTypeListId>
    actual val supportedValue: SupportedValueDTO
}
