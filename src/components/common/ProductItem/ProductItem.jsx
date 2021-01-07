/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import AddCart from "../AddCart/AddCart";
const ProductItem = (props) => {
  const { product } = props;
  return (
    <div>
      <div className="product-item">
        <div className="product-title">
          <Link to={"/detail/" + product.id}>{product.title}</Link>
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
            <Link to={"/detail/" + product.id}>
              <i className="fa fa-search" />
            </Link>
          </div>
        </div>
        <div className="product-price">
          <h3>
            <span>$</span>
            {product.price}
          </h3>
          <AddCart product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
