package cccev.s2.request.app.entity

import cccev.s2.request.domain.model.RequestId
import org.springframework.data.repository.reactive.ReactiveSortingRepository
import org.springframework.stereotype.Repository

@Repository
interface RequestRepository : ReactiveSortingRepository<RequestEntity, RequestId>
