import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

import SliderImages from "../api-files/sliderdata";
const Slickpage = () => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 4000, 
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="slider-page">
        <div className="tending">
          <h2>TRENDING</h2>
        </div>
        <Slider {...settings}>
          {SliderImages.map((item) => {
            return (
              <>
                <div className="slider-image-box">
                  <img src={item.image} alt={item.titile} />
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Slickpage;
