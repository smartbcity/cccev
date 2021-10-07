import { Title } from './Title'
import { Divider, Skeleton, Stack } from '@mui/material'

export const EvidenceListLoading = () => {
    return (
        <Stack
            sx={{ padding: "0px 10px" }}
            alignItems="center"
            spacing={3}
        >
            <Title />
            <Divider sx={{ borderColor: "#8294A3", borderBottomWidth: "2px" }} style={{ marginTop: "5px" }} flexItem />
            <Skeleton width="100%" height="70px" />
            <Skeleton width="100%" height="70px" />
            <Skeleton width="100%" height="70px" />
        </Stack>
    )
}
