package cccev.dsl.dto.model

import ccev.dsl.core.CUnitDTO
import ccev.dsl.core.Code
import ccev.dsl.core.EvidenceTypeListId
import ccev.dsl.core.InformationConcept
import ccev.dsl.core.SupportedValue
import ccev.dsl.core.SupportedValueDTO

expect interface InformationConceptDTO: InformationConcept {
    val evidenceTypeLists: Array<EvidenceTypeListId>
    val supportedValue: SupportedValueDTO
}

class InformationConceptDTOBase(
    override val identifier: String,
    override val name: String,
    override val type: Code,
    override val unit: CUnitDTO,
    override val description: String,
    override val expressionOfExpectedValue: String?,
    override val evidenceTypeLists: Array<EvidenceTypeListId>,
    override val supportedValue: SupportedValue
): InformationConceptDTO
