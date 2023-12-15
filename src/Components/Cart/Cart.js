// Cart.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Cart.css";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/cart'); // Adjust the endpoint accordingly
      setCartItems(response.data);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  const removeProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:3001/api/remove-from-cart/${productId}`);
      fetchCartData(); // Fetch updated cart data after removal
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };

  const updateQuantity = async (productId, newQuantity) => {
    try {
      await axios.put('http://localhost:3001/api/update-cart-item', {
        productId,
        quantity: newQuantity,
      });
      fetchCartData(); // Fetch updated cart data after quantity update
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const checkout = async () => {
    try {
      await axios.post('http://localhost:3001/api/checkout');
      fetchCartData(); // Fetch updated cart data after checkout
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="cart">
        <h2>CART</h2>
        <div className="cart-table">
          {/* Table for rendering cart items */}
          <table>
            {/* Table headers */}
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {cartItems.map((product) => (
                <tr key={product.id}>
                  <td className="product">
                    {/* Product details */}
                    <div className="product-details">
                      <h2 className="product-title">{product.name}</h2>
                    </div>
                  </td>
                  <td>&euro; {product.price.toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      value={product.quantity}
                      onChange={(e) => updateQuantity(product.id, e.target.value)}
                      min={1}
                    />
                  </td>
                  <td>&euro; {(product.price * product.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="cart-btn remove-btn"
                      onClick={() => removeProduct(product.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Summary table */}
        <div className="summary-table">
          <table>
            <tbody>
              <tr>
                <td>Total Items:</td>
                <td>
                  {cartItems.reduce(
                    (totalItems, product) => totalItems + product.quantity,
                    0
                  )}
                </td>
              </tr>
              <tr>
                <td>Total Price:</td>
                <td>
                  &euro;{" "}
                  {cartItems.reduce(
                    (total, product) => total + product.price * product.quantity,
                    0
                  ).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
          {/* Checkout button */}
          <button className="cart-btn checkout-btn" onClick={checkout}>
            CHECKOUT
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
