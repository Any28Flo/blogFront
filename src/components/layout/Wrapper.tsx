import { Box, Container, Grid} from '@mui/material';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const Wrapper = () => {
  return (
    <Grid
      container
      gridTemplateColumns={'1fr'}
      gap={1}
      gridTemplateRows={'100px 1fr 80px'}
      gridTemplateAreas={`header
      main
      footer`}
      maxWidth="lg"
    >
      <NavBar />
      <Outlet />
    </Grid>
  )
}

export default Wrapper