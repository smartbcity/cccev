import { Box, Paper, Divider, Typography } from '@mui/material'
import { ProgressIndicator } from '@smartb/g2-notifications'
import { WomanCheckingIllustration } from './WomanCheckingIllustration'

export const TrustabilityCard = () => {
    return (
        <Paper
            sx={{
                display: "flex",
                padding: "15px",
                borderRadius: "2px",
                position: "absolute",
                width: "500px",
                height: "130px",
                left: "10%",
                top: "100px"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    width: "100px",
                    flexDirection: "column",
                    marginRight: "15px",
                }}
            >
                <ProgressIndicator value={30} style={{ display: "block" }} />
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    marginLeft: "20px",
                }}
            >
                <Typography >
                    If you want to improve this trustability index
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingLeft: "10px"
                    }}
                >
                    <Typography
                        variant="body2"
                    >
                        fill the fileds below and add evidence to prove their relability
                    </Typography>
                    <WomanCheckingIllustration style={{ width: "120px", marginLeft: "10px" }} />
                </Box>
            </Box>
        </Paper>
    )
}
