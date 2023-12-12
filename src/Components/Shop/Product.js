// Product.js

import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend when the component mounts
    axios.get('http://localhost:3001/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <section className="product-page">
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className={`product product-${product.id}`}>
            <img src={product.image_path} alt={product.name} className="product-img" />
            <span className="product_add_cart">ADD TO CART</span>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
