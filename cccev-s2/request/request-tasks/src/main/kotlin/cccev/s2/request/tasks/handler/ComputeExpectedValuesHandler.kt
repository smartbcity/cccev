package cccev.s2.request.tasks.handler

import cccev.commons.EventHandler
import cccev.dsl.dto.query.GetInformationConceptsQuery
import cccev.dsl.dto.query.GetInformationConceptsQueryFunction
import cccev.s2.request.app.RequestService
import cccev.s2.request.app.entity.RequestEntity
import cccev.s2.request.app.entity.RequestRepository
import cccev.s2.request.domain.features.command.RequestSupportedValueAddCommand
import cccev.s2.request.domain.features.command.RequestSupportedValueAddedEvent
import ccev.dsl.core.InformationConcept
import ccev.dsl.core.SupportedValue
import f2.dsl.fnc.invoke
import kotlinx.coroutines.reactor.awaitSingle
import org.springframework.context.event.EventListener
import org.springframework.stereotype.Component
import java.util.UUID
import javax.script.ScriptEngineManager

@Component
class ComputeExpectedValuesHandler(
    private val getInformationConceptsQueryFunction: GetInformationConceptsQueryFunction,
    private val requestRepository: RequestRepository,
    private val requestService: RequestService
): EventHandler() {

    @EventListener
    fun onSupportedValueAdded(event: RequestSupportedValueAddedEvent) = handleEvent(
        "ComputeExpectedValuesHandler - onSupportedValueAdded - Request[${event.id}] InformationConcept[${event.providesValueFor}]"
    ) {
        val requestId = event.id
        val supportedInfoConceptId = event.providesValueFor

        val request = requestRepository.findById(requestId).awaitSingle()

        val query = GetInformationConceptsQuery(id = requestId, requirement = request.frameworkId)
        val infoConcepts = getInformationConceptsQueryFunction.invoke(query).informationConcepts

        val infoConceptsDependingOnNewValue = infoConcepts.filter { infoConcept ->
            supportedInfoConceptId in infoConcept.dependsOn
        }

        val commands = infoConceptsDependingOnNewValue.filter { infoConcept ->
            request.supportedValues.keys.containsAll(infoConcept.dependsOn)
        }.mapNotNull { infoConcept ->
            infoConcept.computeSupportedValue(request)
        }.map { value ->
            RequestSupportedValueAddCommand(
                id = requestId,
                supportedValue = value
            )
        }

//        if (commands.isNotEmpty()) {
//            requestService.addSupportedValue().invoke(commands.asFlow())
//        }

        commands.forEach { command ->
            requestService.addSupportedValue().invoke(command)
        }
    }

    private fun InformationConcept.computeSupportedValue(request: RequestEntity): SupportedValue? {
        if (!everyDependenciesSatisfied(request)) return null

        val engine = ScriptEngineManager().getEngineByName("kotlin")
        dependsOn.forEach { infoConceptId ->
            engine.eval("val `$infoConceptId` = ${request.supportedValues[infoConceptId]!!.value}")
        }

        val value = engine.eval(expressionOfExpectedValue).toString()
        return SupportedValue(
            identifier = UUID.randomUUID().toString(),
            value = value,
            providesValueFor = identifier
        )
    }

    private fun InformationConcept.everyDependenciesSatisfied(request: RequestEntity): Boolean {
        return dependsOn.all { infoConceptId -> infoConceptId in request.supportedValues.keys }
    }
}