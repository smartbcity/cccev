import { ErrorOutline, Upload } from '@mui/icons-material'
import { Paper, Stack, styled, Typography } from '@mui/material'
import { Tooltip } from '@smartb/g2-notifications'
import { useTheme } from '@smartb/g2-themes'
import { DeleteIcon, PdfIcon, ViewFileIcon } from '../../icons'

const EvidencePaper = styled(Paper)(({ theme }) => ({
    padding: "5px 10px",
    width: "100%",
    borderRadius: "5px",
    boxSizing: "border-box",
    cursor: "pointer",
    margin: "0 5px",
    "& .evidence-iconActions": {
        color: "#353945",
        fill: "#353945",
        stroke: "#353945"
    },
    "& .evidence-iconActions:hover": {
        color: theme.palette.primary.main,
        fill: theme.palette.primary.main,
        stroke: theme.palette.primary.main
    },
    "&.evidence-needed": {
        background: "#E6E9EF"
    },
    "& .evidence-pdficon": {
        width: "21px"
    },
    "&.evidence-needed .evidence-label": {
        color: "#676879"
    },
    "& .evidence-label": {
        flexGrow: 1
    },
    "& .evidence-viewFileIcon": {
        width: "24px",
        height: "24px"
    },
    "& .evidence-deleteIcon": {
        width: "22px",
        height: "22px"
    }
}))

interface EvidenceProps {
    variant?: "needed" | "added"
    label: string
    onUpload?: () => void
    onView?: () => void
    onDelete?: () => void
}

export const Evidence = (props: EvidenceProps) => {
    const { variant, label } = props
    const theme = useTheme()
    if (variant === "needed") {
        return (
            <Tooltip helperText="You haven’t added this evidence yet. Click on it to add it">
                <EvidencePaper className="evidence-needed">
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                    >
                        <PdfIcon className="evidence-pdficon" />
                        <Typography className="evidence-label" variant="body2">
                            {label}
                        </Typography>
                        <ErrorOutline sx={{ color: theme.colors.error }} className="evidence-errorIcon" />
                        <Upload className="evidence-iconActions" />
                    </Stack>
                </EvidencePaper>
            </Tooltip>
        )
    }
    return (
        <EvidencePaper>
            <Stack
                direction="row"
                alignItems="center"
                spacing={1}
            >
                <PdfIcon className="evidence-pdficon" />
                <Typography className="evidence-label" variant="body2">
                    {label}
                </Typography>
                <Tooltip helperText="View this evidence">
                    <ViewFileIcon style={{stroke: "none"}} className="evidence-iconActions evidence-viewFileIcon" />
                </Tooltip>
                <Tooltip helperText="Delete this evidence">
                    <DeleteIcon style={{fill: "none"}} className="evidence-iconActions evidence-deleteIcon" />
                </Tooltip>
            </Stack>
        </EvidencePaper>
    )
}
