package cccev.dsl.cee.indba116

import cccev.dsl.cee.FicheCode
import cccev.dsl.cee.KWhCumac
import ccev.dsl.core.Duration
import ccev.dsl.core.InformationConceptBase
import ccev.dsl.core.XSDInt
import ccev.dsl.core.XSDString

object SecteurActivite: InformationConceptBase(
    identifier = "secteurActivite",
    name = "Secteur d'activité",
    unit = XSDString,
    type = FicheCode.SecteurActivite,
    description = "Secteur d'activité d'une entité",
    expressionOfExpectedValue = null
)

object UsageLuminaire: InformationConceptBase(
    identifier = "usageLuminaire",
    name = "Usage Luminaire",
    unit = XSDString,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Type d'utilisation d'un luminaire",
    expressionOfExpectedValue = null
)

object DureeDeVieLuminaire: InformationConceptBase(
    identifier = "dureeVieLuminaire",
    name = "Durée de vie luminaire",
    unit = Duration.Hour,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Durée de vie calculée à 25°C avec une chute du flux lumineux <= 20%",
    expressionOfExpectedValue = null
)

object EfficaciteLumineuse: InformationConceptBase(
    identifier = "efficaciteLumineuse",
    name = "Efficacité lumineuse",
    unit = LumenPerW,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Flux lumineux total sortant du luminaire divisé par la puissance totale du luminaire auxiliaire d’alimentation compris",
    expressionOfExpectedValue = null
)

object FacteurPuissance: InformationConceptBase(
    identifier = "facteurPuissance",
    name = "Facteur de puissance",
    unit = Ratio,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Facteur de puissance",
    expressionOfExpectedValue = null
)

object TauxDistorsionHarmonique: InformationConceptBase(
    identifier = "tauxDistorsionHarmonique",
    name = "Taux de distorsion harmonique",
    unit = Variation,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Taux de distortion harmonique",
    expressionOfExpectedValue = null
)

open class Norme(identifier: String = "norme"): InformationConceptBase(
    identifier = identifier,
    name = "Norme",
    unit = XSDString,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Identifie une norme",
    expressionOfExpectedValue = null
)

object TauxDistorsionHarmoniqueNormeCalcul: Norme("tauxDistorsionHarmoniqueNormeCalcul")

object NombreTypesDispositifGestionEclairage: InformationConceptBase(
    identifier = "nombreTypesDispositifGestionEclairage",
    name = "Nombre Types Dispositif Gestion Eclairage",
    unit = XSDInt,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Nombre de types de dispositifs de gestion de l'éclairage",
    expressionOfExpectedValue = null
)

object DureeVieConventionnelleLuminaire: InformationConceptBase(
    identifier = "dureeVieConventionnelleLuminaire",
    name = "Durée de vie conventionnelle Luminaire",
    unit = Duration.Year,
    type = FicheCode.DureeVieConventionnelle,
    description = "Durée de vie conventionnelle de luminaires en fonction du dispositif de gestion d'éclairage",
    expressionOfExpectedValue = "{0: 13, 1: 14, 2: 16}.get(\${${NombreTypesDispositifGestionEclairage.identifier}})"
)

object CumacParWatt: InformationConceptBase(
    identifier = "cumacParWatt",
    name = "Montant en kWh par Watt",
    unit = KWhCumacPerW,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Montant en kWh/W en fonction du nombre de types dispositif de gestion de l'éclairage",
    expressionOfExpectedValue = "{0: 25, 1: 30, 2: 34}.get(\${${NombreTypesDispositifGestionEclairage.identifier}})"
)

object Puissance: InformationConceptBase(
    identifier = "puissance",
    name = "Puissance",
    unit = Watt,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Puissance en Watt",
    expressionOfExpectedValue = null
)

object Cumac: InformationConceptBase(
    identifier = "kWhCumac",
    name = "kWh Cumac",
    unit = KWhCumac,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "kWh Cumac",
    expressionOfExpectedValue = null
)
