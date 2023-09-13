import { Post } from "../../types"

interface ListPostsProps {
    data : Post[]
}
const ListPosts = ({data}: ListPostsProps) => {
   
    console.log(data)
    return (
        <>
        {
            data.map((post: Post) => (
                <div key={post.id}></div>
            ))
        }
        </>
    )
}

export default ListPosts