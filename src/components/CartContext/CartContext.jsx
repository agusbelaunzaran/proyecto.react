import { createContext, useState } from 'react'
import CartWidget from '../CartWidget/CartWidget'

export const CartContext= createContext()

 export const CartProvider = ({children}) => {

    
        const [cart, setCart] = useState([])
        
       
       
        const addItem = (objProductAdd) => {
         if (!isInCart (objProductAdd.id)){
           setCart(prev=>[...prev, objProductAdd])
         }
        }
       
        const isInCart =(id) => {
           return cart.some(prod=> prod.id === id)
        }
       
        const getTotalQuantity = () => {
         let accu=0
       
         cart.forEach(prod=>{
         accu += prod.quantity
         })
         return accu 
        }
       
        const totalQuantity = getTotalQuantity()
    return (
        <CartContext.Provider value = {{cart, setCart, addItem, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
