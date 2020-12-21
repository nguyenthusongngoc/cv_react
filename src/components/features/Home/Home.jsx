import React from "react";
import SlideBrand from "./SlideBrand/SlideBrand";
import SlideMenu from "./SlideMenu/SlideMenu";
import Feature from "./Feature/Feature";
import SlideProduct from "./SlideProduct/SlideProduct";
import Recent from "./Recent/Recent";
import Review from "./Review/Review";

const Home = () => {
  return (
    <div>
      <SlideMenu />
      <SlideBrand />
      <Feature />
      <div className="call-to-action">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>call us for any queries</h1>
            </div>
            <div className="col-md-6">
              <a href="tel:0123456789">+012-345-6789</a>
            </div>
          </div>
        </div>
      </div>
      <SlideProduct />
      <div className="newsletter">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h1>Subscribe Our Newsletter</h1>
            </div>
            <div className="col-md-6">
              <div className="form">
                <input type="email" defaultValue="Your email here" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Recent />
      <Review />
      <div className="portfolio-page">
        <div className="image-wrapper">
          <div className="portfolio-image dexp-image relative">
            <div className="carousel-item-portfolio">
              <img
                src="https://demo.drupalexp.com/8/evolve/sites/default/files/styles/image_800x600_/public/2016-11/portfolio-04a.jpg?itok=f4v-oxMQ"
                width={800}
                height={600}
                alt=""
              />
            </div>
          </div>
          <div className="overlay">
            <div className="overlay-inner">
              <div>
                <a
                  className="colorbox"
                  href="https://demo.drupalexp.com/8/evolve/sites/default/files/2016-11/portfolio-04a.jpg"
                  title="Perpetua incorrupte"
                >
                  <i className=" portfolio-icon fa fa-search" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-content">
          <h5 className="portfolio-title">
            <a href="/#" hrefLang="en">
              Perpetua incorrupte
            </a>
          </h5>
          <div className="portfolio-description">
            <p>Ganti6 perspiciatis unde omnis iste</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
