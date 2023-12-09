import React, { useState } from "react";
import "./Login.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import { Link, Navigate } from 'react-router-dom';
library.add(faGooglePlusG, faFacebookF, faGithub, faLinkedinIn);

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);
    const [redirectToHome, setRedirectToHome] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        setError(null);

        const { email, password } = formData;

        // Make sure 'email' and 'password' are provided
        if (!email || !password) {
            setError("Email and password are required");
            return;
        }

        try {
            // Send login data to the backend
            const response = await fetch("http://localhost:3001/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Login successful, redirect to the home page or perform any other action
                console.log("Login successful");
                // Optionally, you can set a token in the localStorage or session storage
                // and use it for subsequent requests or to manage user sessions
                // localStorage.setItem("token", data.token);
                setRedirectToHome(true);
            } else {
                // Login failed, set error message
                setError(data.message || "Login failed");
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Internal server error during login");
        }
    };

    // Redirect to home if login is successful
    if (redirectToHome) {
        return <Navigate to="/home" />;
    }

    return (
        <div className="login-page">
            <Navbar />
            <div className="login-container" id="container">
                <div className="form-container sign-in">
                    <form>
                        <h1>Sign In</h1>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleInputChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleInputChange}
                        />
                        <button
                            className="sign-in-button"
                            onClick={handleSignIn}
                        >
                            Sign In
                        </button>
                        <div className="signup-link">
                            Don't have an account? <Link to="/Signup">Sign up</Link>
                        </div>
                        {error && <div className="error-message">{error}</div>}
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
