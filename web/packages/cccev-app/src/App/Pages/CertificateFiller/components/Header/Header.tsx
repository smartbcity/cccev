import { Box, styled, Typography } from '@mui/material'
import { TrustabilityCard } from './TrustabilityCard'
import { useTranslation } from "react-i18next"

const CertificateInformationsBox = styled(Box)({
    display: "flex",
    width: "30%",
    flexDirection: "column",
    justifyContent: "space-between",
    '@media (max-width:1400px)': {
        width: '35%',
        justifyContent: "flex-start",
    }
})

export const Header = () => {
    const {t} = useTranslation()
    return (
        <Box
            sx={{
                display: "flex",
                position: "relative",
                height: "100%",
                boxSizing:"border-box",
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
            <CertificateInformationsBox>
                <Typography textAlign="end">
                    {t("createdOn", {creationDate: "06/10/2021"})}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around"
                    }}
                >
                    <Typography>
                        {t("representative", {name: "Layton"})}
                    </Typography>
                    <Typography>
                        {t("beneficiary", {name: "Mr Bourgeon Thomas"})}
                    </Typography>
                </Box>
            </CertificateInformationsBox>
            <TrustabilityCard />
        </Box>
    )
}
