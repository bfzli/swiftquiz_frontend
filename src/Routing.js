import * as React from 'react';
import { BrowserRouter as Wrapper, Switch, Route as NotProtected, Redirect } from 'react-router-dom';
import * as CONST from './reduxComponents/constants/index';
import { ProtectedRoute } from './pages/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuiz } from './reduxComponents/actions/Questions';
import { fetchUserData } from './reduxComponents/actions/User';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/Home';
import Error from './pages/Error';
import FormView from './pages/FormView';
import Contact from './pages/Contact';
import Profile from './pages/Dashboard/Profile';
import AdminPanel from './pages/AdminDashboard/AdminPanel';
import Quizzes from './pages/Dashboard/Quizzes';
import Screen from './pages/Dashboard/Screen';
import Play from './pages/Play';
import About from './pages/AboutUs';
import Quiz from './pages/Dashboard/Quiz';
import DashboardContact from './pages/Dashboard/Contact';
import EditQuiz from './pages/Dashboard/EditQuiz';
import Community from './pages/Dashboard/Community';
import Leaderboard from './pages/Dashboard/Leaderboard';
import Loaders from './pages/Loaders';
import EditProfile from './pages/EditProfil';
import Bookmarks from './pages/Dashboard/Bookmarks';
import { documentVisibility, inActive } from './utils/inActivity';

export default function Routing() {
	const dispatch = useDispatch();

	//If the user is LoggedIn Only then apply these functions
	if (JSON.parse(localStorage.getItem('user'))) {
		//Tracks the mouse, keyboard ect. activity on the application,
		//Only change the number, and use miliseconds
		inActive(600000, dispatch);

		//Check if the user is on the quiz page
		documentVisibility();
	}

	React.useEffect(() => {
		dispatch(fetchUserData());
		if (localStorage.getItem('theme') === null) dispatch({ type: CONST.SET_LIGHT_MODE });

		localStorage.getItem('theme') === 'lightmode'
			? dispatch({ type: CONST.SET_LIGHT_MODE })
			: dispatch({ type: CONST.SET_DARK_MODE });
	}, []);

	React.useEffect(() => {
		dispatch(fetchQuiz());
	}, []);

	AOS.init({
		duration: 800,
		disable: 'mobile',
		once: true
	});

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
				<ProtectedRoute path="/dashboard/leaderboard" component={Leaderboard} />
				<ProtectedRoute path="/dashboard/support" component={DashboardContact} />
				<ProtectedRoute path="/dashboard/bookmarks" component={Bookmarks} />

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
