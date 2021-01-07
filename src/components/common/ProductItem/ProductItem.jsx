/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import AddToCart from "../AddToCart/AddToCart";
const ProductItem = (props) => {
  const { product } = props;
  return (
    <div>
      <div className="product-item">
        <div className="product-title">
          <a href="/#">{product.title}</a>
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
            <img src={product.image} alt="Product Image" />
          </a>
          <div className="product-action">
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
            {product.price}
          </h3>
          <AddToCart product={product}/>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
