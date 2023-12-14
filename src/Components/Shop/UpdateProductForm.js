// Import necessary modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './fform.css';
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { Link } from 'react-router-dom';

// UpdateProductForm component
const UpdateProductForm = () => {
    // Define the initial form data state
    const [formData, setFormData] = useState({
        id: '',  // Add id field for manual entry
        name: '',
        price: 0,
        description: '',
        image_path: '',
    });

    // Define the handleChange function to update form data on input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Define the handleSubmit function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate if ID is provided
        if (!formData.id) {
            alert('Please enter the product ID.');
            return;
        }

        try {
            // Make a PUT request to update the product data
            await axios.put(`http://localhost:3001/api/products/products/${formData.id}`, formData);
            alert('Product updated successfully');
            // Optionally, you can redirect the user or update the product list.
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Error updating product');
        }
    };

    // Render the component
    return (
        <div className='update-page'>
            <Navbar />
            <div className="fform-container">
                <form onSubmit={handleSubmit}>
                    <label>Product ID:</label>
                    <input type="text" name="id" value={formData.id} onChange={handleChange} />

                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />

                    <label>Price:</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} />

                    <label>Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} />

                    <label>Image Path:</label>
                    <input type="text" name="image_path" value={formData.image_path} onChange={handleChange} />

                    <button type="submit">Update Product</button>
                </form>
            </div>
            <li className="nav-link">
                <Link to="/addproduct">Insert</Link>
            </li>
            <li className="nav-link">
                <Link to="/updateproduct">Update</Link>
            </li>
            <li className="nav-link">
                <Link to="/deleteproduct">Delete</Link>
            </li>
            <Footer />
        </div>
    );
};

// Export the component
export default UpdateProductForm;
