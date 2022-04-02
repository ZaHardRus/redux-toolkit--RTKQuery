import {Link} from "react-router-dom";
import React from "react";
import {IPost, PostService} from "./redux/services/PostService";

export const MainPage = () => {
    const {data: posts, error: postsError, isLoading: postsIsLoading} = PostService.useFetchAllPostsQuery(10)
    const [createPost, {}] = PostService.useCreatePostMutation()
    const [updatePost, {}] = PostService.useUpdatePostMutation()
    const [deletePost, {}] = PostService.useDeletePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: 'description post #5'} as IPost)
    }
    const handleUpdate = async (el: IPost) => {
        const newData = {
            ...el,
            title: 'newData',
            body: 'newBody'
        }
        await updatePost(newData)
    }
    const handleRemove = async (el: IPost) => {
        await deletePost(el.id)
    }
    return(
        <div>
            {posts?.map(el => {
                return <div>
                    {el.title}
                    <button onClick={()=>handleUpdate(el)}>update</button>
                    <button onClick={()=>handleRemove(el)}>Delete</button>
                    <Link to={`posts/${el.id}`}><button>Open</button></Link>
                </div>
            })}
            <button onClick={handleCreate}>Create</button>
        </div>
    )
}