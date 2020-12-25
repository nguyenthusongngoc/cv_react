import React from "react";

const CartAside = (props) => {
  const { onClearCart } = props;
  return (
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
