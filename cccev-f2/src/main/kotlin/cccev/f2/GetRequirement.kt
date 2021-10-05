package cccev.f2

import cccev.dsl.cc.CarbonCopy
import cccev.dsl.cee.baten101.BAT_EN_101
import cccev.dsl.cee.indba116.IND_BA_116
import ccev.dsl.core.Requirement
import ccev.dsl.core.RequirementId
import f2.dsl.fnc.F2Function
import f2.dsl.fnc.f2Function
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

typealias GetRequirementQueryFunction = F2Function<GetRequirementQuery, GetRequirementQueryResult>

class GetRequirementQuery(
    val requirementId: RequirementId
)

class GetRequirementQueryResult(
    val requirement: Requirement?
)

@Configuration
class GetRequirementQueryFunctionImpl(
) {

    val AVAILABLE_REQUIREMENTS = listOf(CarbonCopy, BAT_EN_101, IND_BA_116).associateBy(Requirement::identifier)

    @Bean
    fun getRequirementQueryFunction(): GetRequirementQueryFunction = f2Function { query ->
        GetRequirementQueryResult(query.requirementId.toRequirement())
    }

    private fun RequirementId.toRequirement() = AVAILABLE_REQUIREMENTS[this]
}
