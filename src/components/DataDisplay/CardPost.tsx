
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Post } from '../../types';
import { red } from '@mui/material/colors';
import { formatDate } from '../../utils';

interface CardPostProps{
    data: Post
}

const CardPost = ({data}: CardPostProps) => {

    const newDate = new Date(data.createdAt);
    // TODO: -Add responsive card size
    return (
        <Card sx={{ maxWidth: 345 , minHeight: 60}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                title={data.title}
                subheader={formatDate(newDate)}
            
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {data.content.substring(0, 70)}...
                </Typography>
            </CardContent>
            {/* TODO: -Add router to link to details */}
            <CardActions>
                <Button size="small">See More</Button>
            </CardActions>
        </Card>
    )
}

export default CardPost