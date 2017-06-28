import React from 'react'
import WOW from 'wowjs'
import './About.scss'
import imageFace from './assets/face.png'

class About extends React.Component {
  componentDidMount () {
    new WOW.WOW().init()
  }

  render () {
    return (
      <section className='about page' id='ABOUT'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-10 col-md-offset-1'>
              <div className='section_title'>
                <h2>SOBRE MÍ</h2>
                <p>SOY TÉCNICO SUPERIOR EN SISTEMAS DE TELECOMUNICACIONES E INFORMÁTICOS Y GRADUADO EN
                  SISTEMAS DE INFORMACIÓN, ADEMÁS CUENTO CON UN MÁSTER EN GESTIÓN DE PROYECTOS</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='about_phone wow fadeInLeft' data-wow-duration='1s' data-wow-delay='.5s'>
                <img className='wow bounceIn' data-wow-duration='1.5s' src={imageFace} alt='mi imagen' />
              </div>
            </div>
            <div className='col-md-6  wow fadeInRight' data-wow-duration='1.5s' data-wow-delay='1s'>
              <div className='inner_about_title'>
                <h2>CUENTO CON UNA GRAN ...</h2>
                <p>
                  ...HABILIDAD DE APRENDIZAJE AUTÓNOMO EN EL CAMPO DE LA INFORMÁTICA Y ESPECIALMENTE EN EL
                  APARTADO DEL DESARROLLO FRONT-END. DISPONGO DE UNA ALTA EXPERIENCIA DE TRABAJO EN EQUIPO,
                  ESPECIALMENTE EN EL MUNDO DEL DESARROLLO WEB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
