import React, {Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import {withRouter} from 'react-router-dom';
import '../style/header.scss';

class Header extends Component {
  render() {
    const {history} = this.props;

    return (
      <div className="header">
        <span className="navigation-icon">
          <Link to="/navigation/">☰</Link>
        </span>
        <img
          style={{cursor: 'pointer'}}
          className="logo"
          alt="logo"
          src={require('../../../assets/images/logo.png').default}
          width="150"
          onClick={() => {
            history.push('/home');
          }}
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

export default withRouter(Header);
