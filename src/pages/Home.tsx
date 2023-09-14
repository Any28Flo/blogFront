import { Box } from '@mui/material'
import { useAppContext } from '../context';

import { useAxios } from '../customHooks/useAxios';
import CircularProgress from '@mui/material/CircularProgress';
import { Types } from '../context/blogReducer';
import { useEffect, useState} from 'react';
import { Stack } from '@mui/material';
import ListPosts from '../components/DataDisplay/ListPosts';
import Filter from '../components/Inputs/Filter';
import { getPosts } from '../db/api';
const filterForm ={
  type: 'title',
  stringPattern: ''
}
const Home = () => {

  const { state, dispatch , } = useAppContext();

  const { data, isLoading,error } = useAxios('/posts');

  const [filter, setFilter] = useState(filterForm);

  const [query, setQuery] = useState('');

  const [postsFiltered, setPostsFiltered] = useState([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query= `/posts/custom-posts?filter=${filter.type}&strPattern=${filter.stringPattern}`
    setQuery(query);
  } 
  const getData = async () => {
    try {
        const data = await getPosts(query)
        setPostsFiltered(data.posts)

    } catch (error) {
        console.log(error)
    }
}
  useEffect(() => {
    dispatch({
      type: Types.SET_POSTS,
      payload: data
    })
  }, [data])

  useEffect(() => {
    if(query){
      getData()
    }
    
  }, [query])
  
  if(error) return <p>{error}</p>
  return (
    <Box sx={{ gridArea: 'main', padding:'5rem'}}>
      <Box>
        <h2>Blog post</h2>
      </Box>
      <Box>
        <Filter 
          state={filter}
          onChange={handleChange}
          onSubmit={handleSubmit}
          />
      </Box>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        {
          isLoading && (<CircularProgress />)
        }
        {
          query ? <ListPosts data={postsFiltered} /> :<ListPosts data={state.posts} />
        }
      </Stack>
    </Box>
  )
}

export default Home