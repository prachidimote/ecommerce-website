import { useState, useEffect} from 'react';
import axios from 'axios';
import './product.scss';
import FormatPrice from '../helpers/FormatPrice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types
const Products = ({cart, setCart}) => {
    const [products, setProducts] = useState([]);

    //to get the cart items
    const addToCart = (product) => {
      // const obj = {
      //   product
      // }
      setCart([...cart, product]);
      console.log("cart Element :", cart);
      toast.success('Item added in cart', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }

    useEffect(() => {
     axios.get('https://fakestoreapi.com/products').then( res => {
        console.log(res);
        setProducts(res.data);
     })
    },[])
    
  return (
    <>
    <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    <div className='productContainer'>
      {/* <img style={{ cursor: "pointer" }} src='cart.png'/> */}
        {/* <ul>
            {products.map((product) =>( <li key={product.id}>  <img src={product.image}/><br />{product.title}<br/>
                    {product.category}<br/>
                    {product.rating.rate}<br/>
                   <p>{FormatPrice}</p><br/>
            <div className='btn'>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
            </li>
            ))}
        </ul> */}


       {/* code refractored => destructured data from an api */}
        <ul>
                {products.map(({ id, title, price, description, image, rating  }) => (
                    <li key={id}>
                        <img style={{ height: "60px"}} src={image} alt='' /><br />
                        {title}<br />
                        {description}<br/>
                        {rating.rate}<br />
                        {<FormatPrice price={price}>{price}</FormatPrice>}
                        <div className='btn'>
                        <button onClick={() => addToCart({ id, image, title, description, price, rating })} type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Add to Cart</button>
                         
                        </div>
                    </li>
                ))}
            </ul>
    </div>
    </>
  )
}

export default Products