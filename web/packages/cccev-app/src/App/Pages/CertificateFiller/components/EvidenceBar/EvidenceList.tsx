import { Divider, Stack, Typography } from '@mui/material'
import { DropFileIcon } from './DropFileIcon'
import { Title } from './Title'
import { Evidence } from 'components'

export const EvidenceList = () => {
    return (
        <>
            <Stack
                sx={{ position: "relative", padding: "0px 10px" }}
                spacing={1}
            >
                <Title />
                    <Divider sx={{ borderColor: "#8294A3", borderBottomWidth: "2px" }} flexItem />
                <Evidence variant="needed" label="Etude préalable du dimensionnement de l’éclairage.pdf" />
            </Stack>
            <Stack
                direction="row"
                spacing={3}
                justifyContent="center"
                alignItems="center"
                sx={{
                    position: "absolute",
                    bottom: "50px",
                    width: "100%"
                }}
            >
                <DropFileIcon style={{ width: "80px" }} />
                <Typography variant="body2" color="#787878">
                    You can drop file here
                    </Typography>
            </Stack>
        </>
    )
}
