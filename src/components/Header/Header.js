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
    return (
      <section className='header parallax' id='HOME'>
        <div className='container home-container'>
          <div className='home_text wow bounceIn' data-wow-duration='1.5s'>
            <h1 className="title">
              <span>DAVID</span><br /> FERNÁNDEZ CAMACHO
            </h1>
          </div>
        </div>
      </section>
    )
  }
}

export default Header
