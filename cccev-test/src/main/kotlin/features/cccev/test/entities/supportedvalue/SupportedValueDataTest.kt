package features.cccev.test.entities.supportedvalue

import ccev.dsl.core.InformationConceptId
import ccev.dsl.core.SupportedValue
import ccev.dsl.core.SupportedValueId
import features.cccev.test.data.DataTest
import java.util.UUID

fun DataTest.supportedValue(
    identifier: SupportedValueId = UUID.randomUUID().toString(),
    value: String? = null,
    query: String? = null,
    providesValueFor: InformationConceptId = UUID.randomUUID().toString()
) = SupportedValue(
    identifier = identifier,
    value = value,
    query = query,
    providesValueFor = providesValueFor
)
