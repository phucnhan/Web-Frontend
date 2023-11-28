import React from "react";
import "./About.css";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

class About extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="about-page">
                    <div className="about">
                        <div className="about-container">
                            <div className="row d_flex">
                                <div className="titlepage">
                                    <h2>About Us</h2>
                                    <p>Welcome to NB, your premier destination for exquisite clocks. We take pride in offering a curated collection of timeless pieces that not only enhance your space but also tell a story of craftsmanship and precision.</p>
                                    <p>At NB, we believe that a well-chosen clock is more than just a timekeeping device; it's a statement of style and a reflection of your personality. Our carefully selected range includes a variety of styles, from classic and vintage designs to modern and avant-garde timepieces.</p>
                                    <p>Why choose NB for your clock needs?</p>
                                    <ul>
                                        <li>Quality Craftsmanship: Each clock in our collection is crafted with precision and attention to detail, ensuring longevity and accuracy.</li>
                                        <li>Diverse Styles: Whether you prefer a traditional wall clock, a sleek desk clock, or a unique statement piece, we have something to suit every taste.</li>
                                        <li>Expert Curation: Our team is dedicated to curating a collection that embodies both timeless elegance and contemporary design trends.</li>
                                        <li>Customer Satisfaction: Your satisfaction is our priority. We strive to provide exceptional customer service and a seamless shopping experience.</li>
                                    </ul>
                                    <p>Explore our collection and find the perfect clock to adorn your home or office. Time is of the essence, and we're here to make it beautiful.</p>
                                    <div className="read-more-container">
                                        <button className="read-more-button">Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default About;
