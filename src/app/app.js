import React, {Component} from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a href="tel:3192692412" className="phone-number">
              Call (319) 269-2412
            </a>
          </div>
        </div>
        <div className="content">
          <div id="about">
            <div className="about-text">
              <h1>About Toben Drainage</h1>
              <p>
                We are Jill and Kevin Toben of Toben Drainage, LLC. Located in Parkersburg, Iowa, we
                started our farm drainage business in 2004 with a Johnson plow and a Steiger
                tractor.
              </p>
              <p>
                In 2010 we purchased our first commercial Wolfe plow, and we most recently upgraded
                to a Wolfe PL540. Toben Drainage performs precision farm tiling using GPS
                technology, as well as commercial and residential drainage for new and existing
                construction.
              </p>
              <p>Toben Drainage also does septic installations and time of transfer inspections.</p>
            </div>
            <div className="about-images">
              <Carousel centerMode infiniteLoop autoPlay>
                <div>
                  <img src={require('../../assets/images/new_and_old-min.jpg')} height={300} />
                </div>
                <div>
                  <img src={require('../../assets/images/stringing-min.jpg')} height={300} />
                </div>
                <div>
                  <img src={require('../../assets/images/plow_side-min.jpg')} height={300} />
                </div>
                <div>
                  <img src={require('../../assets/images/backhoe-min.jpg')} height={300} />
                </div>
                <div>
                  <img src={require('../../assets/images/sunset-min.jpg')} height={300} />
                </div>
              </Carousel>
            </div>
          </div>
          <div id="services">
            <h1>Services We Provide</h1>
            <h4>Farm Drainage</h4>
            <ul>
              <li>Install drainage tile, plow in up to 15" dual wall</li>
              <li>Tile repairs</li>
              <li>Jetter service for clearing tile lines</li>
            </ul>

            <h4>Residential/Commercial Drainage</h4>
            <ul>
              <li>Install and repair of foundation drainage</li>
              <li>Downspout tile</li>
            </ul>

            <h4>Septic Systems</h4>
            <ul>
              <li>Install new septics, including conventional and alternative systems</li>
              <li>Repair existing septic systems</li>
              <li>Perform Time of Transfer inspections</li>
              <li>Jetter service for clearing clogged lines</li>
              <li>Sewer camera for diagnostics and locating lines</li>
            </ul>
          </div>
          <div id="contact">
            <h1>Contact Us</h1>
            <form
              className="email-form"
              action="mailto:kjtobe@yahoo.com?subject=Message from toben-drainage.com"
              method="post"
              encType="text/plain"
            >
              <span>Name:</span>
              <input type="text" name="name" />
              <span>E-mail:</span>
              <input type="text" name="mail" />
              <span>Message:</span>
              <textarea name="comment" />
              <input type="submit" value="Send Email" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
