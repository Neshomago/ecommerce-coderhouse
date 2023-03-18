import './App.css'
import {Navbar} from './components/Navbar'
import {ItemListContainer} from './containers/ItemListContainer'
import {Cart} from './components/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemDetailContainer } from './containers/ItemDetailContainer'
import { Bienvenida } from './components/Bienvenida'
import CartContext from './context/CartContext'

function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <Navbar className="sticky-menu"/>
          <Routes>
            <Route path='/' element={<Bienvenida />}/>
            <Route path='/catalogo' element={<ItemListContainer className="h-auto" />} />
            <Route path='/categoria/:categoria' element={<ItemListContainer className="h-auto" />} />
            <Route path='/item/:id' element={<ItemDetailContainer className="h-auto" />} />
            <Route path='/cart' element={<Cart />}/>
          </Routes>
          <footer className='footer mt-auto py-3 align-content-center' style={{zIndex:'99'}}>Andrés Torres @ Coderhouse</footer>
      </BrowserRouter>
    </CartContext>
  )
}

export default App
