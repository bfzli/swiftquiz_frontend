import React from 'react';
import * as styles from './Community.module.scss';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import quiz1 from '../../../../assets/images/community/rubyonrails.webp';
import quiz2 from '../../../../assets/images/community/svlete.webp';
import quiz3 from '../../../../assets/images/community/typescript.webp';
import quiz4 from '../../../../assets/images/community/kotlin.webp';
import quiz5 from '../../../../assets/images/community/react.webp';
import quiz6 from '../../../../assets/images/community/docker.webp';

import benjamin from '../../../../assets/images/profiles/benjamin.webp';
import fitim from '../../../../assets/images/profiles/fitim.webp';
import laurat from '../../../../assets/images/profiles/laurat.webp';
import adnan from '../../../../assets/images/profiles/adnan.webp';
import mendrit from '../../../../assets/images/profiles/mendrit.webp';
import rinor from '../../../../assets/images/profiles/rinor.webp';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { searchSelectedQuizzes } from '../../../../reduxComponents/selectors/selectorsUserQuizzes';
import { setTextFilter } from '../../../../reduxComponents/actions/Filters';
import { removeQuiz } from '../../../../reduxComponents/actions/Questions';

function MyQuizzes({ userQuizes }) {
	const dispatch = useDispatch();

	const all_quizzes = useSelector((state) => state.quizes.quizes);

	const handleOnChange = (e) => {
		const text = e.target.value;
		dispatch(setTextFilter(text));
	};

	const handleDelete = (e) => {
		let id = e.target.value;
		dispatch(removeQuiz(id));
	};

	return (
		<div className={styles.container}>
			<Helmet>
				<title>Dashboard - SwiftQuiz</title>
			</Helmet>

			<div className={styles.page_info} data-aos="fade-down">
				<h2 className={styles.welcome_text}>Community</h2>
				<p className={styles.breadcrumb}>Dashboard {'>'} Community</p>
			</div>

			<div className={styles.search}>
				<input
					className={styles.search_input}
					type="text"
					placeholder="Search your quizzes..."
					onChange={handleOnChange}
				/>
				<div className={styles.search_wrapper}>
					<svg
						className={styles.search_icon}
						width="32"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z" />
					</svg>
				</div>
			</div>

			<main style={{ marginTop: '2.5em' }}>
				<div className={styles.top_right} data-aos="fade-left">
					<div className={styles.quizess}>
						{userQuizes.map((quiz, index) => {
							const { title, description, _id } = quiz;

							return (
								<div className={styles.quiz} key={index}>
									<img className={styles.quiz_image} alt="Quiz Image" src={quiz1} />
									<h3 className={styles.quiz_title}>{title}</h3>
									<p className={styles.quiz_description}>{description}</p>
									<div className={styles.quizer_holder}>
										<img src={benjamin} alt="Quiz Topic" className={styles.quizer_profile} />
										<p className={styles.quizer_name}>Benjamin Fazli</p>
									</div>
									<button to="/d" class={styles.quiz_play}>
										PLAY QUIZ
									</button>
									<button to="/d" class={styles.quiz_play} value={_id} onClick={handleDelete}>
										REMOVE QUIZ
									</button>
								</div>
							);
						})}
					</div>
				</div>
			</main>
		</div>
	);
}
/* 
                        <div className={styles.quiz}>
                            <img className={styles.quiz_image} alt="Quiz Image" src={quiz1} />
                            <h3 className={styles.quiz_title}>
                                {userQuizes.title}
                            </h3>
                            <p className={styles.quiz_description}>
                                Ruby on Rails is your favorite Ruby web framework to use.
                            </p>
                            <div className={styles.quizer_holder}>
                                <img src={benjamin} alt="Quiz Topic" className={styles.quizer_profile} />
                                <p className={styles.quizer_name}>Benjamin Fazli</p>
                            </div>
                            <button to="/d" class={styles.quiz_play}>PLAY QUIZ</button>
                        </div> */

const mapStateToProps = (state) => ({
	userQuizes: searchSelectedQuizzes(state)
});

export default connect(mapStateToProps)(MyQuizzes);
