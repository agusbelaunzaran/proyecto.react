import './App.css'
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { CartProvider } from './components/CartContext/CartContext'

const App = () => {
 return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/'element={<ItemListContainer saludo= 'SENCILLO indumentaria!'/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path= '/category/:categoryId' element={<ItemListContainer saludo= 'SENCILLO indumentaria!'/>}/>
            <Route path='/cart' element={<Cart />}/>
            </Routes>
          </BrowserRouter>
        </CartProvider>
    </>
  
  )
 }


export default App