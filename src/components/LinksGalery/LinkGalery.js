import React, { Component } from 'react'
import './LinkGalery.scss'

class LinkGalery extends Component {
  constructor () {
    super()

    this.itemGalery = this.itemGalery.bind(this)
  }

  itemGalery (section) {
    return (
      <div className={`link ${section.class}`}>
        <h3>{section.title}</h3>
        <p>{section.text}</p>
      </div>
    )
  }

  render () {
    const { linksGaleryData } = this.props
    return (
      <div className='links-galery'>
        <h2 className='section-header'>Work.</h2>
        { linksGaleryData.sections.map((section) => this.itemGalery(section)) }
      </div>
    )
  }
}

export default LinkGalery
