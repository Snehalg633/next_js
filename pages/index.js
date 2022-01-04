import Link from "next/link"
import { useRouter } from "next/router"

function Home(){

    const router = useRouter()


    const handleClick = ()=>{
    
        console.log("Placing your order")
        router.push("/product")
    }
    return(
        <>
        <h1>Home Page</h1>
        <Link href = "/blog">
        <a>Blog</a>
        </Link>
        <Link href = "/product">
        <a>product</a>
        </Link>
        <button onClick={handleClick} >Place order</button>
        </>
    )
}

export default Home;