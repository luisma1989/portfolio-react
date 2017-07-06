import React, {Component} from 'react'
import './Sentence.scss'

class Sentence extends Component {
  render() {
    return (
      <article className="__sentence">
        <div className="__content">
          <span className="smalltitle">LO QUE DICEN DE MÍ</span>
          <span className="icon icon-review" role="image"></span>
          <div className="phrase">
            <p>"He trabajado junto a David durante varios años y considero que es un gran profesional y una gran persona."</p>
          </div>
        </div>
      </article>
    )
  }
}

export default Sentence
