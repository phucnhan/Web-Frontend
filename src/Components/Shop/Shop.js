// Shop.js
import React from "react";
import ShopImage from "./ShopImage";
import Product from "./Product";
import "./Shop.css";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const Shop = () => {
    return (
        <div className="shop-page">
            <Navbar />
            <div id="about" className="shop">
                <div className="container-fluid">
                    <div className="row">
                        <ShopImage />
                        <div className="col-md-7 padding_right0">
                            <div className="max_width">
                                <div className="titlepage">
                                    <h2>Best Clock At Our shop</h2>
                                    <p>
                                        Immerse yourself in the world of timeless elegance with our
                                        exquisite clock collection. Each clock is a testament to
                                        meticulous craftsmanship, seamlessly blending artistry and
                                        functionality. Experience the beauty of precise timekeeping
                                        as our clocks adorn your space with sophistication. More
                                        than mere instruments, our clocks are statements of style
                                        and refinement. Elevate your home or office with these
                                        unique timepieces and discover the essence of time in a
                                        whole new light.
                                    </p>
                                    <a className="read_more" href="#">
                                        Shop Now
                                    </a>
                                </div>
                                <Product />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Shop;
