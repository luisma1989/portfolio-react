import React, {Component} from 'react'
import './Social.scss'

class Social extends Component {
  render() {
    return pug`
      article.__social
        .__row
          span.icon.icon-facebook
        .__row
          span.icon.icon-instagram
        .__row
          span.icon.icon-linkedin
        .__row
          span.icon.icon-twitter
        .__row
          span.icon.icon-youtube
    `;
  }
}

export default Social
