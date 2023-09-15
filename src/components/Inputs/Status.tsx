import { useOnlineStatus } from '../../customHooks/useOnlineStatus';
import { Typography} from '@mui/material';

const Status = () => {
  const isOnline = useOnlineStatus();

 // return <h1></h1>;
 return(
    <Typography
    variant="h6"
    noWrap
    component="a"
    href="/"
    sx={{
      mr: 2,
      display: { xs: 'none', md: 'flex' },
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: 'inherit',
      textDecoration: 'none',
    }}
  >
   You are : {isOnline ? '✅ Online' : '❌ Disconnected'}
  </Typography>
 )

}

export default Status