import './App.css'
import {Navbar} from './components/Navbar'
import {ItemListContainer} from './containers/ItemListContainer'
import Cart from './components/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemDetailContainer } from './containers/ItemDetailContainer'
import { Bienvenida } from './components/Bienvenida'

function App() {
  return (
    <BrowserRouter>
      <Navbar className="sticky-menu"/>
      <Routes>
        <Route path='/' element={<Bienvenida />}/>
        <Route path='/catalogo' element={<ItemListContainer className="h-auto" />} />
        <Route path='/categoria/:categoria' element={<ItemListContainer className="h-auto" />} />
        <Route path='/item/:id' element={<ItemDetailContainer className="h-auto" />} />
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
