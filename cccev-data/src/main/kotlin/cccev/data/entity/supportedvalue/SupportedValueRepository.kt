package cccev.data.entity.supportedvalue

import ccev.dsl.core.SupportedValueId
import org.springframework.data.mongodb.repository.ReactiveMongoRepository
import org.springframework.stereotype.Repository

@Repository
interface SupportedValueRepository: ReactiveMongoRepository<SupportedValueEntity, SupportedValueId>
