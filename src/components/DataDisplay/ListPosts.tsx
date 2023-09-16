import { Post } from "../../types"
import CardPost from "./CardPost"
import Grid from '@mui/material/Grid';

interface ListPostsProps {
    data : Post[]
}
const ListPosts = ({data}: ListPostsProps) => {
    return (
        <>
        {
        
            data.map((post: Post) => (
                <Grid item xs={12} sm={6} md={4}  key={post.id}>
                    <CardPost  data={post}/>
                </Grid>
            ))
        }
        </>
    )
}

export default ListPosts