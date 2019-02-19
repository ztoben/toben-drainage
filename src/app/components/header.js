import React, {Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import '../style/header.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <span className="navigation-icon">
          <Link to="/navigation/">☰</Link>
        </span>
        <img
          className="logo"
          alt="logo"
          src={require('../../../assets/images/logo.png')}
          width="150"
        />
        <div className="link-container">
          <Link smooth to="/home#about">
            About
          </Link>
          <Link smooth to="/home#services">
            Services
          </Link>
          <Link smooth to="/home#contact">
            Contact
          </Link>
          <Link to="/gallery/">Gallery</Link>
          <a href="tel:3192692412" className="phone-number">
            Call (319) 269-2412
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
