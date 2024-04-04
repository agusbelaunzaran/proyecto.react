import { useContext } from 'react'
import { CartContext} from '../CartContext/CartContext'
import cart from './assets/carrito.svg'
import { Link } from 'react-router-dom'

const CartWidget = () => {

     const {totalQuantity} = useContext (CartContext)
    return(
        <Link to={'/cart'}>
            <img width='30px' height='30px' src={cart} alt='cart icon'/>       
           {totalQuantity}
      </Link>
    )
}
export default CartWidget