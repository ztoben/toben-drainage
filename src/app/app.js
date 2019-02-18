import React, {Component} from 'react';
import './app.scss';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <img
            className="logo"
            alt="logo"
            src={require('../../assets/images/logo.png')}
            width="150"
          />
          <div className="link-container">
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Contact</a>
            <a href="tel:3192692412" className="phone-number">
              Call (319) 269-2412
            </a>
          </div>
        </div>
        <div className="content" />
      </div>
    );
  }
}
