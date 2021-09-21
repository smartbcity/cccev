package cccev.dsl.cee.baten101

import cccev.dsl.cee.ConditionsDelivranceCertificats
import cccev.dsl.cee.Denomination
import cccev.dsl.cee.DureeVieConventionnelle
import cccev.dsl.cee.EstProfessionnelInformationRequirement
import cccev.dsl.cee.FicheCee
import cccev.dsl.cee.MontantCertificatsCumac
import cccev.dsl.cee.SecteurApplication
import ccev.dsl.core.criterion


val BAT_EN_101 = criterion {
    identifier = "BAT-EN-101"
    name = "Isolation de combles ou de toitures"
    type = FicheCee
    +SecteurApplication(
    )
    +Denomination(
        "Mise en place d'une isolation thermique en plancher de combles perdus ou en rampant de toiture"
    )
    +ConditionsDelivranceCertificats(
        EstProfessionnelInformationRequirement,
        ResistanceThermiqueMinimale,
        BesoinPareVapeur,
        DateTravauxRegles
    )
    +DureeVieConventionnelle(
        DatePrecedentsTravauxContrainte
    )
    +MontantCertificatsCumac(
        CalculCertificatsCumac
    )
    hasEvidenceTypeList = listOf(
    )
}