import React from 'react'
import classes from './Navbar.module.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return(
        <header classes={classes.header}>
        <h3 style={{ display:'flex', justifyContent:'center', background:'grey', color:'black', fontSize:40, alignItems:'center'}}> Bienvenidos a ... </h3>
         <nav style={{ display:'flex', justifyContent:'center', background:'grey', color:'black', fontSize:30, alignItems:'center'}}>
            <Link to='/category/category' className='btn btn-dark m-3' >TODO EN PRODUCTOS</Link >
            <Link to='/category/celular' className='btn btn-dark m-3'>REMERAS B&N</Link >
            <Link to='/category/tablet' className='btn btn-dark m-3'>REMERAS COLOR</Link >
            <CartWidget/>
         </nav>
         
        </header>
    )
}
export default Navbar
