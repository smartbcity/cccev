import { Box } from '@mui/material'
import { Filters, FiltersField, useFilters } from "@smartb/g2-forms"
import { useMemo } from 'react'

export const PageFilters = () => {

    const fields = useMemo((): FiltersField[] => [
        {
            key: "ccevApp-filters-field-category",
            name: "category",
            label: "Category",
            type: "select",
            selectProps: {
                options: [{ key: "choice1", label: 'Choice1' }, { key: "choice2", label: 'Choice2' }],
                multiple: true
            }
        }, {
            key: "ccevApp-filters-field-evidence",
            name: "evidence",
            label: "Evidence",
            type: "select",
            selectProps: {
                options: [{ key: "choice1", label: 'Choice1' }, { key: "choice2", label: 'Choice2' }],
                multiple: true
            }
        }, {
            key: "ccevApp-filters-field-search",
            name: "search",
            label: "Search a term",
            type: "textfield",
            textFieldProps:{
                style:{width: "150px"}
            }
        }
    ], [])

    const formState = useFilters({
        fields: fields,
        onSubmit: (values) => { console.log(values) }
    })

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
