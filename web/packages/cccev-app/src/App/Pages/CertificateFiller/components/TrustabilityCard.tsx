import { Box, Paper, Divider } from '@mui/material'
import { ProgressIndicator } from '@smartb/g2-notifications'

export const TrustabilityCard = () => {
    return (
        <Paper
            sx={{
                display: "flex",
                padding: "15px",
                borderRadius: "2px",
                position: "absolute",
                width: "550px",
                height: "150px",
                left: "10%",
                top: "90px"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column"
                }}
            >
                <ProgressIndicator />
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box
                sx={{
                    display: "flex"
                }}
            >

            </Box>
        </Paper>
    )
}
