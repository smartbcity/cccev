import { Box } from '@mui/material'
import { EvidenceBar } from './components/EvidenceBar'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

export const CertificateFiller = () => {
    return (
        <>
            <Box
                sx={{
                    display: "block",
                    width: "calc(100vw - 500px)",
                    justifyContent: "center",
                    minWidth: "650px"
                }}
            >
                <Box 
                    sx={{
                        position: "absolute",
                        top: "170px",
                        width: "calc(100vw - 500px)",
                        minWidth: "650px",
                        background: "#8294A3",
                        height: "2px"
                    }}
                />
                <Box
                    sx={{
                        maxWidth: "1500px",
                        width: "100%",
                        height: "170px"
                    }}
                >
                    <Header />
                </Box>
                <Main />
            </Box>
            <EvidenceBar />
        </>
    )
}