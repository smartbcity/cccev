package cccev.api

import cccev.dsl.dto.query.GetEvidenceTypeListsQueryFunction
import cccev.f2.GetInformationConceptsQueryFunction
import cccev.f2.GetRequirementQueryFunction
import org.springframework.context.annotation.Bean
import org.springframework.stereotype.Service

@Service
class CccevService(
    private val getEvidenceTypeListsQueryFunction: GetEvidenceTypeListsQueryFunction,
    private val getInformationConceptsQueryFunction: GetInformationConceptsQueryFunction,
    private val getRequirementQueryFunction: GetRequirementQueryFunction
) {

    @Bean
    fun getEvidenceTypeLists() = getEvidenceTypeListsQueryFunction

    @Bean
    fun getInformationConcepts() = getInformationConceptsQueryFunction

    @Bean
    fun getRequirement() = getRequirementQueryFunction
}
