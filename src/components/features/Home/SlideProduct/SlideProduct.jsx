/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import ApiService, {
  createParam,
  endpoint,
} from "../../../../core/service/api";
import ProductItem from "../../../common/ProductItem/ProductItem";
const SlideProduct = () => {
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
      console.log(res);
    }
    getProduct();
    return () => (isSubscribed = false);
  },[]);
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
        <Slider
          {...settings}
          className="row align-items-center product-slider product-slider-4"
        >
          {product &&
            product.map((item, index) => (
              <ProductItem product={item} key={index} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlideProduct;
