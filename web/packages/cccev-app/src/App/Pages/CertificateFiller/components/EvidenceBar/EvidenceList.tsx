import { Divider, Stack, Typography } from '@mui/material'
import { Button } from '@smartb/g2-components'
import { DropFileIcon } from './DropFileIcon'
import { Title } from './Title'
import { Evidence, EvidenceTypeList, EvidenceType } from 'components'
import { useMemo } from 'react'
import { useTranslation } from "react-i18next"

interface EvidenceListProps {
    changeEvidence: (evidence?: string) => void
}

export const EvidenceList = (props: EvidenceListProps) => {
    const {changeEvidence} = props

    const {t} = useTranslation()

    const evidences = useMemo(():EvidenceTypeList[] => [
        {
            id: "EvidenceTypeList-1",
            name: "Justificatifs des critères techniques",
            specifiesEvidenceType: [{
                id: "evidence-1",
                isAdded: false,
                label: "Document du détail de l’équipement ajouté"
            }]
        },
        {
            id: "EvidenceTypeList-2",
            name: "Justificatifs des critères techniques",
            specifiesEvidenceType: [{
                id: "evidence-2",
                isAdded: false,
                label: "Fiche technique des luminaires venant du constructeur"
            },{
                id: "evidence-3",
                isAdded: true,
                label: "Référence équipement.pdf"
            }]
        }
    ], [])

    return (
        <>
            <Stack
                sx={{ position: "relative", padding: "0px 10px" }}
                alignItems="center"
                spacing={3}
            >
                <Title />
                    <Divider sx={{ borderColor: "#8294A3", borderBottomWidth: "2px" }} style={{marginTop: "5px"}} flexItem />
                    <EvidenceType onView={() => changeEvidence("evidenceExample")} evidences={evidences} />
                <Evidence onView={() => changeEvidence("evidenceExample")} label="Etude préalable du dimensionnement de l’éclairage.pdf" />
                <Button style={{width: "180px"}}>{t("addAnEvidence")}</Button>
            </Stack>
            <Stack
                direction="row"
                spacing={3}
                justifyContent="center"
                alignItems="center"
                sx={{
                    position: "absolute",
                    bottom: "50px",
                    width: "100%"
                }}
            >
                <DropFileIcon style={{ width: "80px" }} />
                <Typography variant="body2" color="#787878">
                    {t("canDropFile")}
                    </Typography>
            </Stack>
        </>
    )
}
