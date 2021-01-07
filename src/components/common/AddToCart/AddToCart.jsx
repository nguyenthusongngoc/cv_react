import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../../redux/cartReducer";

const AddToCart = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const addToCart = () => {
    const quantity = product.quantity ? product.quantity : 1;
    const newItem = { ...product, quantity: quantity };
    const action = addCart(newItem);
    dispatch(action);
  };
  return (
    <button onClick={() => addToCart()} className="btn">
      <i className="fa fa-shopping-cart" />
      Add Cart
    </button>
  );
};

export default AddToCart;
