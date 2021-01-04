import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartList = useSelector((state) => state.cart);

  return (
    <header>
      <div className="nav">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-dark">
            <Link to="/#" className="navbar-brand">
              MENU
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <nav className="navbar mr-auto">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-item nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/#" className="nav-item nav-link">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/#" className="nav-item nav-link">
                      Product Detail
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/#" className="nav-item nav-link">
                      Checkout
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/#" className="nav-item nav-link">
                      My Account
                    </Link>
                  </li>
                </ul>

                <div className="nav-item dropdown">
                  <Link
                    to="/#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    More Pages
                  </Link>
                  <div className="dropdown-menu">
                    <Link to="/#" className="dropdown-item">
                      Wishlist
                    </Link>
                    <Link to="/login" className="dropdown-item">
                      Login &amp; Register
                    </Link>
                    <Link to="/#" className="dropdown-item">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </nav>
              <div className="navbar-nav ml-auto">
                <div className="nav-item dropdown">
                  <Link
                    to="/#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    User Account
                  </Link>
                  <div className="dropdown-menu">
                    <Link to="/login" className="dropdown-item">
                      Login
                    </Link>
                    <Link to="/login" className="dropdown-item">
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="logo">
                <Link to="/">
                  <img src="img/logo.png" alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="search">
                <input type="text" placeholder="Search" />
                <button>
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="user">
                <Link to="/cart" className="btn wishlist">
                  <i className="fa fa-heart" />
                  <span>(0)</span>
                </Link>
                <Link to="/cart" className="btn cart">
                  <i className="fa fa-shopping-cart" />
                  <span>({cartList.length})</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
