import './App.css'
import {Navbar} from './components/Navbar'
import {ItemListContainer} from './containers/ItemListContainer'

function App() {

  return (
    <>
      <Navbar className="sticky-menu"/>
      <ItemListContainer className="h-auto" greeting={"Bienvenidos al MaxiKiosko Coderhouse"} />
    </>
  )
}

export default App
