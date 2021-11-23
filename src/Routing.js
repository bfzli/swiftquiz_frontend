import * as React from 'react';
import { BrowserRouter as Wrapper, Switch, Route as NotProtected, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Error from './pages/Error';
import FormView from './pages/FormView'
import Contact from './pages/Contact';
import Profile from './pages/Dashboard/Profile';
import AdminPanel from "./pages/AdminDashboard/AdminPanel";
import Quizzes from './pages/Dashboard/Quizzes';
import Screen from './pages/Dashboard/Screen';
import Play from './pages/Play'
import AddQuiz from './pages/Dashboard/AddQuiz'
import Community from './pages/Dashboard/Community';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TestingLoaders from './pages/TestingLoaders';
import { ProtectedRoute } from './pages/ProtectedRoute';
import Dash2 from './components/pages/Dashboard_v2/Home/Home'
import { useDispatch } from 'react-redux';
import { fetchQuiz } from './reduxComponents/actions/Questions';

export default function Routing() {
  const user = useSelector((state) => state.auth.auth);

  const dispatch = useDispatch();
  AOS.init({
    duration: 800,
    disable: "mobile",
    once: true,
  });

  React.useEffect(() => {
    dispatch(fetchQuiz());
  })

  return (
    <Wrapper>
      <Switch>
        <NotProtected path="/" component={Home} exact />
        <NotProtected path="/auth" component={FormView} />
        <NotProtected path="/contact" component={Contact} />
        <NotProtected path="/testing" component={TestingLoaders} />

        <ProtectedRoute path="/dashboard/welcome" component={Screen} />
        <ProtectedRoute path="/invite/*" component={Play} />
        <ProtectedRoute path="/play" component={Play} />
        <ProtectedRoute path="/dashboard/quizzes/add-quiz" component={AddQuiz} />
        <ProtectedRoute path="/dashboard/admin" component={AdminPanel} />
        <ProtectedRoute path="/dashboard/quizzes" component={Quizzes} />
        <ProtectedRoute path="/dashboard/community" component={Community} />
        <ProtectedRoute path="/dashboard/profile" component={Profile} />

        {
          user.role === "user"
          ?
          <ProtectedRoute path="/dashboard/v2" component={Dash2} />
          :
          null
        }

        <NotProtected path="/dashboard"> <Redirect to="/dashboard/welcome" /></NotProtected>
        <NotProtected path="/dashboard/*"> <Redirect to="/dashboard/welcome" /></NotProtected>
        <NotProtected path="*" component={Error} />
      </Switch>
    </Wrapper>
  );
}
