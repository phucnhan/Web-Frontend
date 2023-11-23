import React from 'react';
import Navbar from './Components/Home/Navbar';
import Footer from './Components/Home/Footer'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;