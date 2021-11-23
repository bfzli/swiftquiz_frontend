import * as styles from './Quizzes.module.scss'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import quiz1 from '../../../../assets/images/community/rubyonrails.webp'
import quiz2 from '../../../../assets/images/community/svlete.webp'
import quiz3 from '../../../../assets/images/community/typescript.webp'
import quiz4 from '../../../../assets/images/community/kotlin.webp'
import quiz5 from '../../../../assets/images/community/react.webp'
import quiz6 from '../../../../assets/images/community/docker.webp'

import benjamin from '../../../../assets/images/profiles/benjamin.webp'

import { useEffect } from 'react'
import { fetchQuiz } from '../../../../reduxComponents/actions/Questions'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from "react-redux";
import { selectQuizesOfUsers } from '../../../../reduxComponents/selectors/selectorsUserQuizzes'

function Quizzes({ userQuizes }) {
    const dispatch = useDispatch()

    const all_quizzes = useSelector(state => state.quizes.quizes);

    const user = useSelector(state => state.auth.auth)

    useEffect(() => {
        dispatch(fetchQuiz())
    }, []);

    return (
        <div className={styles.container}>
            <Helmet>
                <title>Dashboard - SwiftQuiz</title>
            </Helmet>

            <div className={styles.page_info} data-aos="fade-down">
                <h2 className={styles.welcome_text}>Quizzes</h2>
                <p className={styles.breadcrumb}>Dashboard {">"} Quizzes</p>
            </div>

            <div className={styles.search}>
                <input className={styles.search_input} type="text" placeholder='Search your quizzes...' />
                <div className={styles.search_wrapper}>
                    <svg className={styles.search_icon} width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z" />
                    </svg>
                </div>
            </div>


            <Link to="/dashboard/quizzes/add-quiz" className={styles.add_btn}>
                <svg className={styles.add_btn_icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" />
                </svg>
            </Link>

            <main style={{ marginTop: '2.5em' }}>
                <div className={styles.top_right} data-aos="fade-left">
                    <div className={styles.quizess}>
                        {
                            all_quizzes.map(item =>
                                <div className={styles.quiz}>
                                    <img className={styles.quiz_image} alt={item.title} src={quiz1} />
                                    <h3 className={styles.quiz_title}>
                                        {item.title}
                                    </h3>
                                    <p className={styles.quiz_description}>
                                        {item.description}
                                    </p>
                                    <div className={styles.quizer_holder}>
                                        <img src={benjamin} alt="Quiz Topic" className={styles.quizer_profile} />
                                        <p className={styles.quizer_name}>{user.name}</p>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <button class={styles.quiz_play}>
                                            <svg className={styles.actions_btn} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.18115 12C2.12115 6.88 6.60815 3 12.0002 3C17.3922 3 21.8782 6.88 22.8192 12C21.8792 17.12 17.3922 21 12.0002 21C6.60815 21 2.12215 17.12 1.18115 12V12ZM12.0002 17C13.3262 17 14.598 16.4732 15.5357 15.5355C16.4734 14.5979 17.0002 13.3261 17.0002 12C17.0002 10.6739 16.4734 9.40215 15.5357 8.46447C14.598 7.52678 13.3262 7 12.0002 7C10.6741 7 9.4023 7.52678 8.46462 8.46447C7.52694 9.40215 7.00015 10.6739 7.00015 12C7.00015 13.3261 7.52694 14.5979 8.46462 15.5355C9.4023 16.4732 10.6741 17 12.0002 17ZM12.0002 15C11.2045 15 10.4414 14.6839 9.87883 14.1213C9.31622 13.5587 9.00015 12.7956 9.00015 12C9.00015 11.2044 9.31622 10.4413 9.87883 9.87868C10.4414 9.31607 11.2045 9 12.0002 9C12.7958 9 13.5589 9.31607 14.1215 9.87868C14.6841 10.4413 15.0002 11.2044 15.0002 12C15.0002 12.7956 14.6841 13.5587 14.1215 14.1213C13.5589 14.6839 12.7958 15 12.0002 15Z" />
                                            </svg>
                                        </button>
                                        <button class={styles.quiz_play}>
                                            <svg className={styles.actions_btn} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.92908 21.485L10.7751 15.639C11.2003 15.753 11.6514 15.7235 12.0581 15.555C12.4649 15.3865 12.8047 15.0886 13.0249 14.7073C13.2451 14.326 13.3332 13.8827 13.2758 13.4462C13.2183 13.0097 13.0184 12.6043 12.7071 12.293C12.3958 11.9817 11.9904 11.7818 11.5539 11.7243C11.1174 11.6668 10.6741 11.755 10.2928 11.9752C9.91152 12.1954 9.61354 12.5352 9.44508 12.942C9.27661 13.3487 9.24709 13.7997 9.36108 14.225L3.51508 20.071L2.45508 19.011C5.28208 15.711 6.34308 12.057 7.75708 5.92901L14.1211 5.22201L19.7781 10.879L19.0711 17.243C12.9431 18.657 9.28908 19.718 5.99008 22.546L4.92908 21.486V21.485ZM16.5961 2.04001L22.9431 8.38601C23.0085 8.4513 23.0545 8.53344 23.076 8.62331C23.0976 8.71318 23.0938 8.80726 23.0651 8.89511C23.0364 8.98296 22.9839 9.06113 22.9135 9.12096C22.8431 9.18078 22.7574 9.21991 22.6661 9.23401L21.1921 9.46401L15.5361 3.80801L15.7481 2.32301C15.7613 2.23118 15.7997 2.14483 15.8592 2.07361C15.9186 2.0024 15.9967 1.94912 16.0847 1.91976C16.1727 1.89039 16.2672 1.88608 16.3575 1.90732C16.4478 1.92856 16.5304 1.9745 16.5961 2.04001Z" />
                                            </svg>
                                        </button>
                                        <button class={styles.quiz_play}>
                                            <svg className={styles.actions_btn} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11 20L1 12L11 4V9C16.523 9 21 13.477 21 19C21 19.273 20.99 19.543 20.968 19.81C19.46 16.95 16.458 15 13 15H11V20Z" />
                                            </svg>
                                        </button>
                                        <button class={styles.quiz_play}>
                                            <svg className={styles.actions_btn} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
            </main >
        </div >
    )
}


const mapStateToProps = (state) => ({
    userQuizes: selectQuizesOfUsers(state)
});

export default connect(mapStateToProps)(Quizzes);