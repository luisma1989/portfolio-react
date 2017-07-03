import React from 'react'
import WOW from 'wowjs'
import './About.scss'
import imageFace from './assets/david_2.jpg'

class About extends React.Component {
  componentDidMount () {
    new WOW.WOW().init()
  }

  render () {
    return (
      <section className='about page' id='ABOUT'>
        <div className='row_about'>
          <div className='about_phone wow fadeInLeft' data-wow-duration='1s' data-wow-delay='.5s'>
            <img className='wow bounceIn' data-wow-duration='1.5s' src={imageFace} alt='mi imagen' />
          </div>
        </div>
        <div className='row_about wow fadeInRight'>
          <div className='section_title'>
            <h2>SOBRE MÍ</h2>
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
          </div>
        </div>
      </section>
    )
  }
}

export default About
