package cccev.dsl.cee.indba116

import cccev.dsl.cee.FicheCode
import ccev.dsl.core.CerfaCode
import ccev.dsl.core.EvidenceType
import ccev.dsl.core.EvidenceTypeList
import ccev.dsl.core.PeriodOfTime

object CertificatProfessionnel: EvidenceTypeList(
    identifier = "CertificatProfessionnel",
    name = "Certificat Professionnel",
    description = "CertificatProfessionnel",
    specifiesEvidenceType = listOf(
        EvidenceType(
            identifier = "CERFA-2321122",
            evidenceTypeClassification = CerfaCode,
            validityPeriodConstraint = PeriodOfTime(
                duration = "10 ans"
            )
        )
    )
)

object EtudeDimensionnementEclairagePrealable: EvidenceTypeList(
    identifier = "etudeDimensionnementEclairagePrealable",
    name = """
        Le document justificatif spécifique à l’opération est l’étude de dimensionnement de l’éclairage préalable à la mise 
        en place des luminaires à modules LED. 
    """.trimIndent(),
    description = "Étude de dimensionnement de l'éclairage préalable à la mise en place des luminaires",
    specifiesEvidenceType = listOf(
        EvidenceType(
            identifier = "etudePrealabe",
            evidenceTypeClassification = Etude
        )
    )
)

object Annexe1AvecDetailsEquipement: EvidenceTypeList(
    identifier = "annexe1Detaillee",
    name = """
        La preuve de réalisation de l’opération mentionne la mise en place de luminaires à modules LED, la quantité 
        d’équipements installés, leur puissance, leur durée de vie calculée à 25°C, leur chute de flux lumineux à l’issue de 
        leur durée de vie, leur efficacité lumineuse, auxiliaire d’alimentation compris, leur facteur de puissance, leur taux 
        de distorsion harmonique et lorsqu’il est mis en place l’installation d’un dispositif de gestion de l’éclairage en 
        précisant s’il s’agit d’une détection de présence et/ou d’un système de variation de lumière tenant compte des 
        apports de lumière du jour. 
    """.trimIndent(),
    description = "Annexe 1 avec détails des caractéristiques des équipements installés",
    specifiesEvidenceType = listOf(
        EvidenceType(
            identifier = "annexe1Detaillee",
            evidenceTypeClassification = FicheCode.Annexe1
        )
    )
)

object Annexe1AvecReferencesEquipement: EvidenceTypeList(
    identifier = "annexe1References",
    name = """
        A défaut, la preuve de réalisation de l’opération mentionne : 
        - la mise en place d’un nombre donné de luminaires, identifiés par leur marque et référence ; 
        - la puissance de ces luminaires ; 
        - les marque et référence du dispositif de gestion de l’éclairage lorsqu’il est mis en place en précisant s’il s’agit 
        d’une détection de présence et/ou d’un système de variation de lumière tenant compte des apports de lumière du 
        jour. 
        Elle est complétée dans ce cas par un document issu du fabricant indiquant que les équipements de marque et 
        référence installés sont des luminaires à modules LED. Ce document précise la durée de vie des luminaires 
        calculée à 25°C, leur chute de flux lumineux à l’issue de leur durée de vie, leur efficacité lumineuse, auxiliaire 
        d'alimentation compris, leur facteur de puissance et leur taux de distorsion harmonique selon la norme EN 61000- 
        3-2. 
    """.trimIndent(),
    description = "Annexe 1 avec marques et références des équipements installés, complétée par les fiches constructeur",
    specifiesEvidenceType = listOf(
        EvidenceType(
            identifier = "annexe1References",
            evidenceTypeClassification = FicheCode.Annexe1
        ),
        EvidenceType(
            identifier = "ficheConstructeur",
            evidenceTypeClassification = FicheConstructeur
        )
    )
)
