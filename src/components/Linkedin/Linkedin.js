import React, {Component} from 'react'
import './Linkedin.scss'

class Linkedin extends Component {
  render() {
    return (
      <section className="fun_facts parallax">
        <div className="section_overlay">
            <div className="container wow bounceInLeft" data-wow-duration="1s">
                <div className="row text-center">
                    <div className="col-md-12">
                        <a href="https://es.linkedin.com/in/luis-manuel-fernandez-camacho-1425a861">
                            <div className="single_fun_facts">
                                <i className="material-icons">loupe</i>
                                <h2><span className="counter_num">MY LINKEDIN</span> </h2>
                                <p>Echale un vistazo</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
  }
}

export default Linkedin
