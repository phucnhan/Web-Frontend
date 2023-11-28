import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import './App.css'; // Import your global styles

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="app-container"><Login /></div>} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
