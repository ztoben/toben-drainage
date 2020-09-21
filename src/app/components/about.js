import React, {Component} from 'react';
import {Carousel} from 'react-responsive-carousel';
import '../style/about.scss';

class About extends Component {
  render() {
    return (
      <div id="about">
        <div className="content-container">
          <div className="about-text">
            <h1>About Toben Drainage</h1>
            <p>
              We are Jill and Kevin Toben of Toben Drainage, LLC. Located in Parkersburg, Iowa, we
              started our farm drainage business in 2004 with a Johnson plow and a Steiger tractor.
            </p>
            <p>
              In 2010 we purchased our first commercial Wolfe plow, and we most recently upgraded to
              a Wolfe PL540. Toben Drainage performs precision farm tiling using GPS technology, as
              well as commercial and residential drainage for new and existing construction.
            </p>
            <p>Toben Drainage also does septic installations and time of transfer inspections.</p>
          </div>
          <div className="about-images">
            <Carousel centerMode infiniteLoop autoPlay>
              <div>
                <img
                  src={require('../../../assets/images/new_and_old-min.jpg').default}
                  height={300}
                />
              </div>
              <div>
                <img
                  src={require('../../../assets/images/stringing-min.jpg').default}
                  height={300}
                />
              </div>
              <div>
                <img
                  src={require('../../../assets/images/plow_side-min.jpg').default}
                  height={300}
                />
              </div>
              <div>
                <img src={require('../../../assets/images/backhoe-min.jpg').default} height={300} />
              </div>
              <div>
                <img src={require('../../../assets/images/sunset-min.jpg').default} height={300} />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
