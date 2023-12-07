import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="container top-footer">
                    <div className="footer-item">
                        <h2 className="footer-title">ADDRESS</h2>
                        <div className="footer-items">
                            <h3>Ho Chi Minh</h3>
                            <h3>Ha Noi</h3>
                            <h3>Binh Duong</h3>
                        </div>
                    </div>
                    <div className="footer-item">
                        <h2 className="footer-title">SERVICES</h2>
                        <div className="footer-items">
                            <h3>All our services</h3>
                            <h3>FAQs</h3>
                            <h3>Contact us</h3>
                            <h3>Store Locator</h3>
                        </div>
                    </div>
                    <div className="footer-item">
                        <h2 className="footer-title">Legal & Corporate</h2>
                        <div className="footer-items">
                            <h3>Terms of Use</h3>
                            <h3>Privacy Notice</h3>
                            <h3>Cookies Notice</h3>
                            <h3>Impressum</h3>
                            <h3>Jobs</h3>
                        </div>
                    </div>
                    <div className="footer-item">
                        <h2 className="footer-title">FOLLOW US</h2>
                        <div className="footer-items">
                            <h3>Facebook</h3>
                            <h3>Tiktok</h3>
                            <h3>Youtube</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
