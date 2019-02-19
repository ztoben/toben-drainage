import React, {Component} from 'react';
import Header from './header';
import About from './about';
import Services from './services';
import Contact from './contact';
import Footer from './footer';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../style/app.scss';

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <About />
          <Services />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}
