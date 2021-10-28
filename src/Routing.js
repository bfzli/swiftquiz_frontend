import * as React from 'react';
import { BrowserRouter as Wrapper, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import Screen from './pages/Dashboard/Screen';

export default function Routing() {
  return (
    <Wrapper>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/dashboard/home">
          <Screen />
        </Route>
        <Route path="/dashboard">
          <Redirect to="/dashboard/home" />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Wrapper>
  )
}
