import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/images/slider1.png'

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
              <button className="slick-arrow slick-prev"></button>
              <button className="slick-arrow slick-next"></button>
              <div className="slider-Box mt-5">
                     <Slider {...settings} className="mb-3">
                      <div><img src={img1} width={400} /></div>
                      <div><img src={img1} width={400} /></div>
                      <div><img src={img1} width={400} /></div>
                      <div><img src={img1} width={400} /></div>
                    </Slider>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const settings = {
  arrows: true,
  autoplay: true,
  // autoplaySpeed: 200,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
};