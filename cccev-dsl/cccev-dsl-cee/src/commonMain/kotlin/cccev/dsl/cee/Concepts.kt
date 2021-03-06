package cccev.dsl.cee

import ccev.dsl.core.InformationConceptBase
import ccev.dsl.core.XSDDate

object DateTravaux: InformationConceptBase(
    identifier = "dateTravaux",
    name = "Date Travaux",
    unit = XSDDate,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Date de travaux"
)

object DatePrecedentsTravaux: InformationConceptBase(
    identifier = "datePrecedentsTravaux",
    name = "Date Précédents Travaux",
    unit = XSDDate,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Date des précédents travaux"
)

object DateDevis: InformationConceptBase(
    identifier = "dateDevis",
    name = "Date Devis",
    unit = XSDDate,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Date de devis"
)
