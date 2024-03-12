import {useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => { 

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId )
        .then(result=>{
            setProducts(result)
        })
    },[categoryId ])
    return(
        <main>
        <h1 style={{ color: 'black',margin: 5, fontSize: 30, display:'flex', justifyContent:'center', background:'grey'}}>{props.saludo}</h1>

        <ItemList products={products}/>
     
        </main>
    )
    
}
export default ItemListContainer