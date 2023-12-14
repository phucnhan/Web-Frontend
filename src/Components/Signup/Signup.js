import React, { useState } from "react";
import "./Signup.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import { Link, Navigate } from 'react-router-dom';
library.add(faGooglePlusG, faFacebookF, faGithub, faLinkedinIn);

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [redirectToLogin, setRedirectToLogin] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError(null);

        const { name, email, password } = formData;

        if (!name || !email || !password) {
            setError("Name, email, and password are required");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("http://localhost:3001/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Registration successful");
                setRedirectToLogin(true);
            } else {
                setError(data.message || "Registration failed");
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Internal server error during registration");
        } finally {
            setLoading(false);
        }
    };

    // Redirect to login if registration is successful
    if (redirectToLogin) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="login-page">
            <Navbar />
            <div className="login-container" id="container">
                <div className="form-container sign-up">
                    <form>
                        <h1>Create Account</h1>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={handleInputChange}
                        />
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
                            className="sign-up-button"
                            onClick={handleSignUp}
                            disabled={loading}
                        >
                            {loading ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        <div className="signin-link">
                            Already have an account? <Link to="/login">Sign in</Link>
                        </div>
                        {error && <div className="error-message">{error}</div>}
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Signup;
