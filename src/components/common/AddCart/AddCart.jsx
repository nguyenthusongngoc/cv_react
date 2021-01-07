import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../../redux/cartReducer";

const AddCart = (props) => {
  const { product } = props;
  const dispatch = useDispatch();
  const addToCart = (item) => {
    console.log(item);
    const quantity = item.quantity ? item.quantity : 1;
    const newItem = { ...item, quantity: quantity };
    const action = addCart(newItem);
    dispatch(action);
  };
  return (
    <button onClick={() => addToCart(product)} className="btn">
      <i className="fa fa-shopping-cart" />
      Add Cart
    </button>
  );
};

export default AddCart;
