import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/features/Home';
import Banner from '../components/layouts/Banner/Banner';

const Router = (props) => (
  <Router>
    <Banner />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);


export default Router;
