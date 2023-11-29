import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact Us/Contact';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="app-container-login"><Login /></div>} />
        <Route path="/Home" element={<Home />} />
        <Route path='/About' element={<div className="app-container-about"><About /></div>} />
        <Route path='/Contact' element={<div className="app-container-about"><Contact /></div>} />

      </Routes>
    </Router>
  );
}

export default App;
