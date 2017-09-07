import React, { Component } from 'react'
import Gallery from 'react-photo-gallery'
import Measure from 'react-measure'
import Lightbox from 'react-images'

import image1 from './assets/david_galeria_1.jpg'
import image2 from './assets/david_galeria_2.jpg'
import image3 from './assets/david_galeria_3.jpg'
import image4 from './assets/david_galeria_4.jpg'
import image5 from './assets/david_galeria_5.jpg'
import image6 from './assets/david_galeria_6.jpg'
import image7 from './assets/david_galeria_7.jpg'
import image8 from './assets/david_galeria_8.jpg'
import image9 from './assets/david_galeria_9.jpg'
import image10 from './assets/david_galeria_10.jpg'
import image11 from './assets/david_galeria_11.jpg'
import image12 from './assets/david_galeria_12.jpg'
import image13 from './assets/david_galeria_13.jpg'
import image14 from './assets/david_galeria_14.jpg'
import image15 from './assets/david_galeria_15.jpg'
import image16 from './assets/david_galeria_16.jpg'
import image17 from './assets/david_galeria_17.jpg'
import image18 from './assets/david_galeria_18.jpg'
import image19 from './assets/david_galeria_19.jpg'
import image20 from './assets/david_galeria_20.jpg'
import image21 from './assets/david_galeria_21.jpg'
import image22 from './assets/david_galeria_22.jpg'
import image23 from './assets/david_galeria_23.jpg'
import image24 from './assets/david_galeria_24.jpg'
import image25 from './assets/david_galeria_25.jpg'
import image26 from './assets/david_galeria_26.jpg'

export default class Galery extends Component {
  constructor () {
    super()
    this.state = {
      photos: PHOTO_SET,
      pageNum: 1,
      totalPages: 1,
      loadedAll: false,
      currentImage: 0
    }
    this.closeLightbox = this.closeLightbox.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
  }
  openLightbox (index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    })
  }
  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    })
  }
  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }
  gotoNext () {
    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }

  renderGallery () {
    return (
      <Measure whitelist={['width']}>
        {
          ({ width }) => {
            let cols = 3
            if (width >= 480) { cols = 2 }
            if (width >= 1024) { cols = 3 }
            if (width >= 1824) { cols = 4 }
            return <Gallery
              photos={ this.state.photos }
              cols={ cols }
              onClickPhoto={ this.openLightbox } />
          }
        }
      </Measure>
    )
  }

  render () {
    if (this.state.photos) {
      return (
        <div>
          {this.renderGallery()}
          <Lightbox
            theme={{container: { background: 'rgba(0, 0, 0, 0.85)' }}}
            images={this.state.photos}
            backdropClosesModal={true}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
            width={1600}
          />
        </div>
      )
    }
  }
}

const PHOTO_SET = [
  {
    src: image1,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 681,
    height: 1024,
    alt: 'image 1'
  },
  {
    src: image2,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image3,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image4,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image5,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image6,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image7,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image8,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image9,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image10,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image11,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image12,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image13,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image14,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image15,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image16,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image17,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image18,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image19,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image20,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image21,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image22,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image23,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image24,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image25,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  },
  {
    src: image26,
    sizes: [
      '(min-width: 480px) 50vw',
      '(min-width: 1024px) 33.3vw',
      '100vw'
    ],
    width: 600,
    height: 600,
    alt: 'image 2'
  }
]
