import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from "./modules/home/Home";
import { Routes, Route } from "react-router-dom";
import SingleProduct from "./components/singleproduct/SingleProduct";
import Products from './modules/products/Products';
import CategoryProducts from './modules/categoryproducts/CategoryProducts';
import Cart from './modules/cart/Cart';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:id" element={<SingleProduct/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/categories/:name" element={<CategoryProducts/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;