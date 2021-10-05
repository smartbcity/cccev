import { Box, Divider, Stack, Typography } from "@mui/material"
import { Fragment, useMemo } from "react"
import { Evidence } from "./Evidence"
import { useTranslation } from "react-i18next"


interface EvidenceType {
    id: string
    label: string
    isAdded: boolean
}

export interface EvidenceTypeList {
    id: string
    name: string
    specifiesEvidenceType: EvidenceType[]
}

export interface EvidenceTypeProps {
    evidences: EvidenceTypeList[]
    onUpload?: (evidenceId: string) => void
    onView?: (evidenceId: string) => void
    onDelete?: (evidenceId: string) => void
}

export const EvidenceType = (props: EvidenceTypeProps) => {
    const { evidences, onDelete, onUpload, onView } = props

    const {t} = useTranslation()

    const evidencesDisplay = useMemo(() => evidences.map((evidenceTypeList, firstIndex) => (
        <Fragment key={evidenceTypeList.id}>
            {evidenceTypeList.specifiesEvidenceType.map((evidence, secondIndex) => {
                let divider: JSX.Element = <Divider sx={{ borderBottom: "2px solid black", width: "20px" }} />
                if (firstIndex === 0 && secondIndex === 0) {
                    divider = (
                        <Stack
                            sx={{
                                height: "100%"
                            }}
                            alignItems="center"
                        >
                            <Box sx={{ height: "50%", background: "#F5F5F5", marginLeft: "-20px", width: "20px" }} />
                            <Divider sx={{ borderTop: "2px solid black", borderBottom: "none", width: "20px", height: "50%" }} flexItem />
                        </Stack>
                    )
                }
                if (firstIndex + 1 === evidences.length && secondIndex + 1 === evidenceTypeList.specifiesEvidenceType.length) {
                    divider = (
                        <Stack
                            sx={{
                                height: "100%"
                            }}
                            alignItems="center"
                        >
                            <Divider sx={{ borderBottom: "2px solid black", width: "20px", height: "50%" }} flexItem />
                            <Box sx={{ height: "50%", background: "#F5F5F5", marginLeft: "-20px", width: "20px" }} />
                        </Stack>
                    )
                }
                return (
                    <Stack alignItems="center" key={evidence.id} direction="row">
                        {divider}
                        <Evidence 
                            label={evidence.label} 
                            variant={evidence.isAdded ? "added" : "needed"} 
                            onDelete={() => onDelete && onDelete(evidence.id)}
                            onUpload={() => onUpload && onUpload(evidence.id)}
                            onView={() => onView && onView(evidence.id)}
                        />
                    </Stack>
                )
            }
            )}
            {firstIndex + 1 < evidences.length && (
                <Box
                    key={`${evidenceTypeList.id}-or`}
                    sx={{
                        width: "100%",
                        padding: "2px 10px",
                        background: "#F5F5F5"
                    }}
                    style={{ marginLeft: "-20px", marginTop: "6px", marginBottom: "-10px" }}
                >
                    <Typography variant="subtitle2">
                        {t("or")}
                    </Typography>
                </Box>
            )}
        </Fragment>
    )), [evidences, onDelete, onUpload, onView])

    return (
        <Box>
            <Typography sx={{marginLeft: "35px"}} variant="subtitle1">
                {evidences[0].name}
            </Typography>
            <Stack
                direction="row"
            >
                <Divider orientation="vertical" sx={{ borderRight: "2px solid black" }} flexItem />
                <Stack
                    spacing={2}
                >
                    {evidencesDisplay}
                </Stack>
            </Stack>
        </Box>
    )
}
