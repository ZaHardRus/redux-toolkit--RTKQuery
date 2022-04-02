import {PostService} from "./redux/services/PostService"
import {useNavigate, useParams} from "react-router-dom";

export const PostDetails = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const {data: post, error: postError, isLoading: postIsLoading} = PostService.useFetchPostByIdQuery(Number(id))
    const goBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <b>{post?.id}.{post?.title}</b>
            <button onClick={goBack}>back</button>
        </div>
    )
}