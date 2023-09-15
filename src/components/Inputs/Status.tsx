import { useEffect } from 'react';
import { useOnlineStatus } from '../../customHooks/useOnlineStatus';
import { Typography} from '@mui/material';
import { Types } from '../../context/isOnlineReducer';
import { useAppContext } from '../../context';

const Status = () => {
  const { dispatch } = useAppContext();

  const isOnline = useOnlineStatus();
  
  useEffect(()=>{
    dispatch({
      type: Types.SET_IS_ONLINE,
      payload: isOnline
    })
  }, [isOnline])

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