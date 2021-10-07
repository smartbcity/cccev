import { Box } from '@mui/material'
import { Filters, FiltersField, useFilters, Option } from "@smartb/g2-forms"
import { EvidenceTypeDTO } from 'datahub'
import { useEffect, useMemo } from 'react'
import { useTranslation } from "react-i18next"
import { FiltersState } from 'store/filters/filters.reducer'

interface PageFiltersProps {
    filters: FiltersState
    changeFilters: (filters: FiltersState) => void
    evidenceTypeMap?: Map<string, EvidenceTypeDTO>
}


export const PageFilters = (props: PageFiltersProps) => {
    const { filters, changeFilters, evidenceTypeMap } = props
    const { t } = useTranslation()

    const fields = useMemo((): FiltersField[] => [
        {
            key: "ccevApp-filters-field-category",
            name: "category",
            label: t("category"),
            type: "select",
            defaultValue: filters.category,
            selectProps: {
                options: [{ key: "choice1", label: 'Choice1' }, { key: "choice2", label: 'Choice2' }],
                multiple: true
            }
        }, {
            key: "ccevApp-filters-field-evidence",
            name: "evidence",
            label: t("evidence"),
            type: "select",
            defaultValue: filters.evidence,
            selectProps: {
                options: getEvidencesOptions(evidenceTypeMap)
            }
        }, {
            key: "ccevApp-filters-field-search",
            name: "search",
            label: t("searchATerm"),
            type: "textfield",
            defaultValue: filters.search,
            textFieldProps: {
                style: { width: "180px" }
            }
        }
    ], [t, evidenceTypeMap])

    const formState = useFilters({
        fields: fields,
        onSubmit: (values: FiltersState) => { changeFilters(values) }
    })

    useEffect(() => {
        if (formState.values.evidence !== filters.evidence) {
            formState.setFieldValue("evidence", filters.evidence)
        }
    }, [filters.evidence])

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-end"
            }}
        >
            <Filters actions={[]} fields={fields} formState={formState} />
        </Box>
    )
}

const getEvidencesOptions = (evidenceTypeMap?: Map<string, EvidenceTypeDTO>): Option[] => {
    const options: Option[] = []
    if (!evidenceTypeMap) return options
    evidenceTypeMap.forEach((evidenceType) => {
        if (!!evidenceType.evidence) {
            options.push({
                key: evidenceType.identifier,
                label: evidenceType.name
            })
        }
    })
    return options
}
