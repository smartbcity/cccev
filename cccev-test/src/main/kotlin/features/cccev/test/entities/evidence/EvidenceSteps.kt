package features.cccev.test.entities.evidence

import cccev.s2.request.app.RequestAggregateService
import cccev.s2.request.domain.features.command.RequestEvidenceAddCommand
import cccev.s2.request.domain.model.RequestId
import ccev.dsl.core.EvidenceId
import ccev.dsl.core.EvidenceTypeId
import f2.dsl.fnc.invoke
import features.cccev.test.CucumberStepsDefinition
import features.cccev.test.data.DataTest
import features.cccev.test.exception.EntityNotInitializedException
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import kotlinx.coroutines.runBlocking
import org.springframework.beans.factory.annotation.Autowired

class EvidenceSteps: En, CucumberStepsDefinition() {

    @Autowired
    private lateinit var requestAggregateService: RequestAggregateService

    init {
        DataTableType { entry: Map<String, String> ->
            EvidenceInitParams(
                requestId = entry["request"],
                identifier = entry["identifier"].orRandom(),
                evidenceTypeId = entry.safeExtract("evidenceType")
            )
        }

        When("Some evidences are added to this request") { dataTable: DataTable ->
            val lastRequestId = context.requests.lastCreated
                ?: throw EntityNotInitializedException("lastCreated", "Request")

            val paramList = dataTable.asList(EvidenceInitParams::class.java)
                .map { params -> params.copy(requestId = lastRequestId) }

            initEvidences(paramList)
        }
    }

    private fun initEvidences(paramsList: List<EvidenceInitParams>) = runBlocking {
        paramsList.map { params ->
            RequestEvidenceAddCommand(
                id = params.requestId!!,
                evidence = params.toEvidence()
            )
        }.forEach { command ->
            requestAggregateService.addEvidence().invoke(command)
        }
    }

    private fun EvidenceInitParams.toEvidence() = DataTest.evidence(
        identifier = identifier,
        isConformantTo = listOf(evidenceTypeId)
    )

    private data class EvidenceInitParams(
        val identifier: EvidenceId,
        val requestId: RequestId?,
        val evidenceTypeId: EvidenceTypeId
    )
}
