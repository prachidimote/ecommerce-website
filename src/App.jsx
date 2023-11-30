import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import Cart from './components/cart/Cart';
import Sidebar from './components/sidebar/Sidebar';
// import Search from './components/search/search';

const App = () => {
  const [cart, setCart] = useState([]);


  return (
    <>
   
    {/* <div>
      {Products.filter((val) => {
        if(searchTerm == "") {
          return val;
        }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
          return val;
        }
      })
      .map((val) => {
        <div key={val.id}>
          <img src={val.image} alt="" />
          <h3>{val.title}</h3>
        </div>
      })
      }
    </div> */}
   <Sidebar />
    <Router>
      <Navbar cart={cart}/>
      <Routes>
        <Route path="/" element={<Products cart={cart} setCart={setCart}/>} /> 
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        {/* <Route path="/search/:term" element={<Search />} /> */}
      </Routes>
    </Router>
    
    
    </>
  )
}

export default App