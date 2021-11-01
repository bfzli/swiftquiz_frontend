import * as React from 'react';
import {BrowserRouter as Wrapper, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import FormView from './pages/FormView'
import Contact from './pages/Contact';

export default function Routing() {
  return (
    <Wrapper>
        <Switch>
          <Route path="/" exact> 
            <Home />
          </Route>
          <Route path="/register">
            <FormView/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="*"> 
            <Error />
          </Route>
        </Switch>
    </Wrapper>
  )
}
