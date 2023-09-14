import { Box } from '@mui/material'
import { useAppContext } from '../context';

import { useAxios } from '../customHooks/useAxios';
import CircularProgress from '@mui/material/CircularProgress';
import { Types } from '../context/blogReducer';
import { useEffect } from 'react';
import { Stack } from '@mui/material';
import ListPosts from '../components/DataDisplay/ListPosts';
import Filter from '../components/Inputs/Filter';
const Home = () => {

  const { state, dispatch } = useAppContext();

  const { data, isLoading } = useAxios('/posts');

  useEffect(() => {
    dispatch({
      type: Types.SET_POSTS,
      payload: data
    })
  }, [data])

  return (
    <Box sx={{ gridArea: 'main', bgcolor: 'secondary.main' , padding:'5rem'}}>

      <Box>
        <h2>Blog post</h2>
      </Box>
      <Box>
        <Filter/>
      </Box>
      <Stack
        sx={{ gridArea: 'main', bgcolor: 'secondary.main' }}
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {
          isLoading && (<CircularProgress />)
        }
        {
          state.posts.length === 0 ? 'Sin Posts' : <ListPosts data={data} />
        }
      </Stack>
    </Box>
  )
}

export default Home