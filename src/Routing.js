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
import { ProtectedRoute } from './pages/ProtectedRoute';

export default function Routing() {

  AOS.init({
    duration: 800,
    disable: "mobile",
    once: true,
  });

  return (
    <Wrapper>
      <Switch>
        {/* Global Routes for All Users */}
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/auth">
          <FormView />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        {/* Global Routes for All Users */}

        {/* Protected Routes for Platform Users */}
        <ProtectedRoute path="/dashboard/quizes/add-quiz" component={AddQuiz} />
        <ProtectedRoute path="/dashboard" component={Screen} />
        <ProtectedRoute path="/play" component={Play} />
        <ProtectedRoute path="/testing" component={TestingLoaders} />
        {/* Protected Routes for Platform Users */}

        {/* Super Global, recommended to be at the end of each route */}
        <Route path="*">
          <Error />
        </Route>
        {/* Super Global, recommended to be at the end of each route */}
      </Switch>
    </Wrapper>
  )
}
