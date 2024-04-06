import { createContext, useState } from 'react'
import CartWidget from '../CartWidget/CartWidget'

export const CartContext= createContext()

 export const CartProvider = ({children}) => {

    
        const [cart, setCart] = useState([])
        
       
       
        const addItem = (objProductAdd) => {
         if (!isInCart (objProductAdd.id)){
           setCart(prev=>[...prev, objProductAdd])
         }else{
            console.error('el producto ya esta agregado');
         }
        }
       
        const isInCart =(id) => {
           return cart.some(prod=> prod.id === id)
        }

        const clearCart = () => {
        setCart([])
      }

    

      const removeItem = (id) => {
        const updatedCart = cart.filter(prod => prod.id !== id)
        setCart(updatedCart)
      }
       
        const getTotalQuantity = () => {
         let accu=0
       
         cart.forEach(prod=>{
         accu += prod.quantity
         })
         return accu 
        }
       
        const totalQuantity = getTotalQuantity()

        const getTotal = () => {
            let accu=0
          
            cart.forEach(prod=>{
            accu += prod.quantity * prod.price
            })
            return accu 
           }
          
           const Total = getTotal()
    return (
        <CartContext.Provider value = {{cart, addItem, setCart, addItem, totalQuantity, Total,clearCart,isInCart,removeItem,}}>
            {children}
        </CartContext.Provider>
    )
}
