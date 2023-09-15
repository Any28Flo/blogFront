import { useEffect, useState} from 'react';

import { Box, CircularProgress, Grid} from '@mui/material'
import { useAppContext } from '../context';

import { useAxios } from '../customHooks/useAxios';

import { Types } from '../context/blogReducer';

import ListPosts from '../components/DataDisplay/ListPosts';
import Filter from '../components/Inputs/Filter';

import { getPosts } from '../db/api';
import ModalPost from '../components/Dialog/ModalPost';
import Status from '../components/Inputs/Status';

const filterForm ={
  type: 'title',
  stringPattern: ''
}

const Home = () => {

  const { state, dispatch } = useAppContext();


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

  if (error)return ( <div>Error en el server</div>)
  return (
    <Box width="100%"  sx={{ gridArea: 'main', padding:'2rem'}}>
      <Box>
        <h2>Blog post</h2>
      </Box>
      <Box>
        <Status/>
      </Box>
      <Box margin={2}>
        <Filter 
          state={filter}
          onChange={handleChange}
          onSubmit={handleSubmit}
          />

      </Box>
      <Box>
        <ModalPost  />

      </Box>
      <Grid justifyContent="center"   container spacing={2} marginTop={2}
      >
        {
          isLoading && (<CircularProgress />)
        }
        {
          query ? <ListPosts data={postsFiltered} /> :<ListPosts data={state.posts} />
        }
      </Grid>
    </Box>
  )
}

export default Home