/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartStore = useSelector((state) => (state.cart ? state.cart : []));
  console.log("🚀 ~ file: Cart.jsx ~ line 7 ~ Cart ~ cartStore", cartStore);
  const [cartItem, setCartItem] = useState(cartStore);
  const getCost = () => {
    for (let i = 0; i < cartItem.length; i++){
      console.log(cartItem[i]);
    }
  }
  return (
    <div className="cart-page">
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
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody className="align-middle">
                    {cartItem.map((item, index) => (
                      <tr>
                        <td>
                          <div className="img">
                            <a href="/#">
                              <img src="img/product-1.jpg" alt="Image" />
                            </a>
                            <p>{item.title}</p>
                          </div>
                        </td>
                        <td>${item.price}</td>
                        <td>
                          <div className="qty">
                            <button className="btn-minus">
                              <i className="fa fa-minus" />
                            </button>
                            <input type="text" value = {getCost()} />
                            <button className="btn-plus">
                              <i className="fa fa-plus" />
                            </button>
                          </div>
                        </td>
                        <td>$99</td>
                        <td>
                          <button>
                            <i className="fa fa-trash" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cart-page-inner">
              <div className="row">
                <div className="col-md-12">
                  <div className="coupon">
                    <input type="text" placeholder="Coupon Code" />
                    <button>Apply Code</button>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="cart-summary">
                    <div className="cart-content">
                      <h1>Cart Summary</h1>
                      <p>
                        Sub Total<span>$99</span>
                      </p>
                      <p>
                        Shipping Cost<span>$1</span>
                      </p>
                      <h2>
                        Grand Total<span>$100</span>
                      </h2>
                    </div>
                    <div className="cart-btn">
                      <button>Update Cart</button>
                      <button>Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
