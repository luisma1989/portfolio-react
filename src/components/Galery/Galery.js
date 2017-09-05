import React from 'react';
import Gallery from 'react-photo-gallery';
 
export default class Galery extends React.Component {
    render() {
    return (
        <Gallery photos={PHOTO_SET} onClickPhoto={this.openLightbox}/>
    );
    }
}
const PHOTO_SET = [
  {
    src: 'http://lorempixel.com/400/200',
    srcset: [
      'http://lorempixel.com/400/200 1024w',
      'http://lorempixel.com/400/200 800w',
      'http://lorempixel.com/400/200 500w',
      'http://lorempixel.com/400/200 320w',
    ],
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 681,
    height: 1024,
    alt: 'image 1',
  },
  {
    src: 'http://lorempixel.com/400/200',
    srcset: [
      'http://lorempixel.com/400/200 1024w',
      'http://lorempixel.com/400/200 800w',
      'http://lorempixel.com/400/200 500w',
      'http://lorempixel.com/400/200 320w',
    ],
    sizes:[
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2',
  }
];