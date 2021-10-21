package features.cccev.test.entities.informationconcept

import ccev.dsl.core.InformationConceptId
import features.cccev.test.CucumberStepsDefinition
import features.cccev.test.data.DataTest
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En

class InformationConceptInitSteps: En, CucumberStepsDefinition() {

    init {
        DataTableType { entry: Map<String, String> ->
            InformationConceptInitParams(
                identifier = entry["identifier"].orRandom(),
            )
        }

        Given("An information concept is created") { params: InformationConceptInitParams ->
            initInformationConcepts(listOf(params))
        }

        Given("Some information concepts are created") { dataTable: DataTable ->
            dataTable.asList(InformationConceptInitParams::class.java)
                .let(::initInformationConcepts)
        }
    }

    private fun initInformationConcepts(paramsList: List<InformationConceptInitParams>) {
        paramsList.associate { params ->
            params.identifier to DataTest.informationConcept(
                identifier = params.identifier
            )
        }.let(context.informationConcepts::putAll)
    }

    private data class InformationConceptInitParams(
        val identifier: InformationConceptId
    )
}
