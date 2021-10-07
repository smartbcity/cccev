package cccev.s2.request.app.entity

import cccev.s2.request.domain.model.RequestId
import org.springframework.data.mongodb.repository.ReactiveMongoRepository
import org.springframework.stereotype.Repository

@Repository
interface RequestRepository: ReactiveMongoRepository<RequestEntity, RequestId>
