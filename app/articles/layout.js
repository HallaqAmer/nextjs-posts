export const metadata = {
    title: "articles page"
}

export default function({children}) {

    return(
        <>
            <div>
                <h1>Articles</h1>
            </div>
            <div>
                {children}
            </div>
        </>
    )
}