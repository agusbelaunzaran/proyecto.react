import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import { Link } from "react-router-dom"

const CartView =() => {
    const {cart} = useContext (CartContext)
     
    return (
        <div>
            <h1 style={{paddingTop:5}}> Carrito de compras</h1>
            
               {cart.map (prod =>(
                        <article key={prod.id}>
                            <h2>{prod.name}</h2>
                            <p>Precio: ${prod.price}</p>
                            <p>Cantidad: {prod.quantity}</p>
                            <Link to='/CheckOut' style={{color:"white", backgroundColor:'black', borderRadius:5}}> Finalizar Compra</Link>
                        </article>
                        
                        
                    
                ))}
            

        </div>
    )
}

export default CartView