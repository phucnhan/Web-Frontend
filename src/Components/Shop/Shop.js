// Shop.js
import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from '../Cart/Cart';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';

const Shop = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }

    setSelectedProduct(product);
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <div className='shop-page'>
      <Navbar />
      <div className='shop-container'>
        <div className='titlepage'>
          <h2>Clock At Our shop</h2>
          <p>
            Immerse yourself in the world of timeless elegance with our exquisite clock collection. Each clock is a testament to meticulous craftsmanship, seamlessly blending artistry and functionality. Experience the beauty of precise timekeeping as our clocks adorn your space with sophistication. More than mere instruments, our clocks are statements of style and refinement. Elevate your home or office with these unique timepieces and discover the essence of time in a whole new light.
          </p>
        </div>
        <div className='products'>
          <ProductList addToCart={addToCart} />
        </div>
      </div>
      {showCart && (
        <Cart
          cartItems={cartItems}
          selectedProduct={selectedProduct}
          updateQuantity={(productId, newQuantity) => {
            setCartItems((prevItems) =>
              prevItems.map((item) =>
                item.id === productId
                  ? { ...item, quantity: parseInt(newQuantity, 10) }
                  : item
              )
            );
          }}
          removeProduct={(productId) => {
            setCartItems((prevItems) =>
              prevItems.filter((item) => item.id !== productId)
            );
          }}
          closeCart={closeCart}
        />
      )}
      <Footer />
    </div>
  );
};

export default Shop;
