import React from "react";
import "./Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
library.add(faGooglePlusG, faFacebookF, faGithub, faLinkedinIn);

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "", // Updated from 'username'
            email: "",
            password: "",
            redirectToHome: false,
        };
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSignUp = (e) => {
        e.preventDefault();
        const { name, email, password } = this.state;

        // Make sure 'name', 'email', and 'password' are provided
        if (!name || !email || !password) {
            console.error("Name, email, and password are required");
            return;
        }

        // Send registration data to the backend
        // (You can use fetch or any other method to send the data)
        // Example using fetch:
        fetch("http://localhost:3001/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Handle the response as needed
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    render() {
        return (
            <div className="login-page">
                <Navbar />

                <div className="login-container" id="container">
                    <div className="form-container sign-up">
                        <form>
                            <h1>Create Account</h1>
                            <span>or use your email for registration</span>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={this.handleInputChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={this.handleInputChange}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={this.handleInputChange}
                            />
                            <button
                                className="sign-up-button"
                                onClick={this.handleSignUp}
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                    <div className="form-container sign-in">
                        <form>
                            <h1>Sign In</h1>
                            <span>or use your email password</span>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={this.handleInputChange}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={this.handleInputChange}
                            />
                            <button
                                className="forgot-password-button"
                                onClick={this.handleForgotPassword}
                            >
                                Forget Your Password?
                            </button>
                            <button
                                className="sign-in-button"
                                onClick={this.handleSignIn}
                            >
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Login;
