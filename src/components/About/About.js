import React from 'react'
import WOW from 'wowjs'
import './About.scss'

class About extends React.Component {
  componentDidMount () {
    new WOW.WOW().init()
  }

  render () {
    const { aboutData } = this.props

    return (
      <article className="about page">
        <div className="row_about wow fadeInRight">
          <div className="info">
            <h2 className="smalltitle">{aboutData.title}</h2>
            <p className="p4">{aboutData.text}</p>
          </div>
        </div>
        <div className="row_about">
          <div className="__contentImage"></div>
        </div>
      </article>
    )
  }
}

export default About
