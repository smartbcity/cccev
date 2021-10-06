package features

import cccev.dsl.dto.model.EvidenceTypeListDTO
import cccev.dsl.dto.query.GetEvidenceTypeListsQuery
import cccev.f2.GetEvidenceTypeListsQueryFunctionImpl
import cccev.f2.GetRequirementQueryFunctionImpl
import f2.dsl.fnc.invoke
import features.data.ExpectedRequirement
import features.data.expectedRequirements
import io.cucumber.java8.En
import kotlinx.coroutines.runBlocking
import org.assertj.core.api.Assertions

class GetEvidenceTypeListsSteps: En {

    private lateinit var expectedRequirement: ExpectedRequirement
    private lateinit var actualEvidenceTypeLists: List<List<EvidenceTypeListDTO>>

    init {
        Given("I have the requirement {string}") { requirementId: String ->
            expectedRequirement = expectedRequirements[requirementId]!!
        }
        When("I fetch the evidences needed in the requirement") {
            runBlocking {
                val query = GetEvidenceTypeListsQuery(expectedRequirement.identifier)
                actualEvidenceTypeLists = GetEvidenceTypeListsQueryFunctionImpl(GetRequirementQueryFunctionImpl().getRequirementQueryFunction())
                    .getEvidenceTypeListsQueryFunction()
                    .invoke(query)
                    .evidenceTypeLists
            }
        }
        Then("I get all the evidence type lists") {
            val expectedEvidenceTypeLists = expectedRequirement.expectedEvidenceTypeLists

            // TODO remove this and do it properly in function instead
            val actualETLs = actualEvidenceTypeLists.filter { it.isNotEmpty() }

            Assertions.assertThat(actualETLs).hasSameSizeAs(expectedEvidenceTypeLists)
            // TODO deep test
        }
    }
}