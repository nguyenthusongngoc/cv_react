import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "../components/features/Cart/Cart";
import Home from "../components/features/Home/Home";
import Header from "../components/layouts/Header/Header";
import Footer from "../components/layouts/Footer/Footer";
import Notfound from "../components/layouts/Notfound/Notfound";
import Login from "../components/features/Account/Login/Login";
import Regist from "../components/features/Account/Regist/Regist";
import User from "../components/features/User/User";
import { PrivateRoute, ProvideAuth } from "../core/auth/auth";

export default function Routing() {
  return (
    <ProvideAuth>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Regist} />
          <PrivateRoute path="/user">
            <User />
          </PrivateRoute>
          <Route path="" component={Notfound} />
        </Switch>
        <Footer />
      </Router>
    </ProvideAuth>
  );
}
