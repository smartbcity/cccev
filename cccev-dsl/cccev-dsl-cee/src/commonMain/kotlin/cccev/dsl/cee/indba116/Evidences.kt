package cccev.dsl.cee.indba116

import cccev.dsl.cee.CertificatCerfa
import ccev.dsl.core.Evidence
import ccev.dsl.core.SupportedValue

object Annexe1 {
    object Document: Evidence(
        isConformantTo = listOf(
            Annexe1AvecDetailsEquipementDocument.identifier
        ),
        supportsValue = listOf(
            puissanceTotale.identifier,
            dureeDeVie.identifier,
            efficaciteLumineuse.identifier,
            facteurPuissance.identifier,
            tauxDistorsionHarmonique.identifier,
            tauxDistorsionHarmoniqueNorme.identifier,
            nombreTypesDispositifGestionEclairage.identifier
        )
    )

    val puissanceTotale = SupportedValue(
        identifier = "puissanceTotale",
        value = "100",
        providesValueFor = Puissance.identifier
    )

    val dureeDeVie = SupportedValue(
        identifier = "SupportedValue",
        value = "60000",
        providesValueFor = DureeDeVieLuminaire.identifier
    )

    val efficaciteLumineuse = SupportedValue(
        identifier = "efficaciteLumineuse",
        value = "200",
        providesValueFor = EfficaciteLumineuse.identifier
    )

    val facteurPuissance = SupportedValue(
        identifier = "facteurPuissance",
        value = "0.95",
        providesValueFor = FacteurPuissance.identifier
    )

    val tauxDistorsionHarmonique = SupportedValue(
        identifier = "tauxDistorsionHarmonique",
        value = "200",
        providesValueFor = TauxDistorsionHarmonique.identifier
    )

    val tauxDistorsionHarmoniqueNorme = SupportedValue(
        identifier = "tauxDistorsionHarmoniqueNorme",
        value = "EN 61000-3-2",
        providesValueFor = TauxDistorsionHarmoniqueNormeCalcul.identifier
    )

    val nombreTypesDispositifGestionEclairage = SupportedValue(
        identifier = "nombreTypesDispositifGestionEclairage",
        value = "1",
        providesValueFor = NombreTypesDispositifGestionEclairage.identifier
    )
}

object EtudePrealable {
    object Document: Evidence(
        isConformantTo = listOf(
            EtudeDimensionnementEclairagePrealableDocument.identifier
        ),
    )
}

object CertificatPro {
    object Document: Evidence(
        isConformantTo = listOf(
            CertificatCerfa.identifier
        ),
    )
}
