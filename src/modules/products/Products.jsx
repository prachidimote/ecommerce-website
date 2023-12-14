import ProductCard from "../../components/productcard/ProductCard"
import Categories from "../../components/categories/Categories";
import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            console.log(data);
            setProducts(data);
        }
        fetchProducts();
    },[])
  return (
    <div>
      <Categories />
      <div className="flex flex-col text-center w-full mt-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">ALL PRODUCTS</h1>
    </div>
      {
        products.length > 0 ?
      <ProductCard products={products}/>
      :
      <div><iframe src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/loop-loading-loader-xTk9ZvMnbIiIew7IpW">via GIPHY</a></p></div>
}
    </div>
  )
}

export default Products