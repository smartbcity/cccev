package features.cccev.test.data.context

import cccev.s2.request.domain.model.RequestId
import ccev.dsl.core.EvidenceTypeBase
import ccev.dsl.core.EvidenceTypeId
import ccev.dsl.core.EvidenceTypeListBase
import ccev.dsl.core.EvidenceTypeListId
import ccev.dsl.core.InformationConceptBase
import ccev.dsl.core.InformationConceptId
import ccev.dsl.core.Requirement
import ccev.dsl.core.RequirementId
import org.springframework.stereotype.Component

@Component
class TestContext {
    var evidenceTypes = TestEntities<EvidenceTypeId, EvidenceTypeBase>()
    var evidenceTypeLists = TestEntities<EvidenceTypeListId, EvidenceTypeListBase>()
    var informationConcepts = TestEntities<InformationConceptId, InformationConceptBase>()
    var requirements = TestEntities<RequirementId, Requirement>()

    var requests = TestEntityIds<RequestId>()
}
