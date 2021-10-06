import { Divider, Stack, Typography } from '@mui/material'
import { Button } from '@smartb/g2-components'
import { DropFileIcon } from './DropFileIcon'
import { Title } from './Title'
import { Evidence, EvidenceTypeList, EvidenceType } from 'components'
import { useCallback } from 'react'
import { useTranslation } from "react-i18next"

interface EvidenceListProps {
    changeEvidence: (evidence?: string) => void
    addEvidenceType: (evidenceTypeId?: string | undefined) => void
    evidences: EvidenceTypeList[]
}

export const EvidenceList = (props: EvidenceListProps) => {
    const {changeEvidence, addEvidenceType, evidences} = props

    const {t} = useTranslation()


    const onAddEvidence = useCallback(
        () => {
            addEvidenceType()
        },
        [addEvidenceType],
    )

    const onUploadEvidence = useCallback(
        (evidenceTypeId: string) => {
            addEvidenceType(evidenceTypeId)
        },
        [addEvidenceType],
    )

    return (
        <>
            <Stack
                sx={{ position: "relative", padding: "0px 10px" }}
                alignItems="center"
                spacing={3}
            >
                <Title />
                    <Divider sx={{ borderColor: "#8294A3", borderBottomWidth: "2px" }} style={{marginTop: "5px"}} flexItem />
                    <EvidenceType onView={() => changeEvidence("evidenceExample")} onUpload={onUploadEvidence} evidences={evidences} />
                <Evidence onView={() => changeEvidence("evidenceExample")} label="Etude préalable du dimensionnement de l’éclairage.pdf" />
                <Button onClick={onAddEvidence} style={{width: "180px", zIndex: 1}}>{t("addAnEvidence")}</Button>
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
