import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "../components/features/Cart/Cart";
import Home from "../components/features/Home/Home";
import Header from "../components/layouts/Header/Header";
import Footer from "../components/layouts/Footer/Footer";
import Login from "../components/features/Login/Login";
import Notfound from "../components/layouts/Notfound/Notfound";

export default function Routing() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="" component={Notfound} />
      </Switch>
      <Footer />
    </Router>
  );
}
