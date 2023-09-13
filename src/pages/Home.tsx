import { Box } from '@mui/material'
import { useAppContext } from '../context';
import ListPosts from '../components/DataDisplay/ListPosts';
import { useAxios } from '../customHooks/useAxios';
import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {

  const { state } = useAppContext();
  const {data, isLoading, error} = useAxios('/posts');
  console.log(data)

  return (
    <Box sx={{ gridArea: 'main', bgcolor: 'secondary.main' }}>
      <Box>
        <h2>Blog post</h2>
      </Box>
      <Box>
        {
          isLoading && (<CircularProgress />)
        }
        {
          state.posts ? 'Sin Posts' : <ListPosts data={state.posts}/>

        }
      </Box>

    </Box>
  )
}

export default Home