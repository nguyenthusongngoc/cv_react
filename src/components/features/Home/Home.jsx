import React from "react";
import SlideBrand from "./SlideBrand/SlideBrand";
import SlideMenu from "./SlideMenu/SlideMenu";
import Feature from "./Feature/Feature";
import SlideProduct from "./SlideProduct/SlideProduct";
import Recent from "./Recent/Recent";
import Review from "./Review/Review";

const Home = () => {
  return (
    <main>
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
    </main>
  );
};

export default Home;
