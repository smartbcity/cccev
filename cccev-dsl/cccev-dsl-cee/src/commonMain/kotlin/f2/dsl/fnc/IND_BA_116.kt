package f2.dsl.fnc

import ccev.dsl.core.CerfaCode
import ccev.dsl.core.Code
import ccev.dsl.core.Contraint
import ccev.dsl.core.Duration
import ccev.dsl.core.EvidenceType
import ccev.dsl.core.EvidenceTypeList
import ccev.dsl.core.InformationConcept
import ccev.dsl.core.InformationRequirement
import ccev.dsl.core.PeriodOfTime
import ccev.dsl.core.Requirement
import ccev.dsl.core.XSDString
import ccev.dsl.core.criterion

val IND_BA_116 = criterion {
	identifier = "IND-BA-116"
	name = "Luminaires à modules LED"
	type = FicheCee
	+SecteurApplication(
		EstBatimentIndustriel
	)
	+Denomination(
		DenominationTypeUsageNonMouvementOuIntrusion
	)
	+ConditionsDelivranceCertificats(
		EstProfessionnelInformationRequirement,
		DureeDeVie25Degree,
		ChuteFluxLumineux,
		EfficaciteLumineuse
	)
	+DureeVieConventionnelle(

	)
}

object FicheCee: Code
object LumenPerW: Code
object ConditionsPourLaDélivranceDeCertificatsCode: Code


object FicheCode {
	object SecteurActivite: Code
	object Denomination: Code
	object ConditionsDélivranceCertificats: Code
}

class SecteurApplication(
	vararg requirements: Requirement,
): Contraint(
	name = "Secteur d’application",
	description = "Le secteur d'application de la fiche.",
	type = FicheCode.SecteurActivite,
	identifier = "UUID.randomUUID().toString()",
	hasRequirement = requirements.asList()
)

class Denomination(
	vararg requirements: Requirement,
): Contraint(
	name = "Secteur d’application",
	description = "Le secteur d'application de la fiche.",
	type = FicheCode.SecteurActivite,
	identifier = "UUID.randomUUID().toString()",
	hasRequirement = requirements.asList()
)

class ConditionsDelivranceCertificats(
	vararg requirements: Requirement,
): Contraint(
	name = " Conditions pour la délivrance de certificats",
	description = "La liste des critère a validé",
	type = FicheCode.ConditionsDélivranceCertificats,
	identifier = "UUID.randomUUID().toString()",
	hasRequirement = requirements.asList()
)

class DureeVieConventionnelle(
	vararg requirements: Requirement,
): Contraint(
	name = " Conditions pour la délivrance de certificats",
	description = "La liste des critère a validé",
	type = FicheCode.ConditionsDélivranceCertificats,
	identifier = "UUID.randomUUID().toString()",
	hasRequirement = requirements.asList()
)

object EstBatimentIndustriel: Contraint(
	description = "Secteur Activité == Batiment Industriel",
	identifier = "BAT-IND",
	name = "Secteur d'application",
	type = FicheCode.SecteurActivite,
	hasConcept = listOf(
		InformationConcept(
			description = TODO(),
			expressionOfExpectedValue = TODO(),
			identifier = TODO(),
			type = XSDString,
			name = TODO()
		)

	)
)

object DenominationTypeUsageNonMouvementOuIntrusion: Contraint(
	description = "Type d'usage <=> [Instusion, Movement]",
	identifier = "Usage non authorisé",
	name = """
		Les installations d'éclairage destinées à assurer la protection des biens lorsqu'elles sont asservies à des dispositifs
		de détection de mouvement ou d'intrusion ne sont pas éligibles. 
	""".trimIndent(),
	type = FicheCode.Denomination,
	hasConcept = listOf(
		InformationConcept(
			description = TODO(),
			expressionOfExpectedValue = TODO(),
			identifier = TODO(),
			type = XSDString,
			name = TODO()
		)

	)
)

object EstProfessionnelInformationRequirement: InformationRequirement(
	description = "La mise en place est réalisée par un professionnel.",
	identifier = "estProfessionnel",
	name = """
		CertificatProfessionel
	""".trimIndent(),
	type = TODO(),
	hasEvidenceTypeList = listOf()
)

object CertificatProfessionnel: EvidenceTypeList(
	identifier = "CertificatProfessionnel",
	name = "Certificat Professionnel",
	description = "CertificatProfessionnel",
	specifiesEvidenceType = listOf(
		EvidenceType(
			identifier = "CERFA-2321122",
			evidenceTypeClassification = CerfaCode,
			validityPeriodConstraint = PeriodOfTime(
				duration = "10 ans"
			)
		)
	)
)

/**
 * To generate the pdf we should create a generique contraint for
 * DureeDeVie25Degree and ChuteFluxLumineux.
 * - durée de vie calculée à 25°C ≥ 50 000 heures avec une chute de flux lumineux ≤ 20 % ;
 */
object DureeDeVie25Degree: Contraint(
	description = "lifeSpan >= 50 000 heures",
	identifier = "lifetime25c",
	name = """
	 durée de vie calculée a 25 degree celcuis
	""".trimIndent(),
	type = ConditionsPourLaDélivranceDeCertificatsCode,
	hasConcept = listOf(
		InformationConcept(
			description = "durée de vie calculée à 25°C ≥ 50 000 heures",
			expressionOfExpectedValue = TODO(),
			identifier = TODO(),
			type = Duration,
			name = TODO()
		)

	)
)

object ChuteFluxLumineux: Contraint(
	description = "chuteFluxLumineux <= 20%",
	identifier = "chuteFluxLumineux",
	name = "avec une chute de flux lumineux ≤ 20 %",
	type = ConditionsPourLaDélivranceDeCertificatsCode,
	hasConcept = listOf(
		InformationConcept(
			description = "chute du flux lumineux",
			expressionOfExpectedValue = TODO(),
			identifier = "chuteFluxLumineux",
			type = LumenPerW,
			name = TODO()
		)
	)
)

object EfficaciteLumineuse: Contraint(
	description = """
		efficacité lumineuse (flux lumineux total sortant du luminaire divisé par la puissance totale du luminaire
		auxiliaire d’alimentation compris) ≥ 110 lm/W;
	""".trimIndent(),
	identifier = "efficaciteLumineuse",
	name = "chute du flux lumineux a la fin de la durée de vie <= 20%",
	type = ConditionsPourLaDélivranceDeCertificatsCode,
	hasConcept = listOf(
		InformationConcept(
			description = "chute du flux lumineux",
			expressionOfExpectedValue = TODO(),
			identifier = "efficaciteLumineuse",
			type = LumenPerW,
			name = TODO()
		)

	)
)

object FacteurPuissance: Contraint(
	description = """
		facteur de puissance > 0,9 quelle que soit la puissance ; 
	""".trimIndent(),
	identifier = "facteurPuissance",
	name = "facteurPuissance > 0,9",
	type = ConditionsPourLaDélivranceDeCertificatsCode,
	hasConcept = listOf(
		InformationConcept(
			description = "chute du flux lumineux",
			expressionOfExpectedValue = TODO(),
			identifier = "efficaciteLumineuse",
			type = LumenPerW,
			name = TODO()
		)

	)
)
