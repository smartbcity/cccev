package cccev.dsl.cee.indba116

import cccev.dsl.cee.ConditionsDelivranceCertificats
import cccev.dsl.cee.Denomination
import cccev.dsl.cee.DureeVieConventionnelle
import cccev.dsl.cee.FicheCee
import cccev.dsl.cee.MontantCertificatsCumac
import cccev.dsl.cee.SecteurApplication
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
		DureeDeVie25DegresAvecChuteFluxLumineuxInferieur20Pourcents,
		EfficaciteLumineuseMinimale,
		FacteurPuissanceMinimal,
		TauxDistorsionHarmoniqueValide,
		EtudeDimensionnementEclairagePrealableInfo
	)
	+DureeVieConventionnelle(
		DatePrecedentsTravaux
	)
	+MontantCertificatsCumac(
		CalculCertificatsCumac
	)
	hasEvidenceTypeList = listOf(
		Annexe1AvecDetailsEquipement,
		Annexe1AvecReferencesEquipement
	)
}
