import {useState, useEffect } from "react"
//import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => { 
        const productsCollection= categoryId ?(
            query(collection (db, 'products'), where('category', '==', categoryId ))
        ) :(
            collection (db, 'products')
        )
         
        getDocs(productsCollection)
        .then(querySnapshot => {
            const productsAdapted = querySnapshot.docs.map (doc =>{
                const data = doc.data()

                return {id: doc.id, ...data}
            })
          setProducts(productsAdapted)
        })
        .catch( error =>{
            showNotification ('error al cargar los productos')
        })

        //const asyncFunction = categoryId ? getProductsByCategory : getProducts

        //asyncFunction(categoryId )
        ///.then(result=>{
            //setProducts(result)
        //})
    },[categoryId ])
    return(
        <main>
        <h1 style= {{color: 'black',margin: 10, fontSize: 30, display:'flex', justifyContent:'center', background:'rgb(151, 20, 20)'}}>{props.saludo} </h1>

        <ItemList products={products}/>
     
        </main>
    )
    
}
export default ItemListContainer