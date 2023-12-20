import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact Us/Contact';
import Shop from './Components/Shop/Shop';
import AddProductForm from './Components/Shop/AddProductForm';
import UpdateProductForm from './Components/Shop/UpdateProductForm';
import DeleteProductForm from './Components/Shop/DeleteProductForm';
// Example: A simple authentication check function
/*const isAuthenticated = () => {
  // Implement your authentication logic here
  // Return true if the user is authenticated, otherwise false
  // You may want to check if the user has a valid token, session, etc.
  return false; // For demonstration purposes, always redirect to login
};

/*const ProtectedRoute = ({ element, path }) => {
  if (isAuthenticated()) {
    return element;
  } else {
    // Redirect to the login page if not authenticated
    return <Navigate to="/Login" replace={true} />;
  }
};*/
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="app-container"><Home /></div>} />
        <Route path="/home" element={<div className="app-container"><Home /></div>} />
        <Route path="/Signup" element={<div className="app-container-login"><Signup /></div>} />
        <Route path="/Login" element={<div className="app-container-login"><Login /></div>} />
        <Route path='/About' element={<div className="app-container-about"><About /></div>} />
        <Route path='/Contact' element={<div className="app-container-about"><Contact /></div>} />
        <Route path="/Shop" element={<div className="app-container"><Shop /></div>} />
        <Route path="/addproduct" element={<div className="app-container"><AddProductForm /></div>} />
        <Route path="/updateproduct" element={<div className="app-container"><UpdateProductForm /></div>} />
        <Route path="/deleteproduct" element={<div className="app-container"><DeleteProductForm /></div>} />
      </Routes>
    </Router>
  );
}

export default App;
