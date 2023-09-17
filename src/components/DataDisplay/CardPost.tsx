import {Card, CardHeader, CardContent, CardActions, Typography, Button, Avatar} from '@mui/material';
import red from '@mui/material/colors/red';
import { Post } from '../../types';
import { formatDate } from '../../utils';
import { Link } from "react-router-dom";

interface CardPostProps{
    data: Post
}

const CardPost = ({data}: CardPostProps) => {

    return (
        <Card sx={{ maxWidth: 345 , minHeight: 60}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        
                        {data.author.name[0]}
                    </Avatar>
                }
                title={data.title}
                subheader={formatDate(data.createdAt)}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {data.content.substring(0, 70)}...
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Author: {data.author.name}
                </Typography>            
            </CardContent>
            <CardActions>
                
                <Link to={`/post/${data.id}`}>
                    <Button size="small">See More</Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default CardPost