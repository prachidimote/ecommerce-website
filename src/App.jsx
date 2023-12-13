import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SingleProduct from "./components/singleproduct/SingleProduct";
import Home from "./modules/home/Home";
import About from "./components/about/About";
import { Routes, Route } from "react-router-dom";
import Products from './modules/products/Products';
import CategoryProducts from "./modules/categoryproducts/CategoryProducts";
import Cart from "./modules/cart/Cart";
const App = () => {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/footer" element={<Footer/>} /> 
          <Route path="/product/:id" element={<SingleProduct/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/categories/:name" element={<CategoryProducts/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<div>404 NOT FOUND</div>} />
        </Routes>
      <Home />
      <Footer />
    </div>
  )
}

export default App

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Products from "./pages/Products";
// import Contact from './pages/Contact';
// import SingleProduct from "./pages/SingleProduct";
// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/singleproduct/:id" element={<SingleProduct />} />
//       </Routes>
//     </Router>
//   )
// }

// export default App