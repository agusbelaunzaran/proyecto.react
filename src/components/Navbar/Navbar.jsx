import React from 'react'
import classes from './Navbar.module.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return(
        <header classes={classes.header}>
        <h3 style={{ display:'flex', padding:'10' ,justifyContent:'center', background:'rgb(151, 20, 20)', color:'black', fontSize:40, alignItems:'center'}}> Bienvenidos a ... </h3>
         <nav style={{ display:'flex',padding:'10' , justifyContent:'center', background:'rgb(151, 20, 20)', color:'black', fontSize:30, alignItems:'center'}}>
            <Link to='/' className='btn btn-secondary m-3' >TODO EN PRODUCTOS</Link >
            <Link to='/category/Remeras' className='btn btn-secondary m-3'>REMERAS</Link >
            <Link to='/category/Buzos' className='btn btn-secondary m-3'>BUZOS</Link >
            <CartWidget/>
         </nav>
         
        </header>
    )
}
export default Navbar
