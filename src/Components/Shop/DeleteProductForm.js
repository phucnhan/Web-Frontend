import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useHistory from 'react-router-dom'
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import { Link } from 'react-router-dom';

const DeleteProductForm = () => {
    const [productId, setProductId] = useState('');
    const history = useNavigate(); // Use useHistory from 'react-router-dom'

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3001/api/products/products/${productId}`);
            alert('Product deleted successfully');
            history.push('/'); // Redirect to the home page or any other page after deletion
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('Error deleting product');
        }
    };

    return (
        <div className='delete-page'>
            <Navbar />
            <div className="fform-container">
                <form>
                    <label>Enter Product ID to Delete:</label>
                    <input
                        type="text"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                    />
                    <button onClick={handleDelete}>Delete Product</button>
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

export default DeleteProductForm;
