/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Feature = () => {
  return (
    <div>
      <div className="feature">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content">
                <i className="fab fa-cc-mastercard" />
                <h2>Secure Payment</h2>
                <p>Lorem ipsum dolor sit amet consectetur elit</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content">
                <i className="fa fa-truck" />
                <h2>Worldwide Delivery</h2>
                <p>Lorem ipsum dolor sit amet consectetur elit</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content">
                <i className="fa fa-sync-alt" />
                <h2>90 Days Return</h2>
                <p>Lorem ipsum dolor sit amet consectetur elit</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 feature-col">
              <div className="feature-content">
                <i className="fa fa-comments" />
                <h2>24/7 Support</h2>
                <p>Lorem ipsum dolor sit amet consectetur elit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="category">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="category-item ch-400">
                <img src="img/category-3.jpg" />
                <a className="category-name" href>
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="category-item ch-250">
                <img src="img/category-4.jpg" />
                <a className="category-name" href>
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
              <div className="category-item ch-150">
                <img src="img/category-5.jpg" />
                <a className="category-name" href>
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="category-item ch-150">
                <img src="img/category-6.jpg" />
                <a className="category-name" href>
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
              <div className="category-item ch-250">
                <img src="img/category-7.jpg" />
                <a className="category-name" href>
                  <p>Some text goes here that describes the image</p>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="category-item ch-400">
                <img src="img/category-8.jpg" />
                <a className="category-name" href>
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

export default Feature;
