import { ArrowBackRounded } from '@mui/icons-material'
import { Box, IconButton, styled } from '@mui/material'
import { EvidenceTypeList, PdfDisplayer } from 'components'
import { useCallback } from 'react'
import { Dropzone } from './Dropzone'
import { EvidenceList } from './EvidenceList'

const evidences: EvidenceTypeList[] = [
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
        }, {
            id: "evidence-3",
            isAdded: true,
            label: "Référence équipement.pdf"
        }]
    }
]

const EvidenceBarContainer = styled(Box)({
    position: "fixed",
    height: "100vh",
    width: "500px",
    boxSizing: "border-box",
    padding: "20px 15px",
    top: 0,
    right: 0,
    background: "#F5F5F5",
    "& .evidenceBar-backArrow": {
        width: 35,
        height: 35,
    },
    "& .evidenceBar-backButton": {
        position: "absolute",
        top: "10px",
        left: "10px",
        color: "black",
        zIndex: 1
    }
})

interface EvidenceBarProps {
    currentEvidence?: string
    changeEvidence: (evidence?: string) => void
    evidenceTypeAdded?: string
    setEvidenceTypeAdded: (evidenceTypeId?: string | undefined) => void
    addEvidenceType: (evidenceTypeId?: string | undefined) => void
}

export const EvidenceBar = (props: EvidenceBarProps) => {
    const { currentEvidence, changeEvidence, addEvidenceType, setEvidenceTypeAdded, evidenceTypeAdded } = props

    const removeCurrentEvidence = useCallback(
        () => changeEvidence(),
        [changeEvidence],
    )

    if (!currentEvidence) {
        return (
            <EvidenceBarContainer>
                <EvidenceList evidences={evidences} addEvidenceType={addEvidenceType} changeEvidence={changeEvidence} />
                <Dropzone evidences={evidences} setEvidenceTypeAdded={setEvidenceTypeAdded} evidenceTypeAdded={evidenceTypeAdded} />
            </EvidenceBarContainer>
        )
    }
    return (
        <EvidenceBarContainer>
            <IconButton size="small" className="evidenceBar-backButton" onClick={removeCurrentEvidence} >
                <ArrowBackRounded className="evidenceBar-backArrow" />
            </IconButton>
            <PdfDisplayer />
        </EvidenceBarContainer>
    )
}
