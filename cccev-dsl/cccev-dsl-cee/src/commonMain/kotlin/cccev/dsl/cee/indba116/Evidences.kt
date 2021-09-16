package cccev.dsl.cee.indba116

import ccev.dsl.core.Evidence
import ccev.dsl.core.SupportedValue

object Annexe1 {
    object Document: Evidence(
        isConformantTo = listOf(
            Annexe1AvecDetailsEquipementDocument
        ),
        supportsValue = listOf(
            puissanceTotale,
            dureeDeVie,
            efficaciteLumineuse,
            facteurPuissance,
            tauxDistorsionHarmonique,
            tauxDistorsionHarmoniqueNorme,
            nombreTypesDispositifGestionEclairage
        )
    )

    val puissanceTotale = SupportedValue(
        value = "100",
        providesValueFor = Puissance
    )

    val dureeDeVie = SupportedValue(
        value = "60000",
        providesValueFor = DureeDeVieLuminaire
    )

    val efficaciteLumineuse = SupportedValue(
        value = "200",
        providesValueFor = EfficaciteLumineuse
    )

    val facteurPuissance = SupportedValue(
        value = "0.95",
        providesValueFor = FacteurPuissance
    )

    val tauxDistorsionHarmonique = SupportedValue(
        value = "200",
        providesValueFor = TauxDistorsionHarmonique
    )

    val tauxDistorsionHarmoniqueNorme = SupportedValue(
        value = "EN 61000-3-2",
        providesValueFor = TauxDistorsionHarmoniqueNormeCalcul
    )

    val nombreTypesDispositifGestionEclairage = SupportedValue(
        value = "1",
        providesValueFor = NombreTypesDispositifGestionEclairage
    )
}

object EtudePrealable {
    object Document: Evidence(
        isConformantTo = listOf(
            EtudeDimensionnementEclairagePrealableDocument
        ),
    )
}

object CertificatPro {
    object Document: Evidence(
        isConformantTo = listOf(
            CertificatCerfa
        ),
    )
}
