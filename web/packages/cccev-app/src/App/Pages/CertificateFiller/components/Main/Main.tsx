import { Box } from "@mui/material"
import { PageFilters } from "./PageFilters"
import { CertificatFillerAccrodion, Category } from "components"
import { useMemo } from "react"
import { LanguageSelector } from "./LanguageSelector"
import { FiltersState } from "store/filters/filters.reducer"

interface MainProps {
    filters: FiltersState
    changeFilters: (filters: FiltersState) => void
}

export const Main = (props: MainProps) => {
    const { filters, changeFilters } = props

    const categories = useMemo((): Category[] => [
        {
            key: "certificatFiller-accordion-1",
            name: "Category 1"
        },{
            key: "certificatFiller-accordion-2",
            name: "Category 2"
        },{
            key: "certificatFiller-accordion-3",
            name: "Category 3"
        },{
            key: "certificatFiller-accordion-4",
            name: "Category 4"
        },{
            key: "certificatFiller-accordion-5",
            name: "Category 5"
        },{
            key: "certificatFiller-accordion-6",
            name: "Category 6"
        }
    ], [])

    return (
        <Box sx={{padding: "10px 20px", paddingTop: "70px", maxWidth: "1500px", margin: "auto"}}>
            <PageFilters filters={filters} changeFilters={changeFilters} />
            <CertificatFillerAccrodion categories={categories} />
            <LanguageSelector />
        </Box>
    )
}
