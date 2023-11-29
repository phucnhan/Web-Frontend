// Cart.js
import React from "react";
import "./Cart.css";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

class Cart extends React.Component {
    render() {
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
                                <tr>
                                    {/* Product 1 */}
                                    <td className="product">
                                        <img
                                            src="stories/virtuemart/category/image_category_2.png"
                                            alt="Product 1"
                                            className="product-image"
                                        />
                                        <div className="product-details">
                                            <h2 className="product-title">Anne Klein Watch</h2>
                                            <p className="product-description">
                                                Rose Gold-Tone Watch with Swarovski Crystals and Leather Band...
                                            </p>
                                        </div>
                                    </td>
                                    <td>&euro; 150.00</td>
                                    <td>
                                        <input type="number" defaultValue={1} min={1} />
                                    </td>
                                    <td>&euro; 150.00</td>
                                    <td>
                                        <button className="cart-btn remove-btn">Remove</button>
                                    </td>
                                </tr>
                                <tr>
                                    {/* Product 2 */}
                                    <td className="product">
                                        <img
                                            src="stories/virtuemart/category/image_category_3.png"
                                            alt="Product 2"
                                            className="product-image"
                                        />
                                        <div className="product-details">
                                            <h2 className="product-title">Another Watch</h2>
                                            <p className="product-description">
                                                Description for another watch...
                                            </p>
                                        </div>
                                    </td>
                                    <td>&euro; 120.00</td>
                                    <td>
                                        <input type="number" defaultValue={2} min={1} />
                                    </td>
                                    <td>&euro; 240.00</td>
                                    <td>
                                        <button className="cart-btn remove-btn">Remove</button>
                                    </td>
                                </tr>
                                <tr>
                                    {/* Product 3 */}
                                    <td className="product">
                                        <img
                                            src="stories/virtuemart/category/image_category_4.png"
                                            alt="Product 3"
                                            className="product-image"
                                        />
                                        <div className="product-details">
                                            <h2 className="product-title">Third Watch</h2>
                                            <p className="product-description">
                                                Description for the third watch...
                                            </p>
                                        </div>
                                    </td>
                                    <td>&euro; 180.00</td>
                                    <td>
                                        <input type="number" defaultValue={1} min={1} />
                                    </td>
                                    <td>&euro; 180.00</td>
                                    <td>
                                        <button className="cart-btn remove-btn">Remove</button>
                                    </td>
                                </tr>
                                {/* Add more rows for additional products if needed */}
                            </tbody>
                        </table>
                    </div>
                    <div className="summary-table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>Total Items:</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>Total Price:</td>
                                    <td>&euro; 570.00</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="cart-btn checkout-btn">CHECKOUT</button>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Cart;
