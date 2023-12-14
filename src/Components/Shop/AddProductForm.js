import React, { useState } from 'react';
import axios from 'axios';
import './fform.css';
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { Link } from 'react-router-dom';

const AddProductForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        price: 0,
        description: '',
        image_path: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3001/api/products/products', formData);
            alert('Product added successfully');
            // Optionally, you can redirect the user to the product page or update the product list.
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Error adding product');
        }
    };

    return (
        <div className='insert-page'>
            <Navbar />
            <div className="fform-container">
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />

                    <label>Price:</label>
                    <input type="number" name="price" value={formData.price} onChange={handleChange} />

                    <label>Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} />

                    <label>Image Path:</label>
                    <input type="text" name="image_path" value={formData.image_path} onChange={handleChange} />

                    <button type="submit">Add Product</button>
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

export default AddProductForm;
