/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Slider from "react-slick";

const SlideProduct = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="featured-product product">
      <div className="container-fluid">
        <div className="section-header">
          <h1>Featured Product</h1>
        </div>
        <Slider {...settings} className="row align-items-center product-slider product-slider-4">
          <div>
            <div className="product-item">
              <div className="product-title">
                <a href="/#">Product Name</a>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </div>
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="img/product-1.jpg" alt="Product Image" />
                </a>
                <div className="product-action">
                  <a href="/#">
                    <i className="fa fa-cart-plus" />
                  </a>
                  <a href="/#">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="/#">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="product-price">
                <h3>
                  <span>$</span>99
                </h3>
                <a className="btn" href>
                  <i className="fa fa-shopping-cart" />
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="product-item">
              <div className="product-title">
                <a href="/#">Product Name</a>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </div>
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="img/product-2.jpg" alt="Product Image" />
                </a>
                <div className="product-action">
                  <a href="/#">
                    <i className="fa fa-cart-plus" />
                  </a>
                  <a href="/#">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="/#">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="product-price">
                <h3>
                  <span>$</span>99
                </h3>
                <a className="btn" href>
                  <i className="fa fa-shopping-cart" />
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="product-item">
              <div className="product-title">
                <a href="/#">Product Name</a>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </div>
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="img/product-3.jpg" alt="Product Image" />
                </a>
                <div className="product-action">
                  <a href="/#">
                    <i className="fa fa-cart-plus" />
                  </a>
                  <a href="/#">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="/#">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="product-price">
                <h3>
                  <span>$</span>99
                </h3>
                <a className="btn" href>
                  <i className="fa fa-shopping-cart" />
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="product-item">
              <div className="product-title">
                <a href="/#">Product Name</a>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </div>
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="img/product-4.jpg" alt="Product Image" />
                </a>
                <div className="product-action">
                  <a href="/#">
                    <i className="fa fa-cart-plus" />
                  </a>
                  <a href="/#">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="/#">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="product-price">
                <h3>
                  <span>$</span>99
                </h3>
                <a className="btn" href>
                  <i className="fa fa-shopping-cart" />
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="product-item">
              <div className="product-title">
                <a href="/#">Product Name</a>
                <div className="ratting">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </div>
              <div className="product-image">
                <a href="product-detail.html">
                  <img src="img/product-5.jpg" alt="Product Image" />
                </a>
                <div className="product-action">
                  <a href="/#">
                    <i className="fa fa-cart-plus" />
                  </a>
                  <a href="/#">
                    <i className="fa fa-heart" />
                  </a>
                  <a href="/#">
                    <i className="fa fa-search" />
                  </a>
                </div>
              </div>
              <div className="product-price">
                <h3>
                  <span>$</span>99
                </h3>
                <a className="btn" href>
                  <i className="fa fa-shopping-cart" />
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SlideProduct;
