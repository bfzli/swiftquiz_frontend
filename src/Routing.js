import * as React from 'react';
import { BrowserRouter as Wrapper, Switch, Route as NotProtected, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import FormView from './pages/FormView';
import Contact from './pages/Contact';
import Profile from './pages/Dashboard/Profile';
import AdminPanel from './pages/AdminDashboard/AdminPanel';
import Quizzes from './pages/Dashboard/Quizzes';
import Screen from './pages/Dashboard/Screen';
import Play from './pages/Play';
import About from './pages/AboutUs'
import Quiz from './pages/Dashboard/Quiz';
import EditQuiz from './pages/Dashboard/EditQuiz';
import Community from './pages/Dashboard/Community';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loaders from './pages/Loaders';
import { ProtectedRoute } from './pages/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuiz } from './reduxComponents/actions/Questions';
import * as CONST from './reduxComponents/constants/index'
import EditProfile from "./pages/EditProfil";

export default function Routing() {
   const theme = useSelector((state) => state.ui.theme);

   React.useEffect(() => {
      console.log(theme);
   }, [theme]);

   React.useEffect(() => {
      if (localStorage.getItem("theme") === null)
         dispatch({ type: CONST.SET_LIGHT_MODE });

      localStorage.getItem("theme") === "lightmode"
         ? dispatch({ type: CONST.SET_LIGHT_MODE })
         : dispatch({ type: CONST.SET_DARK_MODE });
   }, []);

   const dispatch = useDispatch();
   AOS.init({
      duration: 800,
      disable: "mobile",
      once: true,
   });

   React.useEffect(() => {
      dispatch(fetchQuiz());
   }, []);

   return (
      <Wrapper>
         <Switch>
            <NotProtected path="/" component={Home} exact />
            <NotProtected path="/auth" component={FormView} />
            <NotProtected path="/contact" component={Contact} />
            <NotProtected path="/about" component={About} />
            <NotProtected path="/loaders" component={Loaders} />

            <ProtectedRoute path="/dashboard/welcome" component={Screen} />
            <ProtectedRoute path="/invite/*" component={Play} />
            <ProtectedRoute path="/play" component={Play} />
            <ProtectedRoute path="/dashboard/quizzes/add-quiz" component={Quiz} />
            <ProtectedRoute path="/dashboard/quizzes/edit-quiz/:id" component={EditQuiz} />
            <ProtectedRoute path="/dashboard/admin" component={AdminPanel} />
            <ProtectedRoute path="/dashboard/quizzes" component={Quizzes} />
            <ProtectedRoute path="/dashboard/community" component={Community} />
            <ProtectedRoute path="/dashboard/profile" component={Profile} />
            <ProtectedRoute path="/dashboard/profile/edit" component={EditProfile} />

            <NotProtected path="/dashboard">
               <Redirect to="/dashboard/welcome" />
            </NotProtected>
            <NotProtected path="/dashboard/*">
               <Redirect to="/dashboard/welcome" />
            </NotProtected>
            <NotProtected path="/*" component={Error} />
         </Switch>
      </Wrapper>
   );


}
