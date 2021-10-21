package features.cccev.test.entities.requirement

import ccev.dsl.core.Code
import ccev.dsl.core.EvidenceTypeListBase
import ccev.dsl.core.InformationConceptBase
import ccev.dsl.core.InformationConceptId
import ccev.dsl.core.InformationRequirement
import ccev.dsl.core.Requirement
import features.cccev.test.data.DataTest
import features.cccev.test.data.DummyCode
import java.util.UUID

fun DataTest.informationRequirement(
    identifier: InformationConceptId = UUID.randomUUID().toString(),
    name: String = UUID.randomUUID().toString(),
    type: Code = DummyCode,
    description: String = "InfoRequirement description",
    hasConcept: List<InformationConceptBase> = emptyList(),
    hasRequirement: List<Requirement> = emptyList(),
    hasEvidenceTypeList: List<EvidenceTypeListBase> = emptyList(),
) = InformationRequirement(
    identifier = identifier,
    name = name,
    type = type,
    description = description,
    hasConcept = hasConcept,
    hasRequirement = hasRequirement,
    hasEvidenceTypeList = hasEvidenceTypeList
)
