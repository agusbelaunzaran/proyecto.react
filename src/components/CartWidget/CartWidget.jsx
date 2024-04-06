import { useContext } from 'react'
import { CartContext} from '../CartContext/CartContext'
import cart from "./assets/cart.svg"
import { Link } from 'react-router-dom'

const CartWidget = () => {

     const {totalQuantity} = useContext (CartContext)
    return(
        <Link to={'/CartView'}>
            <img width='30px' height='30px' src= {cart }/>       
           {totalQuantity}
      </Link>
    )
}
export default CartWidget