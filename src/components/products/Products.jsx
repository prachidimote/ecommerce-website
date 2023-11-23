import { useState, useEffect} from 'react';
import axios from 'axios';
import './product.scss';

const Products = () => {
    const [products, setProducts] = useState([]);
    const addToCart = (product) => {
      // console.log(event.target);
      console.log('product', product);
    }

    useEffect(() => {
     axios.get('https://fakestoreapi.com/products').then( res => {
        console.log(res);
        //update state with fetched data
        setProducts(res.data);
     })
    },[])
  return (
    <div className='productContainer'>
        <ul>
            {products.map((product) =>( <li key={product.id}>  <img src={product.image}/><br />{product.title}<br/>
                    {product.category}<br/>
                    {product.rating.rate}<br/>
                    {product.price}<br/>
            <div className='btn'>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Products