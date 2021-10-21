package features.cccev.test.entities.evidencetype

import ccev.dsl.core.Code
import ccev.dsl.core.CoreLocationLocation
import ccev.dsl.core.EvidenceTypeBase
import ccev.dsl.core.EvidenceTypeId
import ccev.dsl.core.PeriodOfTime
import features.cccev.test.data.DataTest
import features.cccev.test.data.DummyCode
import java.util.UUID

fun DataTest.evidenceType(
    identifier: EvidenceTypeId = UUID.randomUUID().toString(),
    name: String = UUID.randomUUID().toString(),
    evidenceTypeClassification: Code = DummyCode,
    validityPeriodConstraint: PeriodOfTime? = null,
    issuingPlace: CoreLocationLocation? = null,
) = EvidenceTypeBase(
    identifier = identifier,
    name = name,
    evidenceTypeClassification = evidenceTypeClassification,
    validityPeriodConstraint = validityPeriodConstraint,
    issuingPlace = issuingPlace
)
