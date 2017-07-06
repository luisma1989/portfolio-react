import React, {Component} from 'react'
import './Social.scss'

class Social extends Component {
  render() {
    return pug`
      article.__social
        .__row
          i.material-icons computer
        .__row
          i.material-icons computer
        .__row
          i.material-icons computer
        .__row
          i.material-icons computer
        .__row
          i.material-icons computer
    `;
  }
}

export default Social
