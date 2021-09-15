package cccev.dsl.cee.indba116

import ccev.dsl.core.Duration
import ccev.dsl.core.InformationConcept
import ccev.dsl.core.XSDDate
import ccev.dsl.core.XSDInt
import ccev.dsl.core.XSDString

object SecteurActivite: InformationConcept(
    identifier = "secteurActivite",
    type = XSDString,
    name = "Secteur d'activité",
    description = "Secteur d'activité d'une entité",
    expressionOfExpectedValue = null
)

object UsageLuminaire: InformationConcept(
    identifier = "usageLuminaire",
    type = XSDString,
    name = "Usage Luminaire",
    description = "Type d'utilisation d'un luminaire",
    expressionOfExpectedValue = null
)

object DureeDeVieLuminaire: InformationConcept(
    identifier = "dureeVieLuminaire",
    type = Duration,
    name = "Durée de vie luminaire",
    description = "Durée de vie calculée à 25°C avec une chute du flux lumineux <= 20%",
    expressionOfExpectedValue = null
)

object EfficaciteLumineuse: InformationConcept(
    identifier = "efficaciteLumineuse",
    type = LumenPerW,
    name = "Efficacité lumineuse",
    description = "Flux lumineux total sortant du luminaire divisé par la puissance totale du luminaire auxiliaire d’alimentation compris",
    expressionOfExpectedValue = null
)

object FacteurPuissance: InformationConcept(
    identifier = "facteurPuissance",
    type = Ratio,
    name = "Facteur de puissance",
    description = "Facteur de puissance",
    expressionOfExpectedValue = null
)

object TauxDistorsionHarmonique: InformationConcept(
    identifier = "tauxDistorsionHarmonique",
    type = Variation,
    name = "Taux de distorsion harmonique",
    description = "Taux de distortion harmonique",
    expressionOfExpectedValue = null
)

open class Norme(identifier: String = "norme"): InformationConcept(
    identifier = identifier,
    type = XSDString,
    name = "Norme",
    description = "Identifie une norme",
    expressionOfExpectedValue = null
)

object TauxDistorsionHarmoniqueNormeCalcul: Norme("tauxDistorsionHarmoniqueNormeCalcul")

object DateTravaux: InformationConcept(
    identifier = "dateTravaux",
    type = XSDDate,
    name = "Date Travaux",
    description = "Date de travaux",
    expressionOfExpectedValue = null
)

object NombreTypesDispositifGestionEclairage: InformationConcept(
    identifier = "nombreTypesDispositifGestionEclairage",
    type = XSDInt,
    name = "Nombre Types Dispositif Gestion Eclairage",
    description = "Nombre de types de dispositifs de gestion de l'éclairage",
    expressionOfExpectedValue = null
)
