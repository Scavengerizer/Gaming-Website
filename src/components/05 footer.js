import React from "react";
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='col center'>
          <img src={logo} alt='' />
          <div className='footer-text'>
            <div className='row center'>
              <h4>Terms</h4>
              <h4>Privacy Policy</h4>
            </div>
          </div>
          <h4>Copyright ©. All Rights Reserved</h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
