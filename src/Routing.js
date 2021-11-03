import * as React from 'react';
import { BrowserRouter as Wrapper, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import FormView from './pages/FormView'
import Contact from './pages/Contact';
import Screen from './pages/Dashboard/Screen';
import Play from './pages/Play'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import TestingLoaders from './pages/TestingLoaders';


export default function Routing() {

  AOS.init({
    duration: 800,
    disable: "mobile",
    once: true,
  });

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
        <Route path="/dashboard">
          <Redirect to="/dashboard/home" />
        </Route>
        <Route path="/play">
          <Play />
        </Route>
        <Route path="/testing">
          <TestingLoaders />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Wrapper>
  )
}
