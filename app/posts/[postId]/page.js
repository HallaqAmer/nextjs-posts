import { Suspense } from "react"
import PostDatails from "@/app/components/postDetails"

export default async function PostDatailsPage({params}) {
    const postId=params.postId
    const loadingjsx=(<div><h2>Loading...</h2></div>)
    return(
        <div>
            <h1>Post Details</h1>
            <Suspense fallback={loadingjsx}>
                <PostDatails postId={postId}/>
            </Suspense>
        </div>
    )
}