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
      'padding-top': Math.round(padTop / 2) - 65 + 'px',
      'padding-bottom': Math.round(padTop / 2) - 65 + 'px'
    })
  }

  render () {
    return (
      <section className='header parallax home-parallax page' id='HOME'>
        <div className='section_overlay'>
          <div className='container home-container'>
            <div className='row'>
              <div className='col-md-8 col-sm-8'>
                <div className='home_text wow bounceIn' data-wow-duration='1.5s'>
                  <h1>DAVID FERNÁNDEZ CAMACHO</h1>
                  <p>Desarrollador Front-End</p>
                  <div className='download-btn'>
                    <a className='btn wow fadeInRight' href='#ABOUT'>
                      SABER MÁS<i className='material-icons'>file_download</i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Header
