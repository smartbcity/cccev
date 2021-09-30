import { Title } from './Title'
import { Box, Divider, Stack } from '@mui/material'

export const EvidenceBar = () => {
    return (
        <Box
        sx={{
            position: "fixed",
            height: "100vh",
            width:"500px",
            boxSizing: "border-box",
            padding: "20px 15px",
            top: 0,
            right: 0,
            background: "#F5F5F5"
        }}
        >
            <Stack
                divider={<Divider sx={{borderColor: "#8294A3", borderBottomWidth: "2px"}} flexItem />}
                spacing={1}
            >
                <Title />
                <Box></Box>
            </Stack>

        </Box>
    )
}
