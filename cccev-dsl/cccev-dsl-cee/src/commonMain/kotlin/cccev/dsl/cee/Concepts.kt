package cccev.dsl.cee

import ccev.dsl.core.InformationConcept
import ccev.dsl.core.XSDDate

object DateTravaux: InformationConcept(
    identifier = "dateTravaux",
    type = XSDDate,
    name = "Date Travaux",
    description = "Date de travaux",
    expressionOfExpectedValue = null
)

object DatePrecedentsTravaux: InformationConcept(
    identifier = "datePrecedentsTravaux",
    type = XSDDate,
    name = "Date Précédents Travaux",
    description = "Date des précédents travaux",
    expressionOfExpectedValue = null
)

object DateDevis: InformationConcept(
    identifier = "dateDevis",
    type = XSDDate,
    name = "Date Devis",
    description = "Date de devis",
    expressionOfExpectedValue = null
)