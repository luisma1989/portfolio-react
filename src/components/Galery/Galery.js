import React, {Component} from 'react'
import './Galery.scss'
import image1 from './assets/image1.jpg'
import image2 from './assets/david.jpg'
import image3 from './assets/image3.jpg'

class Galery extends Component {
  render() {
    return pug`
      article.__galery
        figure.__row
          img.image1(src=image1)
          figcaption
            div hola
        figure.__row
          img.image2(src=image2)
          figcaption
            div hola
        figure.__row
          img.image3(src=image3)
          figcaption
            div hola
    `;
  }
}

export default Galery
