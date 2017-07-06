import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header'
import About from '../../components/About'
import SliderTecnologies from '../../components/SliderTecnologies'
import Experience from '../../components/Experience'
import Sentence from '../../components/Sentence'
import Social from '../../components/Social'
// import Nav from '../../components/Nav'
import './CoreLayout.scss'
import '../../styles/core.scss'

class CoreLayout extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Experience />
        <About />
        <Sentence />
        <Social />
        <SliderTecnologies />
      </div>
    )
  }
}


CoreLayout.propTypes = {
  children : PropTypes.element.isRequired
}

export default CoreLayout
