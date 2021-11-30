import * as styles from './Welcome.module.scss';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import benjamin from '../../../../assets/images/profiles/benjamin.webp';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { selectQuizesOfUsers } from '../../../../reduxComponents/selectors/selectorsUserQuizzes';

function Welcome({ userQuizes }) {
    const all_quizzes = useSelector((state) => state.quizes.quizes);
    const user = useSelector(state => state.auth.auth)
    return (
        <div className={styles.container} style={{ display: 'flex' }}>
            <div className={styles.page_info} data-aos="fade-down">
                <h2 className={styles.welcome_text}>Welcome back, {user.name}!</h2>
            </div>

            <main className={styles.main}>
                <div className={styles.main_top}>
                    <div className={styles.top_right} data-aos="fade-left">
                        <h2 className={styles.top_right_title}>
                            YOUR QUIZZES
                        </h2>
                        <div className={styles.quizess}>
                            {
                                userQuizes.map(item =>
                                    <div className={styles.quiz}>
                                        <img className={styles.quiz_image} alt="Quiz Image" src={`https://swiftapi.vercel.app/${item.thumbnail}`} />
                                        <h3 className={styles.quiz_title}>
                                            {item.title}
                                        </h3>
                                        <p className={styles.quiz_description}>
                                            {item.title}
                                        </p>
                                        <Link to={`/invite/${item.redeem_code}`} className={styles.quiz_play}>PLAY QUIZ</Link>
                                    </div>)
                            }
                        </div>
                    </div>
                    <div className={styles.top_right} data-aos="fade-left">
                        <h2 className={styles.top_right_title}>
                            COMMUNITY
                        </h2>
                        <div className={styles.quizess}>
                            {
                                all_quizzes.map(item =>
                                    <div className={styles.quiz}>
                                        <img className={styles.quiz_image} alt="Quiz Image" src={`https://swiftapi.vercel.app/${item.thumbnail}`} />
                                        <h3 className={styles.quiz_title}>
                                            {item.title}
                                        </h3>
                                        <p className={styles.quiz_description}>
                                            {item.title}
                                        </p>
                                        <div className={styles.quizer_holder}>
                                            <img src={benjamin} alt="Quiz Topic" className={styles.quizer_profile} />
                                            <p className={styles.quizer_name}>{item.created_by.name}</p>
                                        </div>
                                        <Link to={`/invite/${item.redeem_code}`} className={styles.quiz_play}>PLAY QUIZ</Link>
                                    </div>)
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

const mapStateToProps = (state) => ({
    userQuizes: selectQuizesOfUsers(state)
});

export default connect(mapStateToProps)(Welcome);
