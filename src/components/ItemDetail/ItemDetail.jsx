import { useState,useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../CartContext/CartContext"


 const ItemDetail = ({  id, name, category, img, price, description, stock }) => {

    const [quantity, setQuantity] = useState(0)

    const {setCart} = useContext(CartContext)

     const handleOnAdd = (quantity) =>{
       const objProductAdd ={
        id, name, price, quantity
       }
       setQuantity(quantity)

       setCart( prev => [... prev, objProductAdd])
       }
    return(
        <article>
                <h3>{name}</h3>
                <img src={img} style={{width: 200}} />  
                <h4>Categoria: {category}</h4>
                <h4>{price}</h4>
                <h4> Destripcion del producto: {description}</h4>
                { 
             quantity === 0 ?(
                     <ItemCount onAdd={handleOnAdd} stock={stock}  />
                ) : (
                 <Link to={'/cart'} style={{color:"white", backgroundColor:'black', borderRadius:5}}> Finalizar compra</Link> 
                 )
                }
        </article>
    )
 
}

 export default ItemDetail 