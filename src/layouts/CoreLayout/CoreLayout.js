import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header'
import About from '../../components/About'
import SliderTecnologies from '../../components/SliderTecnologies'
// import Nav from '../../components/Nav'
import './CoreLayout.scss'
import '../../styles/core.scss'

class CoreLayout extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <About />
        <SliderTecnologies />
      </div>
    )
  }
}


CoreLayout.propTypes = {
  children : PropTypes.element.isRequired
}

export default CoreLayout
