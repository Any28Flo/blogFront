import { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography, Divider} from '@mui/material'
import { useParams } from 'react-router-dom';
import { useAxios } from '../customHooks/useAxios';
import { formatDate } from '../utils';
import { Post } from '../types';
import Spinner from '../components/layout/Spinner';

const DetailPost = () => {

  const params = useParams();
  
  const { data, isLoading,error } = useAxios(`/posts/${params.id}`);
  const [actualPost, setActualPost] = useState<null | Post >()

  useEffect(() => { 
    setActualPost(data.post)
  }, [data])

  // TODO: - Add custom component Loading and wrapper
  if (isLoading) return (<Spinner />)
  
  return (
    <Box sx={{ gridArea: 'main', padding:'5rem'}}>
      <Box>
      <Typography variant="h2" mb={2}>{actualPost?.title}</Typography>
      <Divider />
      {/*  TODO:- Add icons to date and author  */}
      <Typography variant="body1" mt={2}>{formatDate(actualPost?.createdAt)} | {actualPost?.author?.name} </Typography>
      </Box>
      <Box mt={5}>
        <Typography variant="body1">{actualPost?.content}</Typography>
      </Box>
    </Box>
  )
}

export default DetailPost