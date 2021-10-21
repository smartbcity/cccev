package features.cccev.test.entities.evidencetypelist

import ccev.dsl.core.EvidenceTypeBase
import ccev.dsl.core.EvidenceTypeListId
import features.cccev.test.CucumberStepsDefinition
import features.cccev.test.data.DataTest
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En

class EvidenceTypeListInitSteps: En, CucumberStepsDefinition() {

    init {
        DataTableType { entry: Map<String, String> ->
            EvidenceTypeListInitParams(
                identifier = entry["identifier"].orRandom(),
                evidenceTypes = entry.safeExtract("evidenceTypes").toListOf(context.evidenceTypes)
            )
        }

        Given("An evidence type list is created") { params: EvidenceTypeListInitParams ->
            initEvidenceTypeLists(listOf(params))
        }

        Given("Some evidence type lists are created") { dataTable: DataTable ->
            dataTable.asList(EvidenceTypeListInitParams::class.java)
                .let(::initEvidenceTypeLists)
        }
    }

    private fun initEvidenceTypeLists(paramList: List<EvidenceTypeListInitParams>) {
        paramList.associate { params ->
            params.identifier to DataTest.evidenceTypeList(
                identifier = params.identifier,
                specifiesEvidenceType = params.evidenceTypes
            )
        }.let(context.evidenceTypeLists::putAll)
    }

    private data class EvidenceTypeListInitParams(
        val identifier: EvidenceTypeListId,
        val evidenceTypes: List<EvidenceTypeBase>
    )
}
