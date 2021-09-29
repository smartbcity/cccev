import { Box, CircularProgress } from '@mui/material'

export const LoadingComponent = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
            }}
        >
            <CircularProgress disableShrink />
        </Box>
    )
}