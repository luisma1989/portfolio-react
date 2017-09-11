import React, { Component } from 'react'
import './Experience.scss'

class Experience extends Component {
  render () {
    const { experienceData } = this.props
    return pug`
      article.__experience
        .__content
          .__title #{ experienceData.title}
          .__subtitle #{ experienceData.subtitle}
          .__contentRow
            ol.timeline
              li.timeline__entry
                span.timeline__id Actualidad
                div.job.timeline__content
                  h1.e3.timeline__heading Compañia globus
                  h2.timeline__subtitle Chef ejecutivo
                  p.p3.timeline__text (2 restaurantes, sala de banquetes y catering)Calle Varobskaia 135,  Kirov, Kirov Oblast, 610000 Rusia. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)
              li.timeline__entry
                span.timeline__id 2015 - 2016
                div.job.timeline__content.timeline__content--flipped
                  h1.e3.timeline__heading Compañia SPk-Neon
                  h2.timeline__subtitle Chef ejecutivo
                  p.p3.timeline__text (5 locales)Calle Lenina, 73, Kirov, Kirov Oblast, 610000 Rusia. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)
              li.timeline__entry
                span.timeline__id 2014 - 2015
                div.job.timeline__content
                  h1.e3.timeline__heading Hotel Hilton kirov, Restaurante Karin.
                  h2.timeline__subtitle Su chef
                  p.p3.timeline__text Oktyabrsky Prospect 145,610017 Rusia. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)
              li.timeline__entry
                span.timeline__id 2013 - 2014
                div.job.timeline__content.timeline__content--flipped
                  h1.e3.timeline__heading Restaurante колессо (koleso)
                  h2.timeline__subtitle Jefe de partida caliente
                  p.p3.timeline__text Calle Spasskaya, 18, Kirov, Kirov Oblast, 610000 Rusia Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)
              li.timeline__entry
                span.timeline__id 2009 - 2013
                div.job.timeline__content
                  h1.e3.timeline__heading Hotel Avant Torrejón ****
                  h2.timeline__subtitle Metre de hotel
                  p.p3.timeline__text Avant aeropuerto****Avenida de las estaciones s/n, Torrejón de Ardoz. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno.
              li.timeline__entry
                span.timeline__id 2008 - 2009
                div.job.timeline__content.timeline__content--flipped
                  h1.e3.timeline__heading Restaurante Sula
                  h2.timeline__subtitle Jefe de Rango
                  p.p3.timeline__text Calle Jorge Juan 33, 28001, Madrid. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)
              li.timeline__entry
                span.timeline__id 2007 - 2008
                div.job.timeline__content
                  h1.e3.timeline__heading Hotel Asset Torrejon ****
                  h2.timeline__subtitle Jefe de rango
                  p.p3.timeline__text Avant aeropuerto****Avenida de las estaciones s/n, Torrejón de Ardoz. Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.
              li.timeline__entry
                span.timeline__id 2006 - 2007
                div.job.timeline__content.timeline__content--flipped
                  h1.e3.timeline__heading Hotel Plaza Castilla *****
                  h2.timeline__subtitle Practicas relativas al curso de Restauración
                  p.p3.timeline__text C/Capitán Haya 43, Madrid España 28020.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)
              li.timeline__entry
                span.timeline__id 2006 - 2013
                div.job.timeline__content
                  h1.e3.timeline__heading Restaurante In-Zalakain
                  p.p3.timeline__text C/ Alvarez de Baena, 4, 28006 Madrid, España. Eventualmente ocasiones importantes 2006-2013.Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)
    `
  }
}

export default Experience
