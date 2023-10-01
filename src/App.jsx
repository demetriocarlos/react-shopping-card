 
 import { Navbar } from "./Components/Navbar"
import { ItemList } from "./Components/ItemList"
import { ShoppingCart } from "./Components/ShoppingCart"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ShoppingCartProvider } from "./Contexts/ShoppingCartContext"



//tutorial  Shopping Cart - Carrito de compras - REACT - useContext API

function App() {
  return (
    <ShoppingCartProvider>
      <Router>
          <Navbar/>
        <Routes>
          <Route path="/" element={<ItemList/>}/>
          <Route path="/cart" element={<ShoppingCart/>}/>
        </Routes>
      </Router>
    </ShoppingCartProvider>
  )
}

export default App
