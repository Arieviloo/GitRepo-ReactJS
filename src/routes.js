import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main/index';
import Repository from './pages/repository/index';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repo" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
