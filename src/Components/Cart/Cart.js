// Cart.js
import React from "react";
import "./Cart.css";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

class Cart extends React.Component {
  state = {
    cartItems: [
      { id: 1, name: "Anne Klein Watch", price: 150.0, quantity: 1 },
      { id: 2, name: "Another Watch", price: 120.0, quantity: 2 },
      { id: 3, name: "Third Watch", price: 180.0, quantity: 1 },
    ],
  };

  removeProduct = (productId) => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.filter((item) => item.id !== productId),
    }));
  };

  updateQuantity = (productId, newQuantity) => {
    this.setState((prevState) => {
      const updatedCartItems = prevState.cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: parseInt(newQuantity, 10) } : item
      );

      return {
        cartItems: updatedCartItems,
      };
    });
  };

  checkout = () => {
    alert("Checkout functionality will be implemented here.");
  };

  render() {
    const { cartItems } = this.state;

    return (
      <div>
        <Navbar />
        <section className="cart">
          <h2>CART</h2>
          <div className="cart-table">
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
                    <td className="product">
                      <img
                        src={`stories/virtuemart/category/image_category_${product.id}.png`}
                        alt={product.name}
                        className="product-image"
                      />
                      <div className="product-details">
                        <h2 className="product-title">{product.name}</h2>
                      </div>
                    </td>
                    <td>&euro; {product.price.toFixed(2)}</td>
                    <td>
                      <input
                        type="number"
                        value={product.quantity}
                        onChange={(e) => this.updateQuantity(product.id, e.target.value)}
                        min={1}
                      />
                    </td>
                    <td>&euro; {(product.price * product.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className="cart-btn remove-btn"
                        onClick={() => this.removeProduct(product.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
            <button className="cart-btn checkout-btn" onClick={this.checkout}>
              CHECKOUT
            </button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Cart;

