import './App.css'
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { CartProvider } from './components/CartContext/CartContext'
import Cart from './components/CartWidget/assets/cart.svg'
import CartView from './components/CartView/CartView'
import Checkout from './components/CheckOut/CheckOut'


const App = () => {
 return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/'element={<ItemListContainer saludo= 'Bienvenidos!'/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path= '/category/:categoryId' element={<ItemListContainer saludo= 'Bienvenidos'/>}/>
            <Route path='/CartView' element={<CartView />}/>
            <Route path='/CheckOut' element={<Checkout />}/>
            </Routes>
          </BrowserRouter>
        </CartProvider>
    </>
  
  )
 }


export default App