import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div class="container top-footer">
                    <div class="footer-item">
                        <h2 class="footer-title">ADDRESS</h2>
                        <div class="footer-items">
                            <h3>Adipisicing elit.</h3>
                            <h3>Adipisicing elit.</h3>
                            <h3>Adipisicing st18</h3>
                        </div>
                    </div>
                    <div class="footer-item">
                        <h2 class="footer-title">SERVICES</h2>
                        <div class="footer-items">
                            <h3>Adipisicing elit.</h3>
                            <h3>Adipisicing elit.</h3>
                            <h3>Adipisicing elit.</h3>
                            <h3>Adipisicing elit.</h3>
                            <h3>Adipisicing elit.</h3>
                        </div>
                    </div>
                    <div class="footer-item">
                        <h2 class="footer-title">SUPPLIERS</h2>
                        <div class="footer-items">
                            <h3>Adipisicing elit.</h3>
                            <h3>Adipisicing elit.</h3>
                            <h3>Adipisicing elit.</h3>
                            <h3>Adipisicing elit.</h3>
                            <h3>Adipisicing elit.</h3>
                        </div>
                    </div>
                    <div class="footer-item">
                        <h2 class="footer-title">INVESTMENT</h2>
                        <div class="footer-items">
                            <h3>Adipisicing elit.</h3>
                            <h3>Adipisicing elit.</h3>
                            <h3>Adipisicing elit.</h3>
                            <h3>Adipisicing elit.</h3>
                            <h3>Adipisicing elit.</h3>
                        </div>
                    </div>
                </div>
                <div class="container end-footer">
                    <div class="copyright">copyright © 2021 - Present • <b>DOWNTOWN TECH LIVER</b></div>
                    <a class="designer" href="#">Thierry M</a>
                </div>
            </div>
        )
    }
}

export default Footer;