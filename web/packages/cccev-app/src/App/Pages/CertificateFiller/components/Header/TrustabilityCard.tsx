import { Box, Paper, Divider, Typography, styled } from '@mui/material'
import { ProgressIndicator } from '@smartb/g2-notifications'
import { WomanCheckingIllustration } from './WomanCheckingIllustration'
import { useTranslation } from "react-i18next"

const TrustabilityPaper = styled(Paper)({
    display: "flex",
    padding: "10px",
    borderRadius: "2px",
    position: "absolute",
    width: "500px",
    height: "100px",
    left: "10%",
    top: "110px",
    '@media (min-width:2000px)': {
        left: "calc(50% - 250px)"
    }
})

export const TrustabilityCard = () => {
    const {t} = useTranslation()
    return (
        <TrustabilityPaper>
            <Box
                sx={{
                    display: "flex",
                    width: "200px",
                    flexDirection: "column",
                    marginRight: "15px",
                }}
            >
                <ProgressIndicator value={30} label={t("percentCompleted", {percent: 30})} style={{ display: "block" }} />
                <Typography sx={{marginTop: "10px"}} variant="subtitle1">
                    {t("trustability")}
                </Typography>
            </Box>
            <Divider sx={{background: "#8294A399", margin:0}} orientation="vertical" variant="middle" flexItem />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    marginLeft: "20px",
                }}
            >
                <Typography sx={{fontSize: "15px"}} >
                    {t("certificateFillerPage.improveTrustability")}
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
                        {t("certificateFillerPage.fillTheFields")}
                    </Typography>
                    <WomanCheckingIllustration style={{ width: "120px", margin: "0px 10px" }} />
                </Box>
            </Box>
        </TrustabilityPaper>
    )
}
