import cart from './assets/carrito.svg'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return(
        <Link to='/cart'>
            <img width='30px' height='30px' src={cart} />       
            0
      </Link>
    )
}
export default CartWidget