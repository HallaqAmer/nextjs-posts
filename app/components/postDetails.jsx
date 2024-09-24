import { Suspense } from "react"

export default async function PostDatails({postId}) {

    const response= await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
            next: {
                revalidate:120
            }
        }
    )

    const post=await response.json()
    return(

        <div>
            <div>
                <h1>{post.title}</h1>
            </div>
            <hr/>
            <div>
                {post.body}
            </div>
        </div>
    )
}