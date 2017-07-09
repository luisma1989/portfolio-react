import React from 'react'
import WOW from 'wowjs'
import './About.scss'
import imageFace from './assets/david_2.jpg'

class About extends React.Component {
  componentDidMount () {
    new WOW.WOW().init()
  }

  render () {
    return pug`
      article.about.page
        .row_about.wow.fadeInRight
          .info
            h2.smalltitle SOBRE MÍ
            p.p4 Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.
        .row_about
          .__contentImage
    `;
  }
}

export default About
