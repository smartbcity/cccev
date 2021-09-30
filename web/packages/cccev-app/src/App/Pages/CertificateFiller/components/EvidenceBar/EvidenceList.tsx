import { Box, Divider, Stack } from '@mui/material'
import { Title } from './Title'

export const EvidenceList = () => {
    return (
        <>
            <Stack
                divider={<Divider sx={{ borderColor: "#8294A3", borderBottomWidth: "2px" }} flexItem />}
                spacing={1}
            >
                <Title />
                <Box></Box>
            </Stack>
        </>
    )
}
