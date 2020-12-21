/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Slider from "react-slick";

const Review = () => {
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="review">
      <div className="container-fluid">
        <Slider {...settings} className="row align-items-center review-slider normal-slider">
          <div>
            <div className="review-slider-item">
              <div className="review-img">
                <img src="img/review-1.jpg" alt="Image" />
              </div>
              <div className="review-text">
                <h2>Customer Name</h2>
                <h3>Profession</h3>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="review-slider-item">
              <div className="review-img">
                <img src="img/review-2.jpg" alt="Image" />
              </div>
              <div className="review-text">
                <h2>Customer Name</h2>
                <h3>Profession</h3>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="review-slider-item">
              <div className="review-img">
                <img src="img/review-3.jpg" alt="Image" />
              </div>
              <div className="review-text">
                <h2>Customer Name</h2>
                <h3>Profession</h3>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Review;
