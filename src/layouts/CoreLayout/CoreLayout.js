import React from 'react'
import Header from '../../components/Header'
import About from '../../components/About'
import Experience from '../../components/Experience'
import Sentence from '../../components/Sentence'
import Social from '../../components/Social'
import LinksGalery from '../../components/LinksGalery'
import SecondSentence from '../../components/SecondSentence'

import './CoreLayout.scss'
import '../../styles/core.scss'

// Data
import headerData from '../../data/header.json'
import aboutData from '../../data/about.json'
import sentenceData from '../../data/sentence.json'
import secondSentenceData from '../../data/secondSentence.json'
import experienceData from '../../data/experience.json'
import linksGaleryData from '../../data/linksGalery.json'

class CoreLayout extends React.Component {
  render () {
    return (
      <div>
        <Header headerData={headerData} />
        <Experience experienceData={experienceData} />
        <About aboutData={aboutData} />
        <Sentence sentenceData={sentenceData} />
        <Social />
        <SecondSentence secondSentenceData={secondSentenceData} />
        <LinksGalery linksGaleryData={linksGaleryData} />
      </div>
    )
  }
}

export default CoreLayout
