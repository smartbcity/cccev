package cccev.dsl.cee.indba116

import cccev.dsl.cee.FicheCode
import ccev.dsl.core.Constraint
import ccev.dsl.core.Criterion
import ccev.dsl.core.InformationRequirement
import ccev.dsl.core.PartialRequirement

object EstBatimentIndustriel: Constraint(
    description = "${SecteurActivite.identifier} == Industriel",
    identifier = "BAT-IND",
    name = "Secteur d'application",
    type = FicheCode.SecteurActivite,
    hasConcept = listOf(
        SecteurActivite
    )
)

object DenominationTypeUsageNonMouvementOuIntrusion: Constraint(
    description = "${UsageLuminaire.identifier} !in [Intrusion, Mouvement]",
    identifier = "Usage non autorisé",
    name = """
		Les installations d'éclairage destinées à assurer la protection des biens lorsqu'elles sont asservies à des dispositifs
		de détection de mouvement ou d'intrusion ne sont pas éligibles. 
	""".trimIndent(),
    type = FicheCode.Denomination,
    hasConcept = listOf(
        UsageLuminaire
    )
)

object EstProfessionnelInformationRequirement: InformationRequirement(
    description = "La mise en place est réalisée par un professionnel.",
    identifier = "estProfessionnel",
    name = "CertificatProfessionel",
    type = FicheCode.ConditionsDelivranceCertificats,
    hasEvidenceTypeList = listOf(
        CertificatProfessionnel
    )
)

object DureeDeVie25DegresAvecChuteFluxLumineuxInferieur20Pourcents: Constraint(
    description = "${DureeDeVieLuminaire.identifier} >= 50000 heures",
    identifier = "dureeVie25CEtChuteMax20P",
    name = "Durée de vie calculée à 25°C >= 50 000 heures avec une chute du flux lumineux <= 20%",
    type = FicheCode.ConditionsDelivranceCertificats,
    hasConcept = listOf(
        DureeDeVieLuminaire
    )
)

object EfficaciteLumineuseMinimale: Constraint(
    description = "${EfficaciteLumineuse.identifier} ≥ 110",
    identifier = "efficaciteLumineuseMinimale",
    name = """
		efficacité lumineuse (flux lumineux total sortant du luminaire divisé par 
		la puissance totale du luminaire auxiliaire d’alimentation compris) >= 110 lm/W
	""".trimIndent(),
    type = FicheCode.ConditionsDelivranceCertificats,
    hasConcept = listOf(
        EfficaciteLumineuse
    )
)

object FacteurPuissanceMinimal: Constraint(
    description = "${FacteurPuissance.identifier} > 0.9",
    identifier = "facteurPuissanceMinimal",
    name = "facteur de puissance > 0,9 quelle que soit la puissance",
    type = FicheCode.ConditionsDelivranceCertificats,
    hasConcept = listOf(
        FacteurPuissance
    )
)

object TauxDistorsionHarmoniqueValide: Criterion(
    description = "Liste de contraintes sur le taux de distorsion harmonique",
    identifier = "tauxDistorsionHarmoniqueMaximal",
    name = """
        conformité à la norme EN 61000-3-2 au niveau harmonique avec un taux de distorsion harmonique sur le 
        courant inférieur à 25 %
    """.trimIndent(),
    type = FicheCode.ConditionsDelivranceCertificats,
    hasRequirement = listOf(
        TauxDistorsionHarmoniqueMaximal,
        TauxDistorsionHarmoniqueCalculSelonNorme
    )
)

object TauxDistorsionHarmoniqueMaximal: Constraint(
    description = "${TauxDistorsionHarmonique.identifier} < 25%",
    identifier = "tauxDistorsionHarmoniqueMaximal",
    name = "taux de distorsion harmonique sur le courant inférieur à 25 %",
    type = FicheCode.ConditionsDelivranceCertificats,
    hasConcept = listOf(
        TauxDistorsionHarmonique
    )
)

object TauxDistorsionHarmoniqueCalculSelonNorme: Constraint(
    description = "${TauxDistorsionHarmoniqueNormeCalcul.identifier} == EN 61000-3-2",
    identifier = "tauxDistorsionHarmoniqueNorme",
    name = "le taux de distorsion harmonique sur le courant est déterminé conformément à la norme EN 61000-3-2.",
    type = FicheCode.ConditionsDelivranceCertificats,
    hasConcept = listOf(
        TauxDistorsionHarmoniqueNormeCalcul
    )
)

