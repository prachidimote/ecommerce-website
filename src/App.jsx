import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import Cart from './components/cart/Cart';

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <>
    {/* <Products /> */}
    <Router>
      <Navbar cart={cart}/>
      <Routes>
        <Route path="/products" element={<Products cart={cart} setCart={setCart}/>} /> 
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App