import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header'
import About from '../../components/About'
import Experience from '../../components/Experience'
import Sentence from '../../components/Sentence'
import Social from '../../components/Social'
import Galery from '../../components/Galery'
//import Contact from '../../components/Contact'
// import Nav from '../../components/Nav'

import './CoreLayout.scss'
import '../../styles/core.scss'

// Data
import headerData from '../../data/header.json'
import aboutData from '../../data/about.json'
import sentenceData from '../../data/sentence.json'
import experienceData from '../../data/experience.json'

class CoreLayout extends React.Component {
  render () {
    return (
      <div>
        <Header headerData={ headerData } />
        <Experience experienceData={ experienceData } />
        <About aboutData={ aboutData } />
        <Sentence sentenceData={ sentenceData } />
        <Social />
        <Galery />
      </div>
    )
  }
}


CoreLayout.propTypes = {
  children : PropTypes.element.isRequired
}

export default CoreLayout
