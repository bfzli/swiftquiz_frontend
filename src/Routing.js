import * as React from 'react';
import { BrowserRouter as Wrapper, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import FormView from './pages/FormView'
import Contact from './pages/Contact';
import Profile from './pages/Dashboard/Profile';
import Screen from './pages/Dashboard/Screen';
import Play from './pages/Play'
import AddQuiz from './pages/Dashboard/AddQuiz'
import AOS from 'aos';
import 'aos/dist/aos.css';
import TestingLoaders from './pages/TestingLoaders';
import Header from './components/shared/Header/Header';
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
          <Route path="/auth">
            <FormView/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/dashboard/quizes/add-quiz">
            <AddQuiz/>
          </Route>
        <Route path="/dashboard">
          {/* <Redirect to="/dashboard/home" /> */}
          <Screen/>
        </Route>
        <Route path="/play">
          <Play />
        </Route>
        <Route path="/testing">
          <TestingLoaders />
        </Route>
        <Route path="/123213">
          <Redirect to="/" />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Wrapper>
  )
}
