package features.data

import cccev.dsl.cc.BilanCarboneETL
import cccev.dsl.cc.CarbonCopy
import cccev.dsl.cc.Scope1
import cccev.dsl.cc.Scope2
import cccev.dsl.cc.Scope3
import cccev.dsl.cc.ScopeTotal
import cccev.f2.model.toDTO

object CarbonCopyTestData: ExpectedRequirement {
    override val requirement = CarbonCopy

    override val expectedEvidenceTypeLists = listOf(
        listOf(BilanCarboneETL.toDTO()),
    )

    override val expectedInformationConcepts = listOf(
        Scope1.toDTO(listOf(BilanCarboneETL.identifier)),
        Scope2.toDTO(listOf(BilanCarboneETL.identifier)),
        Scope3.toDTO(listOf(BilanCarboneETL.identifier)),
        ScopeTotal.toDTO(listOf(BilanCarboneETL.identifier))
    )
}
