// Shop.js
import React from "react";

import Product from "./Product";
import "./Shop.css";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const Shop = () => {
    return (
        <div className="shop-page">
            <Navbar />
            <div class="titlepage">
                <h2>Clock At Our shop</h2>
                <p>
                    Immerse yourself in the world of timeless elegance with ourexquisite clock collection. Each clock is a testament to meticulous craftsmanship, seamlessly blending artistry and functionality. Experience the beauty of precise timekeeping as our clocks adorn your space with sophistication. More than mere instruments, our clocks are statements of style and refinement. Elevate your home or office with these unique timepieces and discover the essence of time in a whole new light.
                </p>
            </div>
            <div className="products">
                <Product />
            </div>
            <div class="read-more">
                <a class="read_more" href="#">Read More</a>
            </div>
            <Footer />
        </div>
    );
};

export default Shop;
