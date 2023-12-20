// Cart.js
import React from 'react';
import Footer from '../Home/Footer';
import './Cart.css';

const Cart = ({ cartItems, selectedProduct, updateQuantity, removeProduct, closeCart }) => {
  return (
    <div>
      <section className='cart'>
        <div className='cart-table'>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((product) => (
                <tr key={product.id}>
                  <td className='product'>
                    <img
                      src={`http://localhost:3001/images/${product.image_path}`}
                      alt={product.name}
                      style={{ width: '50px', height: '50px' }}
                    />
                    {product.name}
                  </td>
                  <td>${product.price}</td>
                  <td>
                    <input
                      type='number'
                      value={product.quantity}
                      onChange={(e) =>
                        updateQuantity(product.id, e.target.value)
                      }
                    />
                  </td>
                  <td>${(product.price * product.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => removeProduct(product.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='summary-table'>
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
                  ${' '}
                  {cartItems
                    .reduce(
                      (total, product) =>
                        total + product.price * product.quantity,
                      0
                    )
                    .toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
          <button className='cart-btn checkout-btn' onClick={() => alert('Checkout functionality will be implemented here.')}>
            CHECKOUT
          </button>
          <button className='cart-btn checkout-btn' onClick={closeCart}>
            CLOSE CART
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
