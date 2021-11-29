import * as styles from './Quizzes.module.scss'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { fetchQuiz } from '../../../../reduxComponents/actions/Questions';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { searchSelectedQuizzes } from '../../../../reduxComponents/selectors/selectorsUserQuizzes';
import { setTextFilter } from '../../../../reduxComponents/actions/Filters';

import QuizCard from './QuizCard';

function Quizzes({ userQuizes }) {
	const dispatch = useDispatch();

	const handleOnChange = e => {
		const text = e.target.value;
		dispatch(setTextFilter(text));
	}

	const user = useSelector((state) => state.auth.auth);

	useEffect(() => {
		dispatch(fetchQuiz());
	}, []);

	return (
		<div className={styles.container}>
			<Helmet>
				<title>Dashboard - SwiftQuiz</title>
			</Helmet>

			<div className={styles.page_info} data-aos="fade-down">
				<h2 className={styles.welcome_text}>Quizzes</h2>

				<div className={styles.search}>
					<input className={styles.search_input} type="text" placeholder='Search your quizzes...' onChange={handleOnChange} />
					<div className={styles.search_wrapper}>
						<svg className={styles.search_icon} width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z" />
						</svg>
					</div>
					<Link to="/dashboard/quizzes/add-quiz" className={styles.add_btn}>
						<svg className={styles.add_btn_icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" />
						</svg>

						<p>Add Quoz</p>
					</Link>
				</div>
			</div>

			<main style={{ marginTop: '2.5em' }}>
				<div className={styles.top_right} data-aos="fade-left">
					<div className={styles.quizess}>
						{userQuizes.map(item => <QuizCard item={item} />)}
					</div>
				</div>
			</main >
		</div >
	)
}

const mapStateToProps = (state) => ({
	userQuizes: searchSelectedQuizzes(state)
});

export default connect(mapStateToProps)(Quizzes);
