import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './Components/Home/Shop';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
