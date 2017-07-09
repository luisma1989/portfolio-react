import React, {Component} from 'react'
import './Sentence.scss'

class Sentence extends Component {
  render() {
    return pug`
      article.__sentence
        .__content
          span.smalltitle LO QUE DICEN DE MÍ
          span.icon.icon-review
          .phrase
            p He trabajado junto a David durante varios años y considero que es un gran profesional y una gran persona.
    `;
  }
}

export default Sentence
