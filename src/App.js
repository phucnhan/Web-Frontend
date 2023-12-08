import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact Us/Contact';
import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/Cart';

// Example: A simple authentication check function
const isAuthenticated = () => {
  // Implement your authentication logic here
  // Return true if the user is authenticated, otherwise false
  // You may want to check if the user has a valid token, session, etc.
  return false; // For demonstration purposes, always redirect to login
};

// ProtectedRoute component for handling authenticated routes
const ProtectedRoute = ({ element, path }) => {
  if (isAuthenticated()) {
    return element;
  } else {
    // Redirect to the login page if not authenticated
    return <Navigate to="/Login" />;
  }
};

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<div className="app-container"><Home /></div>}
        />
        <Route
          path="/home"
          element={<div className="app-container"><Home /></div>}
        />
        <Route path="/Login" element={<div className="app-container-login"><Login /></div>} />
        <Route path='/About' element={<div className="app-container-about"><About /></div>} />
        <Route path='/Contact' element={<div className="app-container-about"><Contact /></div>} />
        <Route path="/Shop" element={<div className="app-container"><ProtectedRoute element={<Shop />} /></div>} />
        <Route path='/Cart' element={<div className="app-container-about"><Cart /></div>} />
      </Routes>
    </Router>
  );
}

export default App;
