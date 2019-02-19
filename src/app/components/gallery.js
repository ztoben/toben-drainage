import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';
import gallery from '../../../assets/gallery.json';
import '../style/gallery.scss';

class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        <div className="navigation">
          <Link to="/home">←Back</Link>
          <Link to="/home">
            <span className="close">&times;</span>
          </Link>
        </div>
        <div className="content">
          <Masonry
            updateOnEachImageLoad
            elementType="ul"
            style={{marginLeft: 'auto', marginRight: 'auto'}}
          >
            {gallery.map(file => {
              return (
                <li key={file}>
                  <img alt="file" src={require(`../../../assets/images/gallery/${file}`)} />
                </li>
              );
            })}
          </Masonry>
        </div>
      </div>
    );
  }
}

export default Gallery;
