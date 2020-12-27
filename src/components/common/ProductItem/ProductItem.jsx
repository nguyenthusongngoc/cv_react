/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../../redux/cartReducer";
const ProductItem = (props) => {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    const quantity = item.quantity ? item.quantity : 1;
    const newItem = { ...item, quantity: quantity };
    const action = addCart(newItem);
    dispatch(action);
  };

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
          <button
            className="btn"
            onClick={() => {
              addToCart(product);
            }}
          >
            <i className="fa fa-shopping-cart" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
