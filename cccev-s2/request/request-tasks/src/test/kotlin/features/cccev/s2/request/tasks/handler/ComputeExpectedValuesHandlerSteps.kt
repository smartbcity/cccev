package features.cccev.s2.request.tasks.handler

import cccev.dsl.dto.query.GetInformationConceptsQuery
import cccev.dsl.dto.query.GetInformationConceptsQueryFunction
import cccev.dsl.dto.query.GetRequirementQuery
import cccev.dsl.dto.query.GetRequirementQueryFunction
import cccev.s2.request.app.RequestAggregateService
import cccev.s2.request.app.entity.RequestEntity
import cccev.s2.request.domain.RequestState
import cccev.s2.request.domain.features.command.RequestSupportedValueAddCommand
import cccev.s2.request.domain.model.RequestId
import ccev.dsl.core.RequirementId
import ccev.dsl.core.SupportedValue
import f2.dsl.fnc.invoke
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import kotlinx.coroutines.runBlocking
import org.assertj.core.api.Assertions
import org.awaitility.Awaitility
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.MongoTemplate
import java.util.UUID

class ComputeExpectedValuesHandlerSteps: En {

    @Autowired
    private lateinit var mongoTemplate: MongoTemplate
    @Autowired
    private lateinit var getInformationConceptsFunction: GetInformationConceptsQueryFunction
    @Autowired
    private lateinit var getRequirementFunction: GetRequirementQueryFunction
    @Autowired
    private lateinit var requestAggregateService: RequestAggregateService

    private lateinit var frameworkId: RequirementId
    private lateinit var requestId: RequestId

    init {
        DataTableType { entry: Map<String, String> ->
            runBlocking {
                val query = GetInformationConceptsQuery(requestId, frameworkId)
                val infoConcept = getInformationConceptsFunction.invoke(query)
                    .informationConcepts
                    .firstOrNull { concept -> concept.name == entry["name"] }

                Assertions.assertThat(infoConcept).isNotNull

                SupportedValue(
                    identifier = UUID.randomUUID().toString(),
                    value = entry["value"],
                    providesValueFor = infoConcept!!.identifier
                )
            }
        }

        Given("The framework {string} is instantiated") { framework: RequirementId ->
            runBlocking {
                val query = GetRequirementQuery(
                    requirementId = framework
                )
                val requirement = getRequirementFunction.invoke(query).requirement
                Assertions.assertThat(requirement?.identifier).isNotNull
                frameworkId = requirement!!.identifier!!
            }
        }

        Given("A request is instantiated on this framework") {
            val request = RequestEntity(
                frameworkId = frameworkId,
                status = RequestState.Created,
                evidences = mutableListOf(),
                supportedValues = mutableMapOf()
            )
            requestId = request.id
            mongoTemplate.save(request)
        }

        When("Some supported values are added") { dataTable: DataTable ->
            val supportedValues = dataTable.asList(SupportedValue::class.java)
            runBlocking {
                supportedValues.forEach { value ->
                    val command = RequestSupportedValueAddCommand(
                        id = requestId,
                        supportedValue = value
                    )
                    requestAggregateService.addSupportedValue().invoke(command)
                }
            }
        }

        Then("The value of the information concept is computed") { expectedValue: SupportedValue ->
            Awaitility.await().untilAsserted {
                val request = mongoTemplate.findById(requestId, RequestEntity::class.java)!!
                val computedValue = request.supportedValues[expectedValue.providesValueFor]

                Assertions.assertThat(computedValue).isNotNull
                Assertions.assertThat(computedValue!!.value).isEqualTo(expectedValue.value)
            }
        }
    }
}
