import { useEffect, useState} from 'react';

import { Box, Grid,Button, Stack} from '@mui/material'
import { useAppContext } from '../context';

import { useAxios } from '../customHooks/useAxios';

import { Types } from '../context/blogReducer';

import ListPosts from '../components/DataDisplay/ListPosts';
import Filter from '../components/Inputs/Filter';

import { getPosts } from '../db/api';
import ModalPost from '../components/Dialog/ModalPost';
import Status from '../components/Inputs/Status';
import Spinner from '../components/layout/Spinner';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const initState ={
  type: 'title',
  stringPattern: ''
}

const Home = () => {

  const { state, dispatch } = useAppContext();


  const { data, isLoading,error } = useAxios('/posts');

  const [filter, setFilter] = useState(initState);

  const [query, setQuery] = useState('');

  const [postsFiltered, setPostsFiltered] = useState({filter:'', data:[]});

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
        const data = await getPosts(query);
        setPostsFiltered(data)

    } catch (error) {
        console.log(error)
    }
  }

  const handleClear = () => {
    setQuery('');
    setFilter(initState);
  }
  useEffect(() => {
    if(state.posts.length === 0){
      dispatch({
        type: Types.SET_POSTS,
        payload: data
      })
    }

  }, [data])

  useEffect(() => {
    if(query){

      getData()
    }
  }, [query])

  if (error)return ( <div>Error en el server</div>)

  if (isLoading) return (<Spinner />)

  return (
    <Box width="100%"  sx={{ gridArea: 'main', padding:'2rem'}}>
      <Box>
        <h2>Blog post</h2>
      </Box>
      <Box>
        <Status/>
      </Box>
      <Stack
      
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems="center"
        gap={4}
        margin={2}>
        <Filter 
          state={filter}
          onChange={handleChange}
          onSubmit={handleSubmit}
          />
        <Button 
          variant="outlined" 
          startIcon={<FilterAltIcon />}
          onClick={handleClear}
          >
          Clear filters
        </Button>
      </Stack>
      <Box>
        <ModalPost  />

      </Box>
      <Grid justifyContent="center" spacing={{ xs: 1, sm: 2, md: 4}}   container marginTop={2}>
        {
          isLoading && (<Spinner/>)
        }
        { 
          query ? 
            postsFiltered.filter !== 'author' ? <ListPosts data={postsFiltered.data} /> : postsFiltered.data.map((option, index )=>(<ListPosts key={`post-list-${index}`} data={option?.posts} />))
          :<ListPosts data={state.posts} />
        }
        
      </Grid>
    </Box>
  )
}

export default Home