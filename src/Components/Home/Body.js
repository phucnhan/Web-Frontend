import React from "react";
import "./Body.css";

class Body extends React.Component {
    render() {
        return (
            <div>
                <section className="container section-1">
                    <div className="slogan">
                        <h1 className="company-title">DOWNTOWN TECH LIVER</h1>
                        <h2 className="company-slogan">
                            The biggest computer shop in the area where customers come first.
                        </h2>
                    </div>
                    <div className="home-watch-container">
                        <img
                            className="home-watch"
                            src="stories/virtuemart/category/resized/blog-thumb3.jpg"
                            alt="a watch in dark with shadow"
                        />
                    </div>
                </section>

                <section className="container section-2">
                    <div className="offer offer-1">
                        <img src="stories/virtuemart/category/image_category_2.png" alt="a computer in dark with white shadow" className="offer-img offer-1-img" />
                        <div className="offer-description offer-desc-1">
                            <h2 className="offer-title">Macbook pro</h2>
                            <p className="offer-hook">This is a Macbook pro. Nulla vulputate magna vel odio sagittis bibendium...</p>
                            <div className="cart-btn">ADD TO CART</div>
                        </div>
                    </div>

                    <div className="offer offer-2">
                        <img src="stories/virtuemart/category/image_category_3.png" alt="an opened computer" className="offer-img offer-2-img" />
                        <div className="offer-description offer-desc-2">
                            <h2 className="offer-title">Lenovo</h2>
                            <p className="offer-hook">This is a Lenovo. Nulla vulputate magna vel odio sagittis bibendium...</p>
                            <div className="cart-btn">ADD TO CART</div>
                        </div>
                    </div>
                </section>

                <section className="container section-3">
                    <div className="product product-1">
                        <img src="stories/virtuemart/category/image_category_4.png" alt="computer to sell" className="product-img" />
                        <span className="product_add_cart">ADD TO CART</span>
                    </div>

                    <div className="product product-2">
                        <img src="stories/virtuemart/category/image_category_5.png" alt="computer to sell" className="product-img" />
                        <span className="product_add_cart">ADD TO CART</span>
                    </div>

                    <div className="product product-3">
                        <img src="stories/virtuemart/category/image_category_6.png" alt="computer to sell" className="product-img" />
                        <span className="product_add_cart">ADD TO CART</span>
                    </div>

                    <div className="product product-4">
                        <img src="stories/virtuemart/category/image_category_7.png" alt="computer to sell" className="product-img" />
                        <span className="product_add_cart">ADD TO CART</span>
                    </div>
                </section>

                <section className="container section-4">
                    <div className="sponsor sponsor-1">
                        <img src="public\stories\virtuemart\manufacturer\brand_1.png" alt="" />
                    </div>
                    <div className="sponsor sponsor-2">
                        <img src="public\stories\virtuemart\manufacturer\brand_2.png" alt="" />
                    </div>
                    <div className="sponsor sponsor-3">
                        <img src="public\stories\virtuemart\manufacturer\brand_3.png" alt="" />
                    </div>
                    <div className="sponsor sponsor-4">
                        <img src="public\stories\virtuemart\manufacturer\brand_4.png" alt="" />
                    </div>
                </section>

                <section className="container section-5">
                    <h2 className="subscribe-input-label">NEWSLETTER</h2>
                    <div className="subscribe-container">
                        <input type="text" id="email-subscribe" placeholder="Email address..." />
                        <input type="submit" value="SUBSCRIBE" />
                    </div>
                </section>
            </div>
        );
    }
}

export default Body;