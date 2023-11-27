import React from "react";
import "./Login.css";
import Navbar from "../Home/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Footer from "../Home/Footer";

library.add(faGooglePlusG, faFacebookF, faGithub, faLinkedinIn);

class Login extends React.Component {

    componentDidUpdate() {
        const container = document.getElementById('container');
        const signUpBtn = document.getElementById('register');
        const signInBtn = document.getElementById('login');

        if (container && signUpBtn && signInBtn) {
            signUpBtn.addEventListener('click', () => {
                container.classList.add("active");
            });

            signInBtn.addEventListener('click', () => {
                container.classList.remove("active");
            });
        }
    }

    render() {
        return (
            <div className="login-page">
                <Navbar />
                <div className="login-container" id="container">
                    <div className="form-container sign-up">
                        <form>
                            <h1>Create Account</h1>
                            <div className="social-icons">
                                <button className="icon"><FontAwesomeIcon icon={['fab', 'google-plus-g']} /></button>
                                <button className="icon"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></button>
                                <button className="icon"><FontAwesomeIcon icon={['fab', 'github']} /></button>
                                <button className="icon"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></button>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button className="sign-up-button">Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in">
                        <form>
                            <h1>Sign In</h1>
                            <div className="social-icons">
                                <button className="icon"><FontAwesomeIcon icon={['fab', 'google-plus-g']} /></button>
                                <button className="icon"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></button>
                                <button className="icon"><FontAwesomeIcon icon={['fab', 'github']} /></button>
                                <button className="icon"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></button>
                            </div>
                            <span>or use your email password</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <button className="forgot-password-button">Forget Your Password?</button>
                            <button className="sign-in-button">Sign In</button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Login;
