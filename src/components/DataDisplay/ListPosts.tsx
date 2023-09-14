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
            data.length &&
            data.map((post: Post) => (
                <Grid item xs={12} md={4}  key={post.id}>
                    <CardPost  data={post}/>
                </Grid>
            ))
        }
        </>
    )
}

export default ListPosts