/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Slider from "react-slick";

const SlideMenu = () => {
  const [items] = useState([
    {
      caption: "Some text goes here that describes the image",
      img: "img/slider-1.jpg",
    },
    {
      caption: "Some text goes here that describes the image",
      img: "img/slider-2.jpg",
    },
    {
      caption: "Some text goes here that describes the image",
      img: "img/slider-3.jpg",
    },
  ]);
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <nav className="navbar bg-light">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    <i className="fa fa-home" />
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    <i className="fa fa-shopping-bag" />
                    Best Selling
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    <i className="fa fa-plus-square" />
                    New Arrivals
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    <i className="fa fa-female" />
                    Fashion &amp; Beauty
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    <i className="fa fa-child" />
                    Kids &amp; Babies Clothes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    <i className="fa fa-tshirt" />
                    Men &amp; Women Clothes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    <i className="fa fa-mobile-alt" />
                    Gadgets &amp; Accessories
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    <i className="fa fa-microchip" />
                    Electronics &amp; Accessories
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-md-6">
            <Slider {...settings} className="header-slider normal-slider">
              {items.map((item,index) => (
                <div className="header-slider-item" key={index}>
                  <img src={item.img}alt="Slider Image" />
                  <div className="header-slider-caption">
                    <p>{item.caption}</p>
                    <a className="btn" href>
                      <i className="fa fa-shopping-cart" />
                      Shop Now
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-md-3">
            <div className="header-img">
              <div className="img-item">
                <img src="img/category-1.jpg" alt="" />
                <a className="img-text" href>
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
              <div className="img-item">
                <img src="img/category-2.jpg" alt="" />
                <a className="img-text" href>
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideMenu;
