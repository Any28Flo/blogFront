import { Container , Typography} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Footer = () => {
  return (
    <Container 
      sx={{ 
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gridArea: 'footer',
      }}>
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
            Build with
            <FavoriteIcon/>
          </Typography>

    </Container>
  )
}

export default Footer