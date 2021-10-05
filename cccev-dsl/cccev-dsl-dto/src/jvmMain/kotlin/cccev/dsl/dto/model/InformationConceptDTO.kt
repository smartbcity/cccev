package cccev.dsl.dto.model

import ccev.dsl.core.EvidenceTypeListId
import ccev.dsl.core.InformationConcept

actual interface InformationConceptDTO: InformationConcept {
    actual val evidenceTypeLists: Array<EvidenceTypeListId>
}