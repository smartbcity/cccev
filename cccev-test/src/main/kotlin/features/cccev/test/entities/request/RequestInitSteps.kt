package features.cccev.test.entities.request

import cccev.s2.request.app.RequestAggregateService
import cccev.s2.request.domain.features.command.RequestInitCommand
import f2.dsl.fnc.invoke
import features.cccev.test.CucumberStepsDefinition
import features.cccev.test.exception.EntityNotInitializedException
import io.cucumber.java8.En
import kotlinx.coroutines.runBlocking
import org.springframework.beans.factory.annotation.Autowired
import java.util.UUID

class RequestInitSteps: En, CucumberStepsDefinition() {

    @Autowired
    private lateinit var requestService: RequestAggregateService

    init {
        Given("A request is instantiated from this requirement") {
            val requirementId = context.requirements.lastCreated
                ?: throw EntityNotInitializedException("lastCreated", "Requirement")

            val command = RequestInitCommand(
                id = UUID.randomUUID().toString(),
                frameworkId = requirementId
            )
            runBlocking {
                requestService.init().invoke(command)
            }
            context.requests += command.id
        }
    }
}
