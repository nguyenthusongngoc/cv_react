/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { } from "react";
import { Link } from "react-router-dom";

const CartList = (props) => {
  const { cartList, onDelCart, onPlusQty, onMinusQty } = props;
  return (
    <tbody className="align-middle">
      {!cartList.length > 0 && (
        <tr className="text-center">
          <td style={{ height: "300px" }} colSpan={6}>
            You haven't any product in cart.
            <Link to="/"> Please click here to continue shopping!</Link>
          </td>
        </tr>
      )}
      {cartList.map((item, index) => (
        <tr key={index}>
          <td>
            <div className="img">
              <a href="/#">
                <img src={item.image} alt="Image" />
              </a>
              <p>{item.title}</p>
            </div>
          </td>
          <td>${item.price}</td>
          <td>
            <div className="qty">
              <button className="btn-minus" onClick={() => onMinusQty(item)}>
                <i className="fa fa-minus" />
              </button>
              <input type="text" defaultValue={item.quantity} />
              <button className="btn-plus" onClick={() => onPlusQty(item)}>
                <i className="fa fa-plus" />
              </button>
            </div>
          </td>
          <td>${item.price}</td>
          <td>
            <button onClick={() => onDelCart(item)}>
              <i className="fa fa-trash" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default CartList;