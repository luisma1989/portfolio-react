import React from 'react'
import $ from 'jquery'
import './Header.scss'

class Header extends React.Component {
  componentDidMount () {
    const widnowHeight = $(window).height()
    const containerHeight = $('.home-container').height()
    const padTop = widnowHeight - containerHeight
    $('.home-container').css({
      'padding-top': Math.round(padTop / 2) + 'px',
      'padding-bottom': Math.round(padTop / 2) + 'px'
    })
  }

  render () {
    const { headerData } = this.props
    return (
      <article className="header parallax">
        <div className="container home-container">
          <div className="home_text wow bounceIn">
            <h1 className="title">
              <span>{headerData.name}</span>
              <br/>
              {headerData.apellidos}
            </h1>
          </div>
        </div>
      </article>
    )
  }
}

export default Header
