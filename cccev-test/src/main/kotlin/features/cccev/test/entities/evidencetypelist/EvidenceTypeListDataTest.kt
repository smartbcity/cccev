package features.cccev.test.entities.evidencetypelist

import ccev.dsl.core.EvidenceTypeBase
import ccev.dsl.core.EvidenceTypeListBase
import ccev.dsl.core.EvidenceTypeListId
import features.cccev.test.data.DataTest
import features.cccev.test.entities.evidencetype.evidenceType
import java.util.UUID

fun DataTest.evidenceTypeList(
    identifier: EvidenceTypeListId = UUID.randomUUID().toString(),
    name: String = UUID.randomUUID().toString(),
    description: String = "ETL description",
    specifiesEvidenceType: List<EvidenceTypeBase> = listOf(DataTest.evidenceType()),
) = EvidenceTypeListBase(
    identifier = identifier,
    name = name,
    description = description,
    specifiesEvidenceType = specifiesEvidenceType
)