object EtudeDimensionnementEclairagePrealableInfo: InformationRequirement(
    description = "",
    identifier = "etudeDimensionnementEclairagePrealableInfo",
    name = """
        La mise en place des luminaires à modules LED fait l’objet d’une étude préalable de dimensionnement de 
        l’éclairage effectuée, datée et signée par un professionnel ou un bureau d’étude. Cette étude dresse l’état des lieux 
        des équipements en place avant rénovation, identifie les besoins afin de garantir le bon éclairage des locaux et la 
        maîtrise des consommations d’énergie, indique les caractéristiques, le nombre et l’implantation des nouveaux 
        luminaires et dimensionne les économies d’énergie attendues. 
    """.trimIndent(),
    type = FicheCode.ConditionsDelivranceCertificats,
    hasEvidenceTypeList = listOf(
        EtudeDimensionnementEclairagePrealable
    )
)

object DureeVieConventionnelleConditionnelle: PartialRequirement(
    description = "Durée de vie conventionnelle en fonction du dispositif de gestion de l'éclairage",
    identifier = "dureeVieConventionnelleConditionnelle",
    name = """
        - 13 ans sans dispositif de gestion de l’éclairage ;
        - 14 ans avec un dispositif de gestion de l’éclairage (détection de présence ou variation de lumière) ;
        - 16 ans avec deux dispositifs de gestion de l’éclairage (détection de présence et variation de lumière). 
    """.trimIndent(),
    type = FicheCode.ConditionsDelivranceCertificats,
    hasRequirement = listOf(
        DureeVieConventionnelleSansDispositifGestionEclairage,
        DureeVieConventionnelleAvec1DispositifGestionEclairage,
        DureeVieConventionnelleAvec2DispositifsGestionEclairage
    ),
    minRequirementsToMeet = 1
)

object DureeVieConventionnelleSansDispositifGestionEclairage: Constraint(
    description = "13 ans si aucun dispositif de gestion d'éclairage",
    identifier = "dureeVieConventionnelleSansDispositifGestionEclairage",
    name = "13 ans sans dispositif de gestion de l’éclairage",
    type = FicheCode.ConditionsDelivranceCertificats,
    hasRequirement = listOf(
        AucunDispositifGestionEclairage,
        DatePrecedentsTravaux(yearsCount = 13)
    ),
    hasConcept = listOf(
        DateTravaux
    )
)

object DureeVieConventionnelleAvec1DispositifGestionEclairage: Constraint(
    description = "14 ans avec un dispositif de gestion de l’éclairage (détection de présence ou variation de lumière)",
    identifier = "dureeVieConventionnelleAvec1DispositifGestionEclairage",
    name = "14 ans avec 1 dispositif de gestion de l’éclairage",
    type = FicheCode.ConditionsDelivranceCertificats,
    hasRequirement = listOf(
        UnDispositifGestionEclairage,
        DatePrecedentsTravaux(yearsCount = 14)
    ),
    hasConcept = listOf(
        DateTravaux
    )
)

object DureeVieConventionnelleAvec2DispositifsGestionEclairage: Constraint(
    description = "16 ans avec deux dispositifs de gestion de l’éclairage (détection de présence et variation de lumière)",
    identifier = "dureeVieConventionnelleAvec2DispositifsGestionEclairage",
    name = "16 ans avec 2 dispositifs de gestion de l’éclairage",
    type = FicheCode.ConditionsDelivranceCertificats,
    hasRequirement = listOf(
        DeuxDispositifsGestionEclairage,
        DatePrecedentsTravaux(yearsCount = 16)
    ),
    hasConcept = listOf(
        DateTravaux
    )
)

open class NombreTypesDispositifGestionEclairageConstraint(count: Int, name: String): Constraint(
    description = "${NombreTypesDispositifGestionEclairage.identifier} == $count ",
    identifier = "${count}TypesDispositifGestionEclairage",
    name = name,
    type = FicheCode.DureeVieConventionnelle,
    hasConcept = listOf(
        NombreTypesDispositifGestionEclairage
    )
)

object AucunDispositifGestionEclairage: NombreTypesDispositifGestionEclairageConstraint(
    count = 0,
    name = "Aucun dispositif de gestion d'éclairage"
)

object UnDispositifGestionEclairage: NombreTypesDispositifGestionEclairageConstraint(
    count = 1,
    name = "Détection de présence OU système de détection tenant compte des apports de lumière du jour"
)

object DeuxDispositifsGestionEclairage: NombreTypesDispositifGestionEclairageConstraint(
    count = 2,
    name = "Détection de présence ET système de détection tenant compte des apports de lumière du jour "
)

open class DatePrecedentsTravaux(yearsCount: Int): Constraint(
    description = "now - ${DateTravaux.identifier} >= $yearsCount ans",
    identifier = "${yearsCount}AnsDepuisPrecedentsTravaux",
    name = "$yearsCount ans depuis les précédents travaux",
    type = FicheCode.DureeVieConventionnelle,
    hasConcept = listOf(
        DateTravaux
    )
)
