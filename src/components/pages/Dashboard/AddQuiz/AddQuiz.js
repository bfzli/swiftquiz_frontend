import { useReducer } from 'react';
import { useState, useEffect } from 'react'
import * as styles from './AddQuiz.module.scss'
import Helmet from 'react-helmet'
import { formReducer, initState } from "./helpers/Helper";

export default function AddQuiz() {

    const [form, dispatch] = useReducer(formReducer, initState);

    useEffect(() => console.log(form), [])

    return (
        <div className={styles.container}>
            <Helmet>
                <title>Add Quiz - SwiftQuiz</title>
            </Helmet>

            <div className={styles.slides}>

                <div className={styles.single_slide}>
                    question
                </div>
                <div className={styles.add_slide}>
                    Add New Question
                </div>
            </div>

            <div className={styles.right_wrapper}>
                <div className={styles.header}>
                    <div className={styles.navicon_wrapper}>
                        <div className={styles.navicon}></div>
                        <div className={styles.navicon_text}></div>
                    </div>
                    <div className={styles.navicon_wrapper}>
                        <div className={styles.navicon}></div>
                        <div className={styles.navicon_text}></div>
                    </div>
                    <div className={styles.navicon_wrapper}>
                        <div className={styles.navicon}></div>
                        <div className={styles.navicon_text}></div>
                    </div>
                </div>
                <div className={styles.current_slide}>
                    <div className={styles.current_question}>
                        <input
                            className={styles.current_question_text}
                            type="text"
                            placeholder="Your question"
                            onChange={(e) =>
                                dispatch({ type: e.target.name, payload: e.target.value })
                            }
                        />
                    </div>

                    <div className={styles.options_wrapper}>

                        <div className={styles.option}>
                            <input
                                type="text"
                                placeholder="Anwser 1"
                                onChange={(e) =>
                                    dispatch({
                                        type: e.target.name,
                                        payload: { answer: e.target.value }
                                    })
                                }
                            />
                        </div>

                        <div className={styles.option}>
                            <input
                                type="text"
                                placeholder="Anwser 2"
                                onChange={(e) =>
                                    dispatch({
                                        type: e.target.name,
                                        payload: { answer: e.target.value }
                                    })
                                }
                            />
                        </div>

                        <div className={styles.option}>
                            <input
                                type="text"
                                placeholder="Anwser 3"
                                onChange={(e) =>
                                    dispatch({
                                        type: e.target.name,
                                        payload: { answer: e.target.value }
                                    })
                                }
                            />
                        </div>

                        <div className={styles.option}>
                            <input
                                type="text"
                                placeholder="Anwser 4"
                                onChange={(e) =>
                                    dispatch({
                                        type: e.target.name,
                                        payload: { answer: e.target.value }
                                    })
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
