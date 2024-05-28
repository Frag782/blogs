import { NavigationBar } from "../../components/NavigationBar/NavigationBar";
import { Post } from "../../components/Post/Post"
import { usePosts } from "../../providers/PostProvider";
import { CreatePostForm } from "../../forms/Post/CreatePostForm"

export const BlogPage = () => {
    const { posts } = usePosts();
    
    return (
        <div>
            <NavigationBar />

            {
                posts.map( (post, index) => {
                    return (
                        <div className='w-50 mx-auto my-3 border border-dark rounded-top'>
                            <Post key={index} title={post.title} text={post.text} image={post.image} />
                        </div>
                    )
                })
            }
            

            <div className='bg-light'>
                <div className='w-25 mx-auto py-3'>
                    <h3>Nouveau post</h3>
                    <CreatePostForm />
                </div>
            </div>

        </div>
    )
}