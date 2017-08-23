import React from 'react'
import $ from 'jquery'
// import { IndexLink, Link } from 'react-router'
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
    const {headerData} = this.props;
    return pug`
      article.header.parallax
        .container.home-container
          .home_text.wow.bounceIn
            h1.title
              span #{headerData.name}
              br
              | #{headerData.apellidos}
    `;
  }
}

export default Header
