import React from "react";
import ".Header.css"
class Header extends React.Component {
    render() {
        return (
            <div class="company-logo">D</div>
            <nav class="navbar">
              <ul class="nav-items">
                <li class="nav-item"><a href="#" class="nav-link">HOME</a></li>
                <li class="nav-item"><a href="#" class="nav-link">OFFER</a></li>
                <li class="nav-item"><a href="#" class="nav-link">SHOP</a></li>
                <li class="nav-item"><a href="#" class="nav-link">CONTACT</a></li>
              </ul>
            </nav>
            <div class="menu-toggle">
              <i class="bx bx-menu"></i>
              <i class="bx bx-x"></i>
            </div>
        )
    }

}
export default Header;