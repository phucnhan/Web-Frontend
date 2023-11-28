import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar-container">
          <div className="company-logo">
          </div>
          <nav className="navbar">
            <ul className="nav-items">
              <li className="nav-item">
                <button className="nav-link">HOME</button>
              </li>
              <li className="nav-item">
                <button className="nav-link">ABOUT</button>
              </li>
              <li className="nav-item">
                <button className="nav-link">SHOP</button>
              </li>
              <li className="nav-item">
                <button className="nav-link">CONTACT</button>
              </li>
              <li className="nav-item">
                <button className="nav-link">
                  <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'var(--primary-color-alt)' }} />
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link">LOGIN</button>
              </li>
            </ul>
          </nav>
          <div className="menu-toggle">
            <i className="bx bx-menu"></i>
            <i className="bx bx-x"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
