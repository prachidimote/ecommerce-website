import { useState, useEffect} from 'react';
import axios from 'axios';
import './product.scss';
import FormatPrice from '../helpers/FormatPrice';


const Products = () => {
    const [products, setProducts] = useState([]);
    const addToCart = (product) => {
      console.log('product', product);
    }

    useEffect(() => {
     axios.get('https://fakestoreapi.com/products').then( res => {
        console.log(res);
        setProducts(res.data);
     })
    },[])
    
  return (
    <div className='productContainer'>
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
                {products.map(({ id, image, title, category, rating, price }) => (
                    <li key={id}>
                        <img src={image} alt={title} /><br />
                        {title}<br />
                        {category}<br />
                        {rating.rate}<br />
                        {<FormatPrice price={price}>{price}</FormatPrice>}
                        <div className='btn'>
                            <button onClick={() => addToCart({ id, title, price })}>Add to Cart</button>
                        </div>
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default Products