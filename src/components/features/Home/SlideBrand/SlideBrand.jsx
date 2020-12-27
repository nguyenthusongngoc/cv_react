import React, { useState } from "react";
import Slider from "react-slick";

const SlideBrand = () => {
  const [brand] = useState([
    {
      img: "img/brand-1.png",
    },
    {
      img: "img/brand-2.png",
    },
    {
      img: "img/brand-3.png",
    },
    {
      img: "img/brand-4.png",
    },
    {
      img: "img/brand-5.png",
    },
    {
      img: "img/brand-6.png",
    },
  ]);
  const settings = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
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
          {brand.map((item, index) => (
            <div className="brand-item" key={index}>
              <img src={item.img} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlideBrand;
