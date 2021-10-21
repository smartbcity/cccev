package features

import cccev.dsl.dto.query.GetRequestScoreQuery
import cccev.dsl.dto.query.GetRequestScoreQueryFunction
import ccev.dsl.core.InformationConceptId
import f2.dsl.fnc.invoke
import features.cccev.test.CucumberStepsDefinition
import io.cucumber.datatable.DataTable
import io.cucumber.java8.En
import kotlinx.coroutines.runBlocking
import org.assertj.core.api.Assertions
import org.springframework.beans.factory.annotation.Autowired

class GetRequestScoreSteps: En, CucumberStepsDefinition() {

    @Autowired
    private lateinit var getRequestScoreQueryFunction: GetRequestScoreQueryFunction

    private var totalScore: Double = -1.0
    private lateinit var scorePerInfoConcept: Map<InformationConceptId, Double>

    init {
        DataTableType { entry: Map<String, String> ->
            ScorePerInformationConceptParams(
                informationConceptId = entry.safeExtract("informationConcept"),
                score = entry.safeExtract("score").toDouble()
            )
        }

        When("I fetch the score of this request") {
            val requestId = context.requests.lastCreated
            Assertions.assertThat(requestId).isNotNull

            runBlocking {
                val query = GetRequestScoreQuery(
                    requestId = requestId!!
                )
                val result = getRequestScoreQueryFunction.invoke(query)
                totalScore = result.score
                scorePerInfoConcept = result.scorePerInformationConcept
            }
        }

        Then("The score of each information concept of this request is computed") { dataTable: DataTable ->
            val expectedScores = dataTable.asList(ScorePerInformationConceptParams::class.java)

            expectedScores.forEach { expectedScore ->
                val actualScore = scorePerInfoConcept[expectedScore.informationConceptId]
                Assertions.assertThat(actualScore).isEqualTo(expectedScore.score)
            }
        }

        Then("The total score of this request is the average of all its information concepts") {
            val expectedTotalScore = scorePerInfoConcept.values.average()
            Assertions.assertThat(totalScore).isEqualTo(expectedTotalScore)
        }
    }

    private data class ScorePerInformationConceptParams(
        val informationConceptId: InformationConceptId,
        val score: Double
    )
}
