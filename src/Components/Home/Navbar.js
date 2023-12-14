import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div className="navbar-container">
          <div className="company-logo">
          </div>
          <nav className="navbar">
            <ul className="nav-items">
              <li className="nav-link">
                <Link to="/home">HOME</Link>
              </li>
              <li className="nav-link">
                <Link to="/about">ABOUT</Link>
              </li>
              <li className="nav-link">
                <Link to="/shop">SHOP</Link>
              </li>
              <li className="nav-link">
                <Link to="/contact">CONTACT</Link>
              </li>
              <li className="nav-link">
                <Link to="/cart">
                  <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'var(--primary-color-alt)' }} />
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/login">LOGIN</Link>
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
