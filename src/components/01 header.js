import React from "react";
import logo from "../assets/images/logo.png";
import cart from "../assets/svg/cart.svg";

function Header() {
  return (
    <header>
      <div className='header row v-center'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>
        <nav className='row v-center'>
          <ul className='nav-links open row'>
            <li>
              <a href='#' className='link'>
                Featured
              </a>
            </li>
            <li>
              <a href='#' className='link'>
                Offers
              </a>
            </li>
            <li>
              <a href='#' className='link'>
                Upcoming
              </a>
            </li>
            <div className='cart v-center'>
              <img src={cart} alt='' />
            </div>
          </ul>

          <div className='hamburger'>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
