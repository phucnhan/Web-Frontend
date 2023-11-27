import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './Components/Home/Shop';
import Login from './Components/Login/Login';
import './App.css'; // Import your global styles

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="app-container"><Login /></div>} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
