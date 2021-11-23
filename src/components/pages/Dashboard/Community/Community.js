import React from 'react';
import * as styles from './Community.module.scss'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

import quiz1 from '../../../../assets/images/community/rubyonrails.webp'
import quiz6 from '../../../../assets/images/community/docker.webp'

import benjamin from '../../../../assets/images/profiles/benjamin.webp'
import rinor from '../../../../assets/images/profiles/rinor.webp'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from "react-redux";
import { selectQuizesOfUsers, searchSelectedQuizzes } from '../../../../reduxComponents/selectors/selectorsUserQuizzes';
import { setTextFilter } from '../../../../reduxComponents/actions/Filters';
import {useSelector} from 'react-redux'

export default function Community() {
    const all_quizzes = useSelector(state => state.quizes.quizes);

    const handleOnChange = e => {
        const text = e.target.value;
        dispatch(setTextFilter(text));
    }

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
                <input className={styles.search_input} type="text" placeholder='Search your quizzes...'  onChange={handleOnChange}/>
                <div className={styles.search_wrapper}>
                    <svg className={styles.search_icon} width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.867 18 18 14.867 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18ZM19.485 18.071L22.314 20.899L20.899 22.314L18.071 19.485L19.485 18.071Z" />
                    </svg>
                </div>
            </div>


            <main style={{ marginTop: '2.5em' }}>
                <div className={styles.top_right} data-aos="fade-left">
                    <div className={styles.quizess}>
                        {
                            all_quizzes.map(item =>
                                <div className={styles.quiz}>
                                    <img className={styles.quiz_image} alt="Quiz Image" src={quiz1} />
                                    <h3 className={styles.quiz_title}>
                                        {item.title}
                                    </h3>
                                    <p className={styles.quiz_description}>
                                        {item.description}
                                    </p>
                                    <div className={styles.quizer_holder}>
                                        <img src={benjamin} alt="Quiz Topic" className={styles.quizer_profile} />
                                        <p className={styles.quizer_name}>Benjamin Fazli</p>
                                    </div>
                                    <Link style={{textAlign: 'center'}} to={`/invite/${item.redeem_code}`} class={styles.quiz_play}>PLAY QUIZ</Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </main >
        </div >
    )
}


const mapStateToProps = (state) => ({
    userQuizes: searchSelectedQuizzes(state)
});

export default connect(mapStateToProps)(MyQuizzes);