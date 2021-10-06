import { Box } from "@mui/material"
import { PageFilters } from "./PageFilters"
import { CertificatFillerAccrodion, Category, CcevFormField } from "components"
import { useCallback, useMemo } from "react"
import { LanguageSelector } from "./LanguageSelector"
import { FiltersState } from "store/filters/filters.reducer"
import { objToArray } from "utils"
import { FormPartialField, useFormWithPartialFields } from "@smartb/g2-forms"
import { Button } from "@smartb/g2-components"
import { useTranslation } from "react-i18next"

interface InformationConcept {
    id: string
    name: string
    category: {
        id: string
        name: string
    }
    unit: {
        type: "string" | "date" | "number" | "boolean"
        notation?: string
    }
    value?: any
    hasEvidence: boolean
}

const fictivInformationConcepts: InformationConcept[] = [{
    id: "field-batimentIdustriel",
    name: 'Le batiment d’installation est de type "industriel"',
    category: {
        id: "afirmation-category",
        name: "Affirmation"
    },
    unit: {
        type: "boolean"
    },
    value: false,
    hasEvidence: true
},
{
    id: "field-pasDetectionMouvement",
    name: 'L’installation n’est pas utilisé pour un dispositif de détection de mouvement',
    category: {
        id: "afirmation-category",
        name: "Affirmation à confirmer"
    },
    unit: {
        type: "boolean"
    },
    value: false,
    hasEvidence: true
},
{
    id: "field-dureDeVie",
    name: 'Durée de vie calculée à 25°C avec une chute du flux lumineux inferieure à 20%',
    category: {
        id: "value-category",
        name: "Valeur à renseigner"
    },
    unit: {
        type: "number",
        notation: "heures"
    },
    hasEvidence: false
},
{
    id: "field-efficacitéLumineuse",
    name: 'Efiicacité lumineuse',
    category: {
        id: "value-category",
        name: "Valeur à renseigner"
    },
    unit: {
        type: "number",
        notation: "lm/W"
    },
    hasEvidence: true
},
{
    id: "field-distorsionHarmonique",
    name: 'Taux de distorsion harmonique',
    category: {
        id: "value-category",
        name: "Valeur à renseigner"
    },
    unit: {
        type: "number",
        notation: "%"
    },
    hasEvidence: true
}]


interface MainProps {
    filters: FiltersState
    changeFilters: (filters: FiltersState) => void
}

export const Main = (props: MainProps) => {
    const { filters, changeFilters } = props

    const {t} = useTranslation()

    const partialFields = useMemo(() => fictivInformationConcepts.map((info): FormPartialField => ({    
        name: info.id,
        defaultValue: info.value
    })), [])

    const onSubmit = useCallback(
        (values: any) => {
            console.log(values)
        },
        [],
    )

    const globalFormState = useFormWithPartialFields({
        partialfFields: partialFields,
        onSubmit: onSubmit
    })

    const categories = useMemo(() => informationConceptsToCategories(fictivInformationConcepts), [])

    return (
        <Box sx={{ padding: "10px 20px", paddingTop: "70px", maxWidth: "1500px", margin: "auto" }}>
            <PageFilters filters={filters} changeFilters={changeFilters} />
            <CertificatFillerAccrodion globalFormState={globalFormState} categories={categories} />
            <LanguageSelector />
            <Box sx={{display: "flex", justifyContent: "center", paddingBottom: "30px"}}>
                <Button onClick={globalFormState.submitForm} style={{width: "150px", fontSize: "17px"}}>{t("validate")}</Button>
            </Box>
        </Box>
    )
}

const informationConceptsToCategories = (informationConcepts: InformationConcept[]): Category[] => {
    const objCategories: { [key: string]: Category } = {}
    informationConcepts.forEach((el) => {
        const newField: CcevFormField = {
            key: el.id,
            name: el.id,
            label: el.name,
            type: enumTypeToEnumFields(el.unit.type),
            textFieldProps: {
                textFieldType: el.unit.type === "number" ? "number" : "text",
            },
            hasEvidence: el.hasEvidence,
            fieldUnit: el.unit.notation
        }
        const fields = objCategories[el.category.id]?.fields ? [...objCategories[el.category.id].fields, newField] : [newField]
        objCategories[el.category.id] = {
            key: el.category.id,
            name: el.category.name,
            fields: fields
        }
    })
    return objToArray(objCategories)
}

const enumTypeToEnumFields = (type: "string" | "date" | "number" | "boolean"): "textfield" | "select" | "datepicker" | "radioChoices" | "checkbox" => {
    switch (type) {
        case "string":
            return "textfield"
        case "date":
            return "datepicker"
        case "number":
            return "textfield"
        case "boolean":
            return "checkbox"
        default:
            return "textfield"
    }
}
