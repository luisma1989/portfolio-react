import React, {Component} from 'react'
import './Sentence.scss'

class Sentence extends Component {
  render() {
    const { sentenceData } = this.props;
    return pug`
      article.__sentence
        .__content
          span.smalltitle #{ sentenceData.title }
          span.icon.icon-review
          .phrase
            p #{ sentenceData.text }
    `;
  }
}

export default Sentence
