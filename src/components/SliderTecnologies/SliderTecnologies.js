import React, {Component} from 'react'
import Slider from 'react-slick'
import './SliderTecnologies.scss'
import imgHtml from './assets/HTML5.png'

class SliderTecnologies extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <section id="TESTIMONIAL" className="testimonial parallax">
        <div className="section_overlay">
          <div className="container">
            <div className="row">
              <div className="wow bounceInDown">
                <div id="carousel-example-caption-testimonial" className="carousel slide" data-ride="carousel">
                  <div className='container'>
                  	<Slider {...settings}>
                      <div className="carousel-inner">
                        <div className="item active">
                          <div className="container">
                            <div className="row">
                              <div className="text-center">
                                <img src={imgHtml} alt="" />
                                <div className="testimonial_caption">
                                    <h2>HTML5</h2>
                                    <h4><span>SR. Developer,</span> The Code Cafe</h4>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat.”</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <img src='http://placekitten.com/g/400/200' />
                      </div>
                      <div>
                        <img src='http://placekitten.com/g/400/200' />
                      </div>
                      <div>
                        <img src='http://placekitten.com/g/400/200' />
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SliderTecnologies
