package cccev.data.entity.supportedvalue

import cccev.data.EntityBase
import ccev.dsl.core.InformationConceptId
import ccev.dsl.core.SupportedValueId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.util.UUID

@Document("supported_value")
class SupportedValueEntity(
    @Id
    val id: SupportedValueId = UUID.randomUUID().toString(),
    val value: String? = null,
    val query: String? = null,
    val providesValueFor: InformationConceptId
): EntityBase()
