import { Box } from '@mui/system';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const Wrapper = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'grid',
        gridTemplateColumns: '(1fr)',
        gap: 1,
        gridTemplateRows: '100px 1fr 80px',
        gridTemplateAreas: `"header "
      "main "
      "footer "`,
      }}
    >
      <NavBar />
      <Outlet />
    </Box>
  )
}

export default Wrapper