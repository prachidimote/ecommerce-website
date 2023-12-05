import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./modules/home/Home";
const App = () => {
  return (
    <div>
      <Header />
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