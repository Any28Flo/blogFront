import { Stack, Box, CircularProgress } from '@mui/material'

const Spinner = () => {
    return (
        <Box width="100%" sx={{ gridArea: 'main', padding: '2rem' }}>
            <Stack

                direction={{ xs: 'column', sm: 'row' }}
                justifyContent="center"
                alignItems="center"
            >
                <CircularProgress />
            </Stack>
        </Box>)
}

export default Spinner