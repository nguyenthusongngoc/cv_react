import React, { useEffect } from "react";
import { useState } from "react";

const CartAside = (props) => {
  const { onClearCart, cartList } = props;
  const [total, setTotal] = useState();
  const [shippingCost, setShippingCost] = useState(15);
  const handleChangeCode = (e) => {
    const voucher = "ngocdeptrai";
    let result = e.target.value.replace(/\s+/g, "").toLowerCase();
    result === voucher ? setShippingCost(0) : setShippingCost(15);
  };
  useEffect(() => {
    let cost = 0;
    cartList.forEach((item) => {
      cost += Math.ceil(item.price * item.quantity * 10) / 10;
    });
    setTotal(cost);
  }, [cartList]);
  return (
    <div className="col-lg-4">
      <div className="cart-page-inner">
        <div className="row">
          <div className="col-md-12">
            <div className="coupon">
              <input
                type="text"
                placeholder="Coupon Code"
                onChange={(e) => handleChangeCode(e)}
              />
              <button>Apply Code</button>
            </div>
          </div>
          <div className="col-md-12">
            <div className="cart-summary">
              <div className="cart-content">
                <h1>Cart Summary</h1>
                <p>
                  Sub Total<span>${total}</span>
                </p>
                <p>
                  Shipping Cost<span>${shippingCost}</span>
                </p>
                <h2>
                  Grand Total<span>${total + shippingCost}</span>
                </h2>
              </div>
              <div className="cart-btn">
                <button onClick={() => onClearCart()}>Remove Cart</button>
                <button>Pay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartAside;
