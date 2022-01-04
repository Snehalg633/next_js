import Link from "next/Link"

function ProductList({productid = 100}){
    return(
        <>
        <Link href = {`/product/${productid}`}>
        <a>product 1</a>
        </Link>
        
        <h1>product 2</h1>
        <h1>product 3</h1>
        <Link href = "/">
        <a>Home</a>
        </Link>
        </>
    )
}

export default ProductList;                                                                                                                                                          