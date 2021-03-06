package cccev.f2.query

import cccev.dsl.cc.CarbonCopy
import cccev.dsl.cc.Equity
import cccev.dsl.cee.baten101.BAT_EN_101
import cccev.dsl.cee.indba116.IND_BA_116
import cccev.dsl.dto.query.GetRequirementQueryFunction
import cccev.dsl.dto.query.GetRequirementQueryResult
import ccev.dsl.core.Requirement
import ccev.dsl.core.RequirementId
import f2.dsl.fnc.f2Function
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class GetRequirementQueryFunctionImpl {

    companion object {
        val AVAILABLE_REQUIREMENTS = listOf<Requirement>(CarbonCopy, Equity, BAT_EN_101, IND_BA_116)
            .associateBy(Requirement::identifier)
            .toMutableMap() // for test purposes, will be removed when requirements are stored in db
    }

    @Bean
    fun getRequirementQueryFunction(): GetRequirementQueryFunction = f2Function { query ->
        GetRequirementQueryResult(query.requirementId.toRequirement())
    }

    private fun RequirementId.toRequirement() = AVAILABLE_REQUIREMENTS[this]
}
