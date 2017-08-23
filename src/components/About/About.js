import React from 'react'
import WOW from 'wowjs'
import './About.scss'
import imageFace from './assets/david_2.jpg'

class About extends React.Component {
  componentDidMount () {
    new WOW.WOW().init()
  }

  render () {
    const { aboutData } = this.props;
    return pug`
      article.about.page
        .row_about.wow.fadeInRight
          .info
            h2.smalltitle #{aboutData.title}
            p.p4 #{aboutData.text}
        .row_about
          .__contentImage
    `;
  }
}

export default About
