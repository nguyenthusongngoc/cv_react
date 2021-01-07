/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import ApiService, {
  createParam,
  endpoint,
} from "../../../../core/service/api";
import Loading from "../../../layouts/Loading/Loading";
const Recent = () => {
  const [product, setProduct] = useState();
  let query = {
    limit: 5,
  };
  query = createParam(query);
  useEffect(() => {
    let isSubscribed = true;
    async function getProduct() {
      const res = await ApiService(endpoint.products + query);
      if (isSubscribed) {
        setProduct(res.data);
      }
    }
    getProduct();
    return () => (isSubscribed = false);
  }, []);
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
    <div className="recent-product product">
      <div className="container-fluid">
        <div className="section-header">
          <h1>Recent Product</h1>
        </div>
        <Slider
          {...settings}
          className="row align-items-center product-slider product-slider-4"
        >
          {product ? (
            product.map((item, index) => (
              <div className="product-item" key={index}>
                <div className="product-title">
                  <a href="/#">{item.title}</a>
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
                    <img src={item.image} alt="Product Image" />
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
                    <span>$</span>
                    {item.price}
                  </h3>
                  <a className="btn" href>
                    <i className="fa fa-shopping-cart" />
                    Buy Now
                  </a>
                </div>
              </div>
            ))
          ) : (
            <Loading />
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Recent;
