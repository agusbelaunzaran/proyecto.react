import { useState } from "react"

const ItemCount = ({initial= 1, stock, onAdd}) => {
   const [count, setCount]= useState (initial)

   const decrement = () => {
    if (count > 1) {
        setCount(prev => prev -1)
    }
   }
   const icrement = () => {
    if (count < stock) {
        setCount(prev => prev +1)
    }
   }

   
    return (
       <article style={{justifyContent: 'center'}}>
        <h3>{count}</h3>
        <button onClick={decrement} >- </button>
        <button onClick ={() => onAdd(count)}>Agregar al carrito</button>
        <button onClick={icrement}> + </button>
       </article>
        )
}

export default ItemCount