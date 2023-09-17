import { Grid} from '@mui/material';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Wrapper = () => {
  return (
    <Grid
      container
      gridTemplateColumns={'1fr'}
      gap={1}
      gridTemplateRows={'100px 1fr 80px'}
      gridTemplateAreas={`
      header
      main
      footer`}
      maxWidth="xl"
    >
      <NavBar />
      <Outlet />
      <Footer/>
    </Grid>
  )
}

export default Wrapper