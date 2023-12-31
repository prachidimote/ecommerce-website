import FormatPrice from "../formatprice/FormatPrice";
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ProductCard = ({ products = [] }) => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
        {
            products.map((product) => {
                console.log(product, 'product');
                const {id, title, price, category, image, rating} = product
                return (
                  // eslint-disable-next-line react/jsx-key
                  <Link to={`/product/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 cursor-pointer">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={image}/>
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{category}</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                      <p className="mt-1 font-semibold"><FormatPrice price={price} /></p>
                      <h4 className="text-gray-900 title-font text-lg font-medium">{rating.rate}</h4>
                    </div>
                  </Link>
                )

            })
        }
  
    
    </div>
  </div>
</section>
  )
}

export default ProductCard