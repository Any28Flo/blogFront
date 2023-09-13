import { Box } from '@mui/material'
import { useAppContext } from '../context';
import ListPosts from '../components/DataDisplay/ListPosts';
import { useAxios } from '../customHooks/useAxios';
import CircularProgress from '@mui/material/CircularProgress';
import { Types } from '../context/blogReducer';
import { useEffect } from 'react';
const Home = () => {

  const { state, dispatch} = useAppContext();
  
  const {data, isLoading} = useAxios('/posts');

  useEffect(()=>{
    dispatch({
           type: Types.SET_POSTS,
           payload: data
    })
  },[data])
  
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
          state.posts.length === 0 ? 'Sin Posts' : <ListPosts data={data}/>
        }
      </Box>

    </Box>
  )
}

export default Home