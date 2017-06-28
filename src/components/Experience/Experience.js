import React, {Component} from 'react'
import './Experience.scss'

class Experience extends Component {
  render() {
    return (
      <section id="FEATURES" className="features page">
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="section_title wow fadeIn" data-wow-duration="1s">
                        <h2>EXPERIENCIA</h2>
                        <p>Gran parte de mi experiencia se centra en el desarrollo de aplicaciones en la parte FRONT.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="feature_inner">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 right_no_padding wow fadeInLeft" data-wow-duration="1s">
                        <div data-toggle="modal" data-target="#repsolModal" contentEditable="false" className="left_single_feature">
                            <div><i className="material-icons">computer</i></div>
                            <h3>REPSOL</h3>
                            <p>Mi primer proyecto como desarrollador, pero con gran responsabilidad.</p>
                        </div>
                        <div data-toggle="modal" data-target="#bankiaModal" contentEditable="false" className="left_single_feature">
                            <div><i className="material-icons">devices_other</i></div>
                            <h3>BANKIA</h3>
                            <p>Proyecto en el que no estuve mucho tiempo pero aprendí nuevas tecnologías.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="img-mac">
                            <img className="wow bounceIn" data-wow-duration="1.5s" src="images/macbook.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-4 left_no_padding wow fadeInRight" data-wow-duration="1s">
                        <div data-toggle="modal" data-target="#bbvanetModal" contentEditable="false" className="right_single_feature">
                            <div><i className="material-icons">desktop_windows</i></div>
                            <h3>BBVA NET</h3>
                            <p>Primera de las etapas de mi paso por este proyecto de transformación digital.</p>
                        </div>
                        <div data-toggle="modal" data-target="#bbvamobileModal" contentEditable="false" className="right_single_feature">
                            <div><i className="material-icons">phone_android</i></div>
                            <h3>BBVA MOBILE</h3>
                            <p>¡Donde me encuentro!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
  }
}

export default Experience
