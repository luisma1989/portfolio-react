import React, {Component} from 'react'
import './Sentence.scss'

class SecondSentence extends Component {
  render () {
    const { secondSentenceData } = this.props

    return (
      <article className="__secondSentence">
      <p className="smalltitle">{ secondSentenceData.title }</p>
        <div className="__content">
          <span className="span.icon.icon-review"></span>
          <div className="phrase">
            <p>{ secondSentenceData.text }</p>
          </div>
        </div>
      </article>
    )
  }
}

export default SecondSentence
