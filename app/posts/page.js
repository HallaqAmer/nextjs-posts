import Todo from "../components/todo"
import Link from "next/link"

export default async function PostsPage() {

    //now this component is SSR because we added no-store, by default it is  SSG
    //revalidate used for ISG
    const response= await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            next: {
                revalidate:120
            }
        }
    )

    const posts=await response.json()
    const postsJSX=posts.map((post)=> {
        return(
            <Link href={`/posts/${post.id}`} className="post-card">
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            </Link>
            
        )
    })
    
    return (
        <>  
            <h1>Posts Page</h1>
            <div id="posts">
                {postsJSX}
            </div>
        </>
      
    );
  }
  