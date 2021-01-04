/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  delCart,
  clearCart,
  plusQty,
  minusQty,
} from "../../../redux/cartReducer";
import CartAside from "./CartAside/CartAside";
import CartList from "./CartList/CartList";
const Cart = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cart);

  const handleClearCart = () => {
    const action = clearCart();
    dispatch(action);
  };

  const handleRemoveItem = (item) => {
    const action = delCart(item);
    dispatch(action);
  };

  const handlePlusQty = (item) => {
    const action = plusQty(item);
    dispatch(action);
  };

  const handleMinusQty = (item) => {
    const action = minusQty(item);
    dispatch(action);
  };

  return (
    <main className="cart-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div className="cart-page-inner">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="thead-dark">
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <CartList
                    cartList={cartList}
                    onDelCart={handleRemoveItem}
                    onPlusQty={handlePlusQty}
                    onMinusQty={handleMinusQty}
                  />
                </table>
              </div>
            </div>
          </div>
          <CartAside
            onClearCart={handleClearCart}
            cartList={cartList}
          />
        </div>
      </div>
    </main>
  );
};

export default Cart;
