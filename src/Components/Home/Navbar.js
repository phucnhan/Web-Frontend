import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="company-logo">D</div>
        <nav className="navbar">
          <ul className="nav-items">
            <li className="nav-item"><button className="nav-link">HOME</button></li>
            <li className="nav-item"><button className="nav-link">OFFER</button></li>
            <li className="nav-item"><button className="nav-link">SHOP</button></li>
            <li className="nav-item"><button className="nav-link">CONTACT</button></li>
          </ul>
        </nav>
        <div className="menu-toggle">
          <i className="bx bx-menu"></i>
          <i className="bx bx-x"></i>
        </div>
      </div>
    );
  }
}

export default Navbar;
