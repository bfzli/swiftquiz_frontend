import * as React from 'react';
import { BrowserRouter as Wrapper, Routes as Switch, Route } from 'react-router-dom';
import * as CONST from './reduxComponents/constants/index';
import Auth from './pages/Auth';
import { useDispatch } from 'react-redux';
import { fetchQuiz } from './reduxComponents/actions/Questions';
import { fetchUserData } from './reduxComponents/actions/User';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import Error from './pages/Error';
import UserProfile from './pages/Dashboard/User';
import FormView from './pages/FormView';
import Contact from './pages/Contact';
import Profile from './pages/Dashboard/Profile';
import AdminPanel from './pages/AdminDashboard/AdminPanel';
import Quizzes from './pages/Dashboard/Quizzes';
import Play from './pages/Play';
import About from './pages/AboutUs';
import Quiz from './pages/Dashboard/Quiz';
import DashboardContact from './pages/Dashboard/Contact';
import EditQuiz from './pages/Dashboard/EditQuiz';
import Community from './pages/Dashboard/Community';
import Leaderboard from './pages/Dashboard/Leaderboard';
import EditProfile from './pages/EditProfil';
import Dashauth from './pages/Dashboard/Auth';
import Store from './pages/Dashboard/Store';
import { inActive } from './utils/inActivity';
import { useTranslation } from 'react-i18next';
import Support from './pages/Dashboard/Support';
import Help from './pages/Help';
import Homev2 from './pages/Homev2'
import Redirect from './utils/Redirect'
import AdminPass from './utils/AdminPass'

export default function Routing() {
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  if (JSON.parse(localStorage.getItem("user"))) {
    inActive(600000, dispatch);
  }

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
  };

  React.useEffect(() => {
    if (localStorage.getItem("i18nextLng") === null) {
      localStorage.setItem("i18nextLng", "en");
    } else
      switch (localStorage.getItem("i18nextLng")) {
        case "en":
          changeLang("en");
          break;
        case "sq":
          changeLang("sq");
          break;
        case "ar":
          changeLang("ar");
          break;
        case "de":
          changeLang("de");
          break;
        case "fr":
          changeLang("fr");
          break;
      }
  }, []);

  React.useEffect(() => {
    dispatch(fetchUserData());

    if (localStorage.getItem("theme") === null)
      dispatch({ type: CONST.SET_LIGHT_MODE });

    localStorage.getItem("theme") === "lightmode"
      ? dispatch({ type: CONST.SET_LIGHT_MODE })
      : dispatch({ type: CONST.SET_DARK_MODE });
  }, []);

  React.useEffect(() => {
    dispatch(fetchQuiz());
  }, []);

  AOS.init({
    duration: 800,
    disable: "mobile",
    once: true,
  });

	return (
		<Wrapper>
			<Switch>
				<Route path="/" element={<Home />} exact />
				<Route path="/auth" element={<FormView />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
				<Route path="/new" element={<Homev2 />} />
				<Route exact path='/' element={<Auth />}>
					<Route path="/invite/*" element={<Play />} />
					<Route path="/play" element={<Play />} />
					<Route path="/dashboard/quizzes/add-quiz" element={<Quiz />} />
					<Route path="/dashboard/quizzes/edit-quiz/:id" element={<EditQuiz />} />
					<Route path="/dashboard/community" element={<Community />} />
					<Route path="/dashboard/profile/edit" element={<EditProfile />} />
					<Route path="/dashboard/profile/:username" element={<UserProfile />} />
					<Route path="/dashboard/profile" element={<Profile />} />
					<Route path="/dashboard/quizzes" element={<Quizzes />} />
					<Route path="/dashboard/leaderboard" element={<Leaderboard />} />
					<Route path="/dashboard/support" element={<DashboardContact />} />
					<Route path="/dashboard/store" element={<Store />} />
					<Route path="/dashboard/messenger" element={<Support />} />
					<Route path="/dashboard/help" element={<Help />} />
					<Route path="/dashboard" element={<Redirect to="/dashboard/quizzes"/>} />
					<Route path="/dashboard/auth" element={<Dashauth />} />
					<Route path="/*" element={<Error />} />
					<Route path="/dashboard/*" element={<Error />} />
				</Route>

        <Route exact path='/' element={<AdminPass />}>
          <Route path="/dashboard/admin" element={<AdminPanel />} /> 
        </Route>

			</Switch>
		</Wrapper>
	);
}
