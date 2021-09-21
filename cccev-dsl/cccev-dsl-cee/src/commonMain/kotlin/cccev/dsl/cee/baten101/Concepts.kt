package cccev.dsl.cee.baten101

import cccev.dsl.cee.indba116.NombreTypesDispositifGestionEclairage
import ccev.dsl.core.InformationConcept
import ccev.dsl.core.XSDDate
import ccev.dsl.core.XSDDouble
import ccev.dsl.core.XSDString

object ResistanceThermique: InformationConcept(
    identifier = "resistanceThermique",
    type = SquareMeterKelvinPerWatt,
    name = "Résistance Thermique",
    description = "Résistance Thermique",
    expressionOfExpectedValue = null
)

object DatePrecedentsTravauxMemeBatiment: InformationConcept(
    identifier = "datePrecedentsTravauxMemeBatiment",
    type = XSDDate,
    name = "Résistance Thermique",
    description = "Résistance Thermique",
    expressionOfExpectedValue = null
)

object SurfaceIsolant: InformationConcept(
    identifier = "surfaceIsolant",
    type = SquareMeter,
    name = "Surface Isolant",
    description = "Surface Isolant",
    expressionOfExpectedValue = null
)

object CumacPerM2Isolant: InformationConcept(
    identifier = "cumacPerM2Isolant",
    type = kWhCumacPerSquareMeter,
    name = "Montant en kWh cumac par m2 d'isolant",
    description = "Montant en kWh/m2 en fonction de la zone climatique",
    expressionOfExpectedValue = "{H1: 25, H2: 30, H3: 34}.get(\${${NombreTypesDispositifGestionEclairage.identifier}})"
)

object FacteurCorrectif: InformationConcept(
    identifier = "facteurCorrectif",
    type = XSDDouble,
    name = "Facteur correctif",
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

object ZoneClimatique: InformationConcept(
    identifier = "zoneClimatique",
    type = XSDString,
    name = "Zone Climatique",
    description = "Zone Climatique",
    expressionOfExpectedValue = "in ['H1', 'H2', 'H3']"
)

object SecteurActivite: InformationConcept(
    identifier = "secteurActivite",
    type = XSDString,
    name = "Secteur d'activité",
    description = "Secteur d'activité",
    expressionOfExpectedValue = "in ['Bureaux', 'Hôtellerie/Restauration', 'Santé', 'Enseignement', 'Commerces', 'Autres']"
)
