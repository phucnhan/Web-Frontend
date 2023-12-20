// ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Product.css';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/products/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className='product-container'>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div className='product'>
              <img
                src={`http://localhost:3001/images/${product.image_path}`}
                alt={product.name}
                style={{ width: '200px', height: '200px' }}
              />
              <span
                className='product_add_cart'
                onClick={() => addToCart(product)}
              >
                ADD TO CART
              </span>
            </div>
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
