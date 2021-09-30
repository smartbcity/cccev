import { ExpandMoreRounded } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import { useMemo, useState } from 'react'

export type Category = {
    key: string
    name: string
}

interface CertificatFillerAccrodionProps {
    categories: Category[]
}

export const CertificatFillerAccrodion = (props: CertificatFillerAccrodionProps) => {
    const { categories } = props

    const [currentPan, setcurrentPan] = useState<string | undefined>(categories[0].key ?? undefined)

    const accordions = useMemo(() => categories.map((category) => (
        <Accordion key={category.key} expanded={currentPan === category.key} onChange={() => setcurrentPan(category.key)}>
            <AccordionSummary
                expandIcon={<ExpandMoreRounded />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography sx={{marginLeft: "20px", lineHeight: 1}} variant="h6" textAlign="center" >{category.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box
                    sx={{
                        width: "100%",
                        height: "300px"
                    }}
                />
            </AccordionDetails>
        </Accordion>
    )), [categories, currentPan])

    return (
        <Box sx={{padding: "10px"}}>
            {accordions}
        </Box>
    )
}
