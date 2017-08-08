import React, {Component} from 'react'
import './Experience.scss'
import image1 from './assets/image1.jpg'

class Experience extends Component {

  render() {
    return pug`
      article.__experience
        .__content
          .__title Mi gran experiencia
          .__subtitle
            | Claim was created in 2012 by
            span  Tobias van Schneider
            | with the goal to collect & combine unique colors for my future projects.
          .__contentRow
            ol.timeline
              li.timeline__entry
                span.timeline__id Ep.1
                div.job.timeline__content
                  h1.e3.timeline__heading Titulo del trabajo
                  p.p3.timeline__text Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
              li.timeline__entry
                span.timeline__id Ep.2
                div.job.timeline__content.timeline__content--flipped
                  h1.e3.timeline__heading Titulo del trabajo
                  p.p3.timeline__text Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.

    `;
  }
}

export default Experience
