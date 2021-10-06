package cccev.data.entity.evidence

import cccev.s2.request.app.entity.EvidenceEntity
import ccev.dsl.core.EvidenceId
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface EvidenceRepository : MongoRepository<EvidenceEntity, EvidenceId>
