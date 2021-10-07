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
import { useAsyncResponse } from "utils"
import { EvidenceTypeDTO, getInformationConcepts, InformationConceptDTO } from "datahub"
import { MainLoading } from "./MainLoading"

interface MainProps {
    filters: FiltersState
    changeFilters: (filters: FiltersState) => void
    evidenceTypeMapped?: Map<string, EvidenceTypeDTO>
}

export const Main = (props: MainProps) => {
    const { filters, changeFilters, evidenceTypeMapped } = props

    const { t } = useTranslation()

    const informationConcepts = useAsyncResponse(getInformationConcepts)

    const partialFields = useMemo(() => informationConcepts.result ?
        informationConcepts.result.informationConcepts.map((info): FormPartialField => ({
            name: info.identifier,
            defaultValue: info.unit.type === "boolean" ? false : undefined
        }))
        :
        [], [informationConcepts.result])

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

    const categories = useMemo(() => informationConcepts.result && evidenceTypeMapped ? informationConceptsToCategories(informationConcepts.result.informationConcepts, evidenceTypeMapped) : [], [informationConcepts.result, evidenceTypeMapped])

    if (informationConcepts.status !== "SUCCESS" || informationConcepts.result === undefined) return (
        <MainLoading />
    )
    return (
        <Box sx={{ padding: "10px 20px", paddingTop: "70px", maxWidth: "1500px", margin: "auto" }}>
            <PageFilters evidenceTypeMapped={evidenceTypeMapped} filters={filters} changeFilters={changeFilters} />
            <CertificatFillerAccrodion globalFormState={globalFormState} categories={categories} />
            <LanguageSelector />
            <Box sx={{ display: "flex", justifyContent: "center", paddingBottom: "30px" }}>
                <Button onClick={globalFormState.submitForm} style={{ width: "150px", fontSize: "17px" }}>{t("validate")}</Button>
            </Box>
        </Box>
    )
}

const informationConceptsToCategories = (informationConcepts: InformationConceptDTO[], evidenceTypeMapped: Map<string, EvidenceTypeDTO>): Category[] => {
    const objCategories: { [key: string]: Category } = {}
    //@ts-ignore
    informationConcepts.forEach((el: (InformationConceptDTO & { category: { id: string, name: string } })) => {
        el.category = {id: "value-category", name: "Valeur à renseigner"}
        const newField: CcevFormField = {
            key: el.identifier,
            name: el.identifier,
            label: el.name,
            type: enumTypeToEnumFields(el.unit.type),
            textFieldProps: {
                textFieldType: el.unit.type === "number" ? "number" : "text",
            },
            hasEvidence: !!evidenceTypeMapped.get(el.identifier)?.evidence,
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
