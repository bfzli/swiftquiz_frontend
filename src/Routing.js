import * as React from 'react';
import {BrowserRouter as Wrapper, Switch, Route} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Error from './pages/Error';

export default function Routing() {
  return (
    <Wrapper>
        <Switch>
          <Route path="/" exact> 
            <Home />
          </Route>
          <Route path="/about-us"> 
            <h1>is workign</h1>
          </Route>
          <Route path="*"> 
            <Error />
          </Route>
        </Switch>
    </Wrapper>
  )
}
