import { Box } from '@mui/material'
import { EvidenceBar } from './components/EvidenceBar'
import { Header } from './components/Header'

export const CertificateFiller = () => {
    return (
        <>
            <Box
                sx={{
                    display: "inline-flex",
                    width: "calc(100vw - 500px)",
                    justifyContent: "center",
                    height: "150px"
                }}
            >
                <Box 
                    sx={{
                        position: "absolute",
                        top: "170px",
                        width: "calc(100vw - 500px)",
                        background: "#8294A3",
                        height: "2px"
                    }}
                />
                <Box
                    sx={{
                        maxWidth: "1500px",
                        width: "100%",
                        height: "100%"
                    }}
                >
                    <Header />
                </Box>
            </Box>
            <EvidenceBar />
        </>
    )
}
