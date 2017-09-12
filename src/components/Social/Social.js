import React, {Component} from 'react'
import './Social.scss'

class Social extends Component {
  render () {
    return (
      <article className="__social">
        <div className="__row">
          <span className="icon icon-facebook"></span>
        </div>
        <div className="__row">
          <span className="icon icon-instagram"></span>
        </div>
        <div className="__row">
          <span className="icon icon-linkedin"></span>
        </div>
        <div className="__row">
          <span className="icon icon-twitter"></span>
        </div>
        <div className="__row">
          <span className="icon icon-youtube"></span>
        </div>
      </article>
    )
  }
}

export default Social
