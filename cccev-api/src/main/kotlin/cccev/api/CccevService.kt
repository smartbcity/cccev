package cccev.api

import cccev.data.entity.supportedvalue.SupportedValueEntity
import cccev.data.entity.supportedvalue.SupportedValueRepository
import cccev.dsl.dto.query.GetEvidenceTypeListsQueryFunction
import cccev.dsl.dto.query.GetInformationConceptsQueryFunction
import cccev.dsl.dto.query.GetRequirementQueryFunction
import f2.dsl.fnc.F2Function
import f2.dsl.fnc.f2Function
import org.springframework.context.annotation.Bean
import org.springframework.stereotype.Service

@Service
class CccevService(
    private val getEvidenceTypeListsQueryFunction: GetEvidenceTypeListsQueryFunction,
    private val getInformationConceptsQueryFunction: GetInformationConceptsQueryFunction,
    private val getRequirementQueryFunction: GetRequirementQueryFunction,
    private val supportedValueRepository: SupportedValueRepository
) {

    @Bean
    fun getEvidenceTypeLists() = getEvidenceTypeListsQueryFunction

    @Bean
    fun getInformationConcepts() = getInformationConceptsQueryFunction

    @Bean
    fun getRequirement() = getRequirementQueryFunction

    @Bean
    fun test(): F2Function<Unit, Unit> = f2Function {
        val entity = SupportedValueEntity(providesValueFor = "blblbl")
        supportedValueRepository.save(entity)
    }
}
