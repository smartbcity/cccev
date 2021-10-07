package cccev.dsl.dto.model

import ccev.dsl.core.EvidenceTypeListId
import ccev.dsl.core.InformationConcept
import ccev.dsl.core.SupportedValueDTO

@JsExport
@JsName("InformationConceptDTO")
actual external interface InformationConceptDTO: InformationConcept {
    actual val evidenceTypeLists: Array<EvidenceTypeListId>
    actual val supportedValue: SupportedValueDTO
}
