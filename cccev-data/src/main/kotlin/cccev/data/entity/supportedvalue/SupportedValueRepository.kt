package cccev.data.entity.supportedvalue

import ccev.dsl.core.SupportedValueId
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface SupportedValueRepository: MongoRepository<SupportedValueEntity, SupportedValueId>
