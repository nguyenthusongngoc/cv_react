import React from "react";
import Slider from "react-slick";

const SlideBrand = () => {
  const settings = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: false,
    arrows: false,
  };
  return (
    <div className="brand">
      <div className="container-fluid">
        <Slider {...settings} className="brand-slider">
          <div className="brand-item">
            <img src="img/brand-1.png" alt="" />
          </div>
          <div className="brand-item">
            <img src="img/brand-2.png" alt="" />
          </div>
          <div className="brand-item">
            <img src="img/brand-3.png" alt="" />
          </div>
          <div className="brand-item">
            <img src="img/brand-4.png" alt="" />
          </div>
          <div className="brand-item">
            <img src="img/brand-5.png" alt="" />
          </div>
          <div className="brand-item">
            <img src="img/brand-6.png" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SlideBrand;
