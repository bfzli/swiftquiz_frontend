import * as styles from './Community.module.scss'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import quiz1 from '../../../../assets/images/community/rubyonrails.webp'
import quiz2 from '../../../../assets/images/community/svlete.webp'
import quiz3 from '../../../../assets/images/community/typescript.webp'
import quiz4 from '../../../../assets/images/community/kotlin.webp'
import quiz5 from '../../../../assets/images/community/react.webp'
import quiz6 from '../../../../assets/images/community/docker.webp'

import benjamin from '../../../../assets/images/profiles/benjamin.webp'
import fitim from '../../../../assets/images/profiles/fitim.webp'
import laurat from '../../../../assets/images/profiles/laurat.webp'
import adnan from '../../../../assets/images/profiles/adnan.webp'
import mendrit from '../../../../assets/images/profiles/mendrit.webp'
import rinor from '../../../../assets/images/profiles/rinor.webp'

import { useEffect } from 'react'
import { fetchQuiz } from '../../../../reduxComponents/actions/Questions'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from "react-redux";
import { selectQuizesOfUsers } from '../../../../reduxComponents/selectors/selectorsUserQuizzes'

function MyQuizzes({ userQuizes }) {
    const dispatch = useDispatch()

    const all_quizzes = useSelector(state => state.quizes.quizes);
    console.log(all_quizzes)

    useEffect(() => {
        dispatch(fetchQuiz())
    }, []);

    return (
        <div className={styles.container}>
            <Helmet>
                <title>Dashboard - SwiftQuiz</title>
            </Helmet>

            <div className={styles.page_info} data-aos="fade-down">
                <h2 className={styles.welcome_text}>Community</h2>
                <p className={styles.breadcrumb}>Dashboard {">"} Community</p>
            </div>

            <div className={styles.search}>
                <input className={styles.search_input} type="text" placeholder='Search your quizzes...' />
                <div className={styles.search_wrapper}>
                    <svg className={styles.search_icon} width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z" />
                    </svg>
                </div>
            </div>


            <main style={{ marginTop: '2.5em' }}>
                <div className={styles.top_right} data-aos="fade-left">
                    <div className={styles.quizess}>
                        <div className={styles.quiz}>
                            <img className={styles.quiz_image} alt="Quiz Image" src={quiz1} />
                            <h3 className={styles.quiz_title}>
                                RUBY & RAILS
                            </h3>
                            <p className={styles.quiz_description}>
                                Ruby on Rails is your favorite Ruby web framework to use.
                            </p>
                            <div className={styles.quizer_holder}>
                                <img src={benjamin} alt="Quiz Topic" className={styles.quizer_profile} />
                                <p className={styles.quizer_name}>Benjamin Fazli</p>
                            </div>
                            <button to="/d" class={styles.quiz_play}>PLAY QUIZ</button>
                        </div>

                        <div className={styles.quiz}>
                            <img className={styles.quiz_image} alt="Quiz Image" src={quiz2} />
                            <h3 className={styles.quiz_title}>
                                SVLETE
                            </h3>
                            <p className={styles.quiz_description}>
                                Svelte is a radical new approach to building user interfaces.
                            </p>
                            <div className={styles.quizer_holder}>
                                <img src={mendrit} alt="Quiz Topic" className={styles.quizer_profile} />
                                <p className={styles.quizer_name}>Mendrit Arifi</p>
                            </div>
                            <button class={styles.quiz_play}>PLAY QUIZ</button>
                        </div>

                        <div className={styles.quiz}>
                            <img className={styles.quiz_image} alt="Quiz Image" src={quiz2} />
                            <h3 className={styles.quiz_title}>
                                SVLETE
                            </h3>
                            <p className={styles.quiz_description}>
                                Svelte is a radical new approach to building user interfaces.
                            </p>
                            <div className={styles.quizer_holder}>
                                <img src={mendrit} alt="Quiz Topic" className={styles.quizer_profile} />
                                <p className={styles.quizer_name}>Mendrit Arifi</p>
                            </div>
                            <button class={styles.quiz_play}>PLAY QUIZ</button>
                        </div>

                        <div className={styles.quiz}>
                            <img className={styles.quiz_image} alt="Quiz Image" src={quiz3} />
                            <h3 className={styles.quiz_title}>
                                TYPESCRIPT
                            </h3>
                            <p className={styles.quiz_description}>
                                Javascript but with a strict syntactical superset with types.
                            </p>
                            <div className={styles.quizer_holder}>
                                <img src={laurat} alt="Quiz Topic" className={styles.quizer_profile} />
                                <p className={styles.quizer_name}>Laurat Hajrullaga</p>
                            </div>
                            <button class={styles.quiz_play}>PLAY QUIZ</button>
                        </div>

                        <div className={styles.quiz}>
                            <img className={styles.quiz_image} alt="Quiz Image" src={quiz3} />
                            <h3 className={styles.quiz_title}>
                                TYPESCRIPT
                            </h3>
                            <p className={styles.quiz_description}>
                                Javascript but with a strict syntactical superset with types.
                            </p>
                            <div className={styles.quizer_holder}>
                                <img src={laurat} alt="Quiz Topic" className={styles.quizer_profile} />
                                <p className={styles.quizer_name}>Laurat Hajrullaga</p>
                            </div>
                            <button class={styles.quiz_play}>PLAY QUIZ</button>
                        </div>

                        <div className={styles.quiz}>
                            <img className={styles.quiz_image} alt="Quiz Image" src={quiz4} />
                            <h3 className={styles.quiz_title}>
                                KOTLIN
                            </h3>
                            <p className={styles.quiz_description}>
                                Modern, concise and safe language. Easy to pick up and build.
                            </p>
                            <div className={styles.quizer_holder}>
                                <img src={adnan} alt="Quiz Topic" className={styles.quizer_profile} />
                                <p className={styles.quizer_name}>Adnan Kasumaj</p>
                            </div>
                            <button class={styles.quiz_play}>PLAY QUIZ</button>
                        </div>

                        <div className={styles.quiz}>
                            <img className={styles.quiz_image} alt="Quiz Image" src={quiz5} />
                            <h3 className={styles.quiz_title}>
                                REACT
                            </h3>
                            <p className={styles.quiz_description}>
                                A JS library used for building single-page applications
                            </p>
                            <div className={styles.quizer_holder}>
                                <img src={fitim} alt="Quiz Topic" className={styles.quizer_profile} />
                                <p className={styles.quizer_name}>Fitim Hoti</p>
                            </div>
                            <button class={styles.quiz_play}>PLAY QUIZ</button>
                        </div>

                        <div className={styles.quiz}>
                            <img className={styles.quiz_image} alt="Quiz Image" src={quiz6} />
                            <h3 className={styles.quiz_title}>
                                DOCKER
                            </h3>
                            <p className={styles.quiz_description}>
                                A software that allows you to build, test, and deploy applications.
                            </p>
                            <div className={styles.quizer_holder}>
                                <img src={rinor} alt="Quiz Topic" className={styles.quizer_profile} />
                                <p className={styles.quizer_name}>Rinor Sylejmani</p>
                            </div>
                            <button class={styles.quiz_play}>PLAY QUIZ</button>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    )
}


const mapStateToProps = (state) => ({
    userQuizes: selectQuizesOfUsers(state)
});

export default connect(mapStateToProps)(MyQuizzes);