import { useEffect, useState } from 'react';
import { Box, Typography, Divider} from '@mui/material'
import { useParams } from 'react-router-dom';
import { useAxios } from '../customHooks/useAxios';
import { formatDate } from '../utils';
import { Post } from '../types';
import Spinner from '../components/layout/Spinner';
import { useAppContext } from '../context';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
const DetailPost = () => {

  const params = useParams();
  const { state } = useAppContext();

  const { data, isLoading,error } = useAxios(`/posts/${params.id}`);
  const [actualPost, setActualPost] = useState<null | Post >(null)

  useEffect(() => { 
      setActualPost(data.post)
      
    

  }, [data])

  if (isLoading) return (<Spinner />)
  
  return (
    <Box sx={{ gridArea: 'main', padding:'5rem', minHeight:'100vh'}}>
      <Box>
      <Typography variant="h2" mb={2}>{actualPost?.title}</Typography>
      <Divider />
      {/*  TODO:- Add icons to date and author  */}
      
      <Typography variant="body1" mt={2}>
        <CalendarTodayIcon color="primary"/>{formatDate(actualPost?.createdAt)} | <PersonIcon color="primary"/> {actualPost?.author?.name} </Typography>
      </Box>
      <Box mt={5}>
        <Typography variant="body1">{actualPost?.content}</Typography>
      </Box>
    </Box>
  )
}

export default DetailPost