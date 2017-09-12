import React, {Component} from 'react'
import './Sentence.scss'

class Sentence extends Component {
  render () {
    const { sentenceData } = this.props

    return (
      <article className="__sentence">
        <div className="__content">
          <span className="span.smalltitle">{ sentenceData.title }</span>
          <span className="span.icon.icon-review"></span>
          <div className="phrase">
            <p>{ sentenceData.text }</p>
          </div>
        </div>
      </article>
    )
  }
}

export default Sentence
