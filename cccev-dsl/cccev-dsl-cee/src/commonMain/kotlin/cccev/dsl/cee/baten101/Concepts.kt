package cccev.dsl.cee.baten101

import cccev.dsl.cee.FicheCode
import cccev.dsl.cee.indba116.NombreTypesDispositifGestionEclairage
import ccev.dsl.core.InformationConceptBase
import ccev.dsl.core.XSDDate
import ccev.dsl.core.XSDDouble
import ccev.dsl.core.XSDString

object ResistanceThermique: InformationConceptBase(
    identifier = "resistanceThermique",
    name = "Résistance Thermique",
    unit = SquareMeterKelvinPerWatt,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Résistance Thermique",
    expressionOfExpectedValue = null
)

object DatePrecedentsTravauxMemeBatiment: InformationConceptBase(
    identifier = "datePrecedentsTravauxMemeBatiment",
    name = "Résistance Thermique",
    unit = XSDDate,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Résistance Thermique",
    expressionOfExpectedValue = null
)

object SurfaceIsolant: InformationConceptBase(
    identifier = "surfaceIsolant",
    name = "Surface Isolant",
    unit = SquareMeter,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Surface Isolant",
    expressionOfExpectedValue = null
)

object CumacPerM2Isolant: InformationConceptBase(
    identifier = "cumacPerM2Isolant",
    name = "Montant en kWh cumac par m2 d'isolant",
    unit = kWhCumacPerSquareMeter,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Montant en kWh/m2 en fonction de la zone climatique",
    expressionOfExpectedValue = "{H1: 25, H2: 30, H3: 34}.get(\${${NombreTypesDispositifGestionEclairage.identifier}})"
)

object FacteurCorrectif: InformationConceptBase(
    identifier = "facteurCorrectif",
    name = "Facteur correctif",
    unit = XSDDouble,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Facteur correctif en fonction du secteur d'activité",
    expressionOfExpectedValue = """
        {
            Bureaux: 0.6,
            Enseignement: 0.6,
            Commerces: 0.6,
            'Hôtellerie/Restauration': 0.7,
            Santé: 1.2,
            Autres: 0.6
        }.get($${SecteurActivite.identifier})
    """.trimIndent()
)

object ZoneClimatique: InformationConceptBase(
    identifier = "zoneClimatique",
    name = "Zone Climatique",
    unit = XSDString,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Zone Climatique",
    expressionOfExpectedValue = "in ['H1', 'H2', 'H3']"
)

object SecteurActivite: InformationConceptBase(
    identifier = "secteurActivite",
    name = "Secteur d'activité",
    unit = XSDString,
    type = FicheCode.ConditionsDelivranceCertificats,
    description = "Secteur d'activité",
    expressionOfExpectedValue = "in ['Bureaux', 'Hôtellerie/Restauration', 'Santé', 'Enseignement', 'Commerces', 'Autres']"
)
