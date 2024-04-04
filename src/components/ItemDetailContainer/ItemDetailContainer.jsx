import { useEffect, useState } from "react"
//import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDocs} from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { collection } from "firebase/firestore"


const ItemDetailContainer = () => {

     const [product, setProduct]= useState(null)

    const {itemId}= useParams()

 useEffect (()=>{
    const productsCollection = collection (db,'products')

    getDocs(productsCollection)
        .then(querySnapshot =>{
            console.log(querySnapshot);
        })
        .catch()
    

 //   getProductById(itemId)
 //   .then (result =>{
 //       setProduct(result)
 //   })
 },[itemId]) 

 return (
        <main>
            <h2>Detalle del producto</h2>
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer