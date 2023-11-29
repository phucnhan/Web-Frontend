// Product.js
import React from "react";
import "./Product.css";

const products = [
    {
        id: 1,
        image: "stories/virtuemart/category/image_category_4.png",
        alt: "Product 1",
        addToCartText: "ADD TO CART",
        // Add additional details like price, etc.
    },
    {
        id: 2,
        image: "stories/virtuemart/category/image_category_5.png",
        alt: "Product 2",
        addToCartText: "ADD TO CART",
        // Add additional details like price, etc.
    },
    {
        id: 3,
        image: "stories/virtuemart/category/image_category_6.png",
        alt: "Product 3",
        addToCartText: "ADD TO CART",
        // Add additional details like price, etc.
    },
    {
        id: 4,
        image: "stories/virtuemart/category/image_category_7.png",
        alt: "Product 4",
        addToCartText: "ADD TO CART",
        // Add additional details like price, etc.
    },
    // Add more products as needed
];

const Product = () => {
    return (
        <section className="container section-3">
            <div className="product-row">
                {products.map((product) => (
                    <div key={product.id} className="product">
                        <img
                            src={product.image}
                            alt={product.alt}
                            className="product-img"
                        />
                        <span className="product_add_cart">{product.addToCartText}</span>
                        {/* Add price or additional details here */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Product;
