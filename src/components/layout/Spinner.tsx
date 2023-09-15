import { Box , CircularProgress} from '@mui/material'

const Spinner = () => {
    return (
        <Box sx={{ gridArea: 'main', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress /></Box>)
}

export default Spinner