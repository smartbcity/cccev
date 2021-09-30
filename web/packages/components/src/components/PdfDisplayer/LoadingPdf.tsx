import { Paper, Skeleton, Stack, Typography } from '@mui/material'

export const LoadingPdf = () => {
    return (
        <Paper elevation={0} sx={{ borderRadius: "0px", width: "460px", height: "649px", margin: "20px 0", boxSizing: "border-box" }}>
            <Stack spacing={8} alignItems="center">
                <Typography component="div" variant="h3" width="50%">
                    <Skeleton animation="wave" />
                </Typography>
                <Stack direction="row" spacing={2} width="90%">
                    <Skeleton animation="wave" variant="rectangular" width={200} height={150} />
                    <Stack flexGrow={1}>
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" width="30%" />
                    </Stack>
                </Stack>
                <Stack spacing={3} width="90%">
                    <Stack width="100%">
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                    </Stack>
                    <Stack width="100%">
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" width="30%" />
                    </Stack>
                </Stack>
            </Stack>
        </Paper>
    )
}
