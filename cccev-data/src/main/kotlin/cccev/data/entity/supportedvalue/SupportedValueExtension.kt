package cccev.data.entity.supportedvalue

import ccev.dsl.core.SupportedValue

fun SupportedValueEntity.toSupportedValue() = SupportedValue(
    identifier = id,
    value = value,
    query = query,
    providesValueFor = providesValueFor
)
