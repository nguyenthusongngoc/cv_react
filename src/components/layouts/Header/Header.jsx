import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="nav">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <Link to="/#" className="navbar-brand">MENU</Link>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav mr-auto">
                <Link to="/" className="nav-item nav-link active">Home</Link>
                <Link to="/#" className="nav-item nav-link">Products</Link>
                <Link to="/#" className="nav-item nav-link">Product Detail</Link>
                <Link to="/cart" className="nav-item nav-link">Cart</Link>
                <Link to="/#" className="nav-item nav-link">Checkout</Link>
                <Link to="/#" className="nav-item nav-link">My Account</Link>
                <div className="nav-item dropdown">
                  <Link to="/#" className="nav-link dropdown-toggle" data-toggle="dropdown">More Pages</Link>
                  <div className="dropdown-menu">
                    <Link to="/#" className="dropdown-item">Wishlist</Link>
                    <Link to="/login" className="dropdown-item">Login &amp; Register</Link>
                    <Link to="/#" className="dropdown-item">Contact Us</Link>
                  </div>
                </div>
              </div>
              <div className="navbar-nav ml-auto">
                <div className="nav-item dropdown">
                  <Link to="/#" className="nav-link dropdown-toggle" data-toggle="dropdown">User Account</Link>
                  <div className="dropdown-menu">
                    <Link to="/#" className="dropdown-item">Login</Link>
                    <Link to="/#" className="dropdown-item">Register</Link>
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
                <button><i className="fa fa-search" /></button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="user">
                <button href="wishlist.html" className="btn wishlist">
                  <i className="fa fa-heart" />
                  <span>(0)</span>
                </button>
                <button href="cart.html" className="btn cart">
                  <i className="fa fa-shopping-cart" />
                  <span>(0)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;