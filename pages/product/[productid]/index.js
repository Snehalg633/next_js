import {useRouter} from "next/router"
function ProductDetails(){
    const router = useRouter()
    const productid = router.query.productid
    return(
        <h1>Details About Product {productid}</h1>
    )
}

export default ProductDetails;