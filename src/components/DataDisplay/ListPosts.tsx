import { Post } from "../../types"
import CardPost from "./CardPost"

interface ListPostsProps {
    data : Post[]
}
const ListPosts = ({data}: ListPostsProps) => {
    
    return (
        <>
        {
            data.length &&
            data.map((post: Post) => (
                <CardPost key={post.id} data={post}/>
            ))
        }
        </>
    )
}

export default ListPosts