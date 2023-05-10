import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Accordion() {
  return (
    <div>
      <div className="sec-pd">
        <div className="container">
          <div className="col-12">
              <div className="hd-sec">
                <h5 className="sm-hd text-center border-bt-sm">Orbituaries</h5>
                <h3 className="secondary-hd text-center">Recent Orbituaries</h3>
              </div>
              <div className="slider-Box mt-5">
                     <Slider {...settings} className="mb-3">
                      <div><img src="assets/images/slider1.png" /></div>
                      <div><img src="assets/images/slider1.png" /></div>
                      <div><img src="assets/images/slider1.png" /></div>
                      <div><img src="assets/images/slider1.png" /></div>
                      <div><img src="assets/images/slider1.png" /></div>
                      <div><img src="assets/images/slider1.png" /></div>                      
                  </Slider>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2
};