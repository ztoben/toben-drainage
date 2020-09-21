import React, {Component} from 'react';
import PhotoGallery from 'react-photo-gallery';
import Header from './header';
import gallery from '../../../assets/gallery.json';
import '../style/gallery.scss';

class Gallery extends Component {
  render() {
    const photos = gallery.map(({src, width, height}) => {
      return {
        src: require(`../../../assets/images/gallery/${src}`).default,
        width,
        height,
      };
    });

    return (
      <div className="gallery">
        <Header />
        <div className="content">
          <PhotoGallery margin={5} photos={photos} />
        </div>
      </div>
    );
  }
}

export default Gallery;
