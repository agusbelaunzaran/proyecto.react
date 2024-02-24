import React from 'react'
import classes from './Navbar.module.css'
import CartWidget from "../CartWidget/CartWidget"
const Navbar = () => {
    return(
        <header classes={classes.header}>
        <h3 style={{ display:'flex', justifyContent:'center', background:'pink', color:'black', fontSize:40, alignItems:'center'}}> Bienvenidos a ... </h3>
         <nav style={{ display:'flex', justifyContent:'center', background:'pink', color:'black', fontSize:30, alignItems:'center'}}>
            <button className='btn btn-secondary m-3' >HOME</button>
            <button className='btn btn-secondary m-3'>PRODUCTOS</button>
            <button className='btn btn-secondary m-3'>CONTACTO</button>
            <CartWidget/>
         </nav>
         
        </header>
    )
}
export default Navbar
