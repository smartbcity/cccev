import { ArrowBackRounded } from '@mui/icons-material'
import { Box, IconButton, styled } from '@mui/material'
import { PdfDisplayer } from 'components'
import { useCallback } from 'react'
import { EvidenceList } from './EvidenceList'

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
        left:"10px",
        color: "black",
        zIndex:1
    }
})

interface EvidenceBarProps {
    currentEvidence?: string
    changeEvidence: (evidence?: string) => void
}

export const EvidenceBar = (props: EvidenceBarProps) => {
    const {currentEvidence, changeEvidence} = props

    const removeCurrentEvidence = useCallback(
        () => changeEvidence(),
        [changeEvidence],
    )
    
    if (!currentEvidence) {
        return (
            <EvidenceBarContainer>
                <EvidenceList changeEvidence={changeEvidence} />
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
