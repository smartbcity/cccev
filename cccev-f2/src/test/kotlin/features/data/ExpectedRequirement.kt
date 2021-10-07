//package features.data
//
//import cccev.dsl.dto.model.EvidenceTypeListDTOBase
//import cccev.dsl.dto.model.InformationConceptDTOBase
//import ccev.dsl.core.Requirement
//import ccev.dsl.core.RequirementId
//
//interface ExpectedRequirement {
//    val identifier: RequirementId
//        get() = requirement.identifier!!
//    val requirement: Requirement
//    val expectedEvidenceTypeLists: List<List<EvidenceTypeListDTOBase>>
//    val expectedInformationConcepts: List<InformationConceptDTOBase>
//}
//
//val expectedRequirements = listOf(
//    CarbonCopyTestData
//).associateBy { it.requirement.identifier }
