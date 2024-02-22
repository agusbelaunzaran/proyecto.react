import cart from './assets/carrito.svg'

const CartWidget = () => {
    return(
        <button>
            <img width='30px' height='30px' src={cart} />       
            0
      </button>
    )
}
export default CartWidget