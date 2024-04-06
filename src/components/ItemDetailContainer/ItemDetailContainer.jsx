import { useEffect, useState } from "react"
//import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc} from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"


const ItemDetailContainer = () => {

     const [product, setProduct]= useState(null)

    const {itemId}= useParams()

 useEffect (()=>{
    const productDoc = doc (db,'products', itemId) 

    getDoc(productDoc)
        .then(queryDocumentSnapshot =>{
             const data = queryDocumentSnapshot.data()
             const productAdapted ={id: queryDocumentSnapshot.id, ...data}
             setProduct(productAdapted)
            }) 
            
            
        })

        ,[itemId]

        return (
            <main>
                <h2>Detalle del producto</h2>
                <ItemDetail {...product}/>
            </main>
       )
        }
    

export default ItemDetailContainer