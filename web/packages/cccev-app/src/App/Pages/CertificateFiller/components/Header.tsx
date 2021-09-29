import { Box, Typography } from '@mui/material'
import { TrustabilityCard } from './TrustabilityCard'

export const Header = () => {
    return (
        <Box
            sx={{
                display: "flex",
                position: "relative",
                height: "100%",
                padding: "10px 15px",
                justifyContent: "space-between"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    width: "60%",
                    flexDirection: "column",
                }}
            >
                <Typography
                    variant="h4"
                >
                    Certificat pour des luminaires à module led
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: "#878787"
                    }}
                >
                    #4452
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    width: "30%",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}
            >
                <Typography textAlign="end">
                    Created on 06/10/2021
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around"
                    }}
                >
                    <Typography>
                        Representative Layton
                    </Typography>
                    <Typography>
                        Beneficiary Mr Bourgeon Thomas
                    </Typography>
                </Box>
            </Box>
            <TrustabilityCard />
        </Box>
    )
}
