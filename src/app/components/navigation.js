import React, {Component} from 'react';
import '../style/navigation.scss';
import {HashLink as Link} from 'react-router-hash-link';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <div className="navigation-header">
          <h1>Navigation</h1>
          <Link to="/home">
            <span className="close">&times;</span>
          </Link>
        </div>
        <ul>
          <Link smooth to="/home#about">
            <li>About</li>
          </Link>

          <Link smooth to="/home#services">
            <li>Services</li>
          </Link>
          <Link smooth to="/home#contact">
            <li>Contact</li>
          </Link>
          <Link to="/gallery/">
            <li>Gallery</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Navigation;
