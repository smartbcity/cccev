package cccev.dsl.cee

import cccev.dsl.cee.indba116.IND_BA_116
import ccev.dsl.core.Code
import ccev.dsl.core.ReferenceFramework

val cee = ReferenceFramework(
	identifier = "Cee",
	isDerivedFrom = listOf(
		IND_BA_116
	)
)

object FicheCode {
	object SecteurActivite: Code
	object Denomination: Code
	object ConditionsDelivranceCertificats: Code
	object DureeVieConventionnelle: Code
	object MontantCertificatsCumac: Code
	object Annexe1: Code
}

object FicheCee: Code
object DossierCee: Code
object DeclarationHonneur: Code
