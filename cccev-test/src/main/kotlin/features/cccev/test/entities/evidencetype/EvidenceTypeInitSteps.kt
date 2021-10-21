package features.cccev.test.entities.evidencetype

import ccev.dsl.core.EvidenceTypeId
import features.cccev.test.CucumberStepsDefinition
import features.cccev.test.data.DataTest
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En

class EvidenceTypeInitSteps: En, CucumberStepsDefinition() {

    init {
        DataTableType { entry: Map<String, String> ->
            EvidenceTypeInitParams(
                identifier = entry["identifier"].orRandom()
            )
        }

        Given("An evidence type is created") { params: EvidenceTypeInitParams ->
            initEvidenceTypes(listOf(params))
        }

        Given("Some evidence types are created") { dataTable: DataTable ->
            dataTable.asList(EvidenceTypeInitParams::class.java)
                .let(::initEvidenceTypes)
        }
    }

    private fun initEvidenceTypes(paramsList: List<EvidenceTypeInitParams>) {
        paramsList.associate { params ->
            params.identifier to DataTest.evidenceType(
                identifier = params.identifier
            )
        }.let(context.evidenceTypes::putAll)
    }

    private data class EvidenceTypeInitParams(
        val identifier: EvidenceTypeId
    )
}
