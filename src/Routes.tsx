import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './modules/Home';
import Search from './modules/Search';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
    </Switch>
  );
};

export default Routes;
