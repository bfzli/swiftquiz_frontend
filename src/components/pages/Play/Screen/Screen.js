import * as styles from './Screen.module.scss'
import { useState, useEffect } from 'react'
import Questions from './dataJSON'
import wrong_choice from '../../../../assets/voices/isWrong.mp3'
import correct_choice from '../../../../assets/voices/isCorrect.mp3'
import { useDispatch } from 'react-redux';
import { fetchQuiz } from '../../../../reduxComponents/actions/Questions'
import { useSelector } from 'react-redux';

import avatar from '../../../../assets/images/profiles/benjamin.png'

export default function Screen() {

    const [menuView, setMenuView] = useState('stats');
    const [questions] = useState(Questions)
    let [currentQuestion, setCurrentQuestion] = useState(0)
    const [correctAnswersCount, setCorrectAnwsersCount] = useState(0)
    const [points, setPoints] = useState(0)
    const [wrongAnswersCount, setWrongAnwsersCount] = useState(0)
    const [modal, setModal] = useState(false)
    const TotalQuestions = questions.length
    const [countDown, setCountDown] = useState(0);
    const [runTimer, setRunTimer] = useState(true);
    const [sounds, setSounds] = useState(true);

    let [all, setAll] = useState([])

    let wrong_choice_run = new Audio(wrong_choice)
    let correct_choice_run = new Audio(correct_choice)

    useEffect(() => {
        var seperate = questions[currentQuestion - 1];
        setAll([...all, seperate])

    }, [currentQuestion])


    let handleAnswer = (isCorrect) => {
        if (isCorrect === true) {
            {
                sounds && correct_choice_run.play()
            }
            var newScore = correctAnswersCount + 1;
            var newPoints = points + 10;
            setPoints(newPoints);
            setCorrectAnwsersCount(newScore);
        }

        if (isCorrect !== true) {
            {
                sounds && wrong_choice_run.play();
            }
            var newScore = wrongAnswersCount + 1;
            if (points === 0)
                var newPoints = points - 0;

            if (points !== 0)
                var newPoints = points - 5;

            setPoints(newPoints);
            setWrongAnwsersCount(newScore)
        }


        var nextQuestion = currentQuestion + 1
        setCountDown(60 * .25);
        if (nextQuestion < TotalQuestions) setCurrentQuestion(nextQuestion)

        else {
            setTimeout(0)
            setRunTimer(false)
            setModal(true)
            var coins = 0;
            setPoints(coins)
        }
    }

    let resetQuiz = () => {
        setCorrectAnwsersCount(0)
        setCurrentQuestion(0)
        setWrongAnwsersCount(0)
        setPoints(0)
        setCountDown(60 * .25);
        setRunTimer(true);
        setModal(false)
        setAll([])
    }

    let timeout = () => {

        var nextQuestion = currentQuestion + 1

        var wrong = wrongAnswersCount + 1;
        setWrongAnwsersCount(wrong)
        {
            sounds && wrong_choice_run.play();
        }

        setCurrentQuestion(nextQuestion)

        if (nextQuestion < TotalQuestions) {
            setCountDown(60 * .25);
            setRunTimer(true)

        }

        else {
            setModal(true);
            setCountDown(0);
            setRunTimer(false);
        }
    }

    useEffect(() => {
        let timerId;

        if (runTimer) {
            setCountDown(60 * .25);
            timerId = setInterval(() => {
                setCountDown((countDown) => countDown - 1);
            }, 1000);
        } else {
            clearInterval(timerId);
        }

        return () => clearInterval(timerId);
    }, [runTimer]);

    useEffect(() => {
        if (countDown < 0 && runTimer) {
            setCountDown(0);
            setRunTimer(false);
            timeout();
        }
    }, [countDown, runTimer]);

    const seconds = String(countDown % 60).padStart(2, 0);
    const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

    const prg = (countDown / (60 * .25)) * 100;

    const timeprogress = {
        position: 'absolute',
        height: '3px',
        top: '.75em',
        left: '0',
        width: `${prg}%`,
        backgroundColor: 'white',
        transform: 'width 0.45s ease-in-out',
    }


    return (
        <main className={styles.container}>
            <header className={styles.header} data-aos="fade-right">
                <p className={styles.stats_title}>Information Area</p>

                {
                    menuView === 'stats'

                        ?

                        <>
                            <div className={styles.view_container}>
                                <div className={styles.view_wrapper}>
                                    <div id="view_inactive" onClick={() => setMenuView('stats')} className={styles.view_option}>
                                        <svg className={styles.view_icon} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.33049 0.000366211H14.6695C18.0705 0.000366211 19.9905 1.92937 20.0005 5.33037V14.6704C20.0005 18.0704 18.0705 20.0004 14.6695 20.0004H5.33049C1.92949 20.0004 0.000488281 18.0704 0.000488281 14.6704V5.33037C0.000488281 1.92937 1.92949 0.000366211 5.33049 0.000366211ZM10.0495 15.8604C10.4805 15.8604 10.8395 15.5404 10.8795 15.1104V4.92037C10.9195 4.61037 10.7705 4.29937 10.5005 4.13037C10.2195 3.96037 9.87949 3.96037 9.61049 4.13037C9.33949 4.29937 9.19049 4.61037 9.21949 4.92037V15.1104C9.27049 15.5404 9.62949 15.8604 10.0495 15.8604ZM14.6505 15.8604C15.0705 15.8604 15.4295 15.5404 15.4805 15.1104V11.8304C15.5095 11.5094 15.3605 11.2104 15.0895 11.0404C14.8205 10.8704 14.4805 10.8704 14.2005 11.0404C13.9295 11.2104 13.7805 11.5094 13.8205 11.8304V15.1104C13.8605 15.5404 14.2195 15.8604 14.6505 15.8604ZM6.21949 15.1104C6.17949 15.5404 5.82049 15.8604 5.38949 15.8604C4.95949 15.8604 4.59949 15.5404 4.56049 15.1104V8.20037C4.53049 7.88937 4.67949 7.58037 4.95049 7.41037C5.21949 7.24037 5.56049 7.24037 5.83049 7.41037C6.09949 7.58037 6.25049 7.88937 6.21949 8.20037V15.1104Z" />
                                        </svg>
                                        <p className={styles.view_item_text}>Analytics</p>
                                    </div>

                                    <div id="view_active" className={styles.view_option} onClick={() => setMenuView('corrector')}>
                                        <svg className={styles.view_icon} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.3264 0.209663C10.4861 0.0663223 10.6973 -0.00881318 10.9135 0.000824899C15.4843 0.137655 19.3044 3.4558 19.9967 7.89063C20.0011 7.91711 20.0011 7.94411 19.9967 7.97059C20.0116 8.18043 19.9407 8.38745 19.7996 8.54585C19.6586 8.70425 19.459 8.80099 19.2451 8.81466L11.5656 9.3211C11.3116 9.34362 11.0597 9.26005 10.8718 9.09092C10.6839 8.92179 10.5774 8.68278 10.5785 8.43261L10.0623 0.889316V0.764928C10.0717 0.552776 10.1667 0.353003 10.3264 0.209663ZM9.79965 11.2936L16.4297 10.8848H16.5011C16.7869 10.8895 17.0591 11.0054 17.2579 11.207C17.4566 11.4087 17.5655 11.6795 17.5606 11.9599C17.2984 15.782 14.4962 18.9755 10.6828 19.7982C6.86938 20.621 2.96017 18.8754 1.08778 15.5139C0.537217 14.5457 0.189303 13.4794 0.064454 12.3775C0.0160313 12.051 -0.0051696 11.7212 0.00106199 11.3913C0.0136824 7.32706 2.90728 3.81907 6.95607 2.9595C7.4462 2.86776 7.93762 3.11248 8.15146 3.55479C8.25711 3.71408 8.28448 3.9091 8.29693 4.09983C8.36702 5.17389 8.43928 6.23903 8.51126 7.30004C8.57317 8.2127 8.63488 9.1223 8.69482 10.0319C8.69173 10.2462 8.7254 10.4594 8.79444 10.6627C8.95695 11.0627 9.36136 11.3165 9.79965 11.2936Z" />
                                        </svg>
                                        {/* <p className={styles.view_item_text}>Anwsers <span className={styles.notification}>{all.length - 1}</span></p> */}
                                        <p className={styles.view_item_text}>Anwsers<span className={styles.notification}>{TotalQuestions - wrongAnswersCount - correctAnswersCount === 0 ? all.length : all.length - 1}</span></p>

                                    </div>
                                </div>
                            </div>
                            <div className={styles.general_stats}>
                                <div className={styles.stats_boxes}>
                                    <h3 className={styles.stats_icon}>{minutes}:{seconds}</h3>
                                    <p className={styles.stats_description}>Time to Answer</p>
                                </div>

                                <div className={styles.stats_boxes}>
                                    <h3 className={styles.stats_icon}>{points}</h3>
                                    <p className={styles.stats_description}>Coins Collected</p>
                                </div>

                                <div className={styles.stats_boxes}>
                                    <h3 className={styles.stats_icon}>{correctAnswersCount}</h3>
                                    <p className={styles.stats_description}>Correct Answers</p>
                                </div>

                                <div className={styles.stats_boxes}>
                                    <h3 className={styles.stats_icon}>{wrongAnswersCount}</h3>
                                    <p className={styles.stats_description}>Wrong Answers</p>
                                </div>

                                <div className={styles.stats_boxes}>
                                    <h3 className={styles.stats_icon}>{TotalQuestions - wrongAnswersCount - correctAnswersCount}</h3>
                                    <p className={styles.stats_description}>Left Questions</p>
                                </div>

                                <div className={styles.stats_boxes}>
                                    <h3 className={styles.stats_icon}>{TotalQuestions}</h3>
                                    <p className={styles.stats_description}>Total Questions</p>
                                </div>
                                <p style={{ marginTop: '12px' }} className={styles.stats_title}>Settings</p>
                                {
                                    sounds === true ?

                                        <svg className={styles.mute} onClick={() => setSounds(!sounds)} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M12.3571 3.45057C12.3068 2.96423 12.2543 2.45964 12.1254 1.95612C11.7741 0.751537 10.801 1.72245e-05 9.75762 1.72245e-05C9.17565 -0.00212998 8.43954 0.356452 8.0222 0.719329L4.56287 3.61698H2.75194C1.41918 3.61698 0.347511 4.64441 0.145131 6.12705C-0.0268386 7.55065 -0.0687825 10.2379 0.145131 11.8043C0.330733 13.3706 1.35416 14.383 2.75194 14.383H4.56287L8.08931 17.3236C8.45107 17.6382 9.08967 17.9989 9.67688 17.9989C9.71463 18 9.74819 18 9.78174 18C10.845 18 11.7814 17.2206 12.1327 16.0192C12.2659 15.5082 12.312 15.0293 12.3571 14.5666L12.4043 14.1082C12.5846 12.6213 12.5846 5.36909 12.4043 3.89289L12.3571 3.45057Z" />
                                            <path d="M16.4066 3.49459C16.1182 3.06944 15.5468 2.96315 15.1284 3.25839C14.7142 3.55578 14.6114 4.14197 14.8998 4.56604C15.7019 5.74807 16.1434 7.32197 16.1434 9.00001C16.1434 10.677 15.7019 12.2519 14.8998 13.434C14.6114 13.858 14.7142 14.4442 15.1294 14.7416C15.2846 14.8511 15.466 14.9091 15.6527 14.9091C15.9536 14.9091 16.2346 14.7577 16.4066 14.5054C17.4195 13.0131 17.9785 11.0581 17.9785 9.00001C17.9785 6.94192 17.4195 4.98689 16.4066 3.49459Z" />
                                            <path d="M19.5672 0.457266C19.2809 0.0331942 18.7073 -0.0752394 18.29 0.221074C17.8758 0.518461 17.773 1.10465 18.0603 1.52872C19.4172 3.52776 20.1649 6.1817 20.1649 8.9999C20.1649 11.8192 19.4172 14.4731 18.0603 16.4722C17.773 16.8973 17.8758 17.4824 18.291 17.7798C18.4462 17.8893 18.6266 17.9473 18.8132 17.9473C19.1142 17.9473 19.3963 17.7959 19.5672 17.5436C21.1359 15.2343 21.9999 12.2003 21.9999 8.9999C21.9999 5.80165 21.1359 2.76658 19.5672 0.457266Z" />
                                        </svg>

                                        :

                                        <svg className={styles.mute} onClick={() => setSounds(!sounds)} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M12.8579 4.55634C12.8762 4.68965 12.8933 4.81521 12.9025 4.9814L3.29014 14.5926H3.06782C1.65985 14.5926 0.632979 13.5976 0.442426 12.0522C0.2307 10.5068 0.273045 7.86053 0.442426 6.45272C0.643565 4.99198 1.72337 3.9864 3.06782 3.9864H4.89925L8.39272 1.12739C8.81618 0.768555 9.5678 0.429834 10.15 0.41819C11.2087 0.41819 12.1826 1.1602 12.532 2.34572C12.6696 2.84216 12.7225 3.34072 12.7649 3.81598L12.8496 4.49449C12.8524 4.5154 12.8552 4.53596 12.8579 4.55634ZM11.8808 10.7315C12.0248 10.5907 12.3434 10.4912 12.4874 10.5272C12.877 10.6267 12.9521 11.1845 12.9468 11.6228C12.9288 12.8951 12.8854 13.78 12.8177 14.3272L12.77 14.7782L12.7692 14.7866C12.724 15.2402 12.6771 15.7096 12.5435 16.2103C12.1899 17.3937 11.2446 18.1622 10.1711 18.1622C10.1351 18.1622 10.1002 18.1622 10.0642 18.1611C9.47136 18.1611 8.82666 17.8055 8.46143 17.4953L7.16038 16.4887C6.66706 16.1214 6.81209 15.5339 7.08945 15.1942C7.2965 14.9413 9.78432 12.658 11.0922 11.4577C11.5363 11.0502 11.8443 10.7675 11.8808 10.7315Z" />
                                            <path d="M18.7275 0.269787C18.3538 -0.0911623 17.7801 -0.0890453 17.4201 0.270846L0.270349 17.4186C-0.0906437 17.7795 -0.0906438 18.3543 0.273524 18.7322C0.459843 18.9047 0.690624 19 0.924581 19C1.16383 19 1.40943 18.8994 1.57987 18.729L18.7286 1.58127C19.0906 1.21926 19.0906 0.632854 18.7275 0.269787Z" />
                                        </svg>
                                }
                            </div>

                        </>

                        :

                        <>

                            <div className={styles.view_container}>
                                <div className={styles.view_wrapper}>
                                    <div id="view_active" onClick={() => setMenuView('stats')} className={styles.view_option}>
                                        <svg className={styles.view_icon} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.33049 0.000366211H14.6695C18.0705 0.000366211 19.9905 1.92937 20.0005 5.33037V14.6704C20.0005 18.0704 18.0705 20.0004 14.6695 20.0004H5.33049C1.92949 20.0004 0.000488281 18.0704 0.000488281 14.6704V5.33037C0.000488281 1.92937 1.92949 0.000366211 5.33049 0.000366211ZM10.0495 15.8604C10.4805 15.8604 10.8395 15.5404 10.8795 15.1104V4.92037C10.9195 4.61037 10.7705 4.29937 10.5005 4.13037C10.2195 3.96037 9.87949 3.96037 9.61049 4.13037C9.33949 4.29937 9.19049 4.61037 9.21949 4.92037V15.1104C9.27049 15.5404 9.62949 15.8604 10.0495 15.8604ZM14.6505 15.8604C15.0705 15.8604 15.4295 15.5404 15.4805 15.1104V11.8304C15.5095 11.5094 15.3605 11.2104 15.0895 11.0404C14.8205 10.8704 14.4805 10.8704 14.2005 11.0404C13.9295 11.2104 13.7805 11.5094 13.8205 11.8304V15.1104C13.8605 15.5404 14.2195 15.8604 14.6505 15.8604ZM6.21949 15.1104C6.17949 15.5404 5.82049 15.8604 5.38949 15.8604C4.95949 15.8604 4.59949 15.5404 4.56049 15.1104V8.20037C4.53049 7.88937 4.67949 7.58037 4.95049 7.41037C5.21949 7.24037 5.56049 7.24037 5.83049 7.41037C6.09949 7.58037 6.25049 7.88937 6.21949 8.20037V15.1104Z" />
                                        </svg>
                                        <p className={styles.view_item_text}>Analytics</p>
                                    </div>

                                    <div id="view_inactive" className={styles.view_option} onClick={() => setMenuView('corrector')}>
                                        <svg className={styles.view_icon} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.3264 0.209663C10.4861 0.0663223 10.6973 -0.00881318 10.9135 0.000824899C15.4843 0.137655 19.3044 3.4558 19.9967 7.89063C20.0011 7.91711 20.0011 7.94411 19.9967 7.97059C20.0116 8.18043 19.9407 8.38745 19.7996 8.54585C19.6586 8.70425 19.459 8.80099 19.2451 8.81466L11.5656 9.3211C11.3116 9.34362 11.0597 9.26005 10.8718 9.09092C10.6839 8.92179 10.5774 8.68278 10.5785 8.43261L10.0623 0.889316V0.764928C10.0717 0.552776 10.1667 0.353003 10.3264 0.209663ZM9.79965 11.2936L16.4297 10.8848H16.5011C16.7869 10.8895 17.0591 11.0054 17.2579 11.207C17.4566 11.4087 17.5655 11.6795 17.5606 11.9599C17.2984 15.782 14.4962 18.9755 10.6828 19.7982C6.86938 20.621 2.96017 18.8754 1.08778 15.5139C0.537217 14.5457 0.189303 13.4794 0.064454 12.3775C0.0160313 12.051 -0.0051696 11.7212 0.00106199 11.3913C0.0136824 7.32706 2.90728 3.81907 6.95607 2.9595C7.4462 2.86776 7.93762 3.11248 8.15146 3.55479C8.25711 3.71408 8.28448 3.9091 8.29693 4.09983C8.36702 5.17389 8.43928 6.23903 8.51126 7.30004C8.57317 8.2127 8.63488 9.1223 8.69482 10.0319C8.69173 10.2462 8.7254 10.4594 8.79444 10.6627C8.95695 11.0627 9.36136 11.3165 9.79965 11.2936Z" />
                                        </svg>
                                        <p className={styles.view_item_text}>Anwsers<span className={styles.notification}>{all.length - 1}</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.general_corrector}>
                                {
                                    currentQuestion === 0 ?
                                        <>
                                            <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_dmw3t0vg.json" background="transparent" speed="1" style={{ width: '220px', height: '220px', marginRight: '.5em', opacity: '.89' }} loop autoplay></lottie-player>
                                            <h3 className={styles.nothing}>Nothing yet, start playing the quiz.</h3>
                                        </>
                                        : null
                                }

                                {all?.map(item =>
                                    item === undefined ?
                                        null
                                        :
                                        <div className={styles.questions_boxes}>
                                            <p className={styles.question_current}>
                                                The correct anwser for "{item.question}", was:
                                            </p>

                                            {item.anwsers.map(test => <h3 className={styles.question_which}>{test.isCorrect && test.anwser}</h3>)}
                                        </div>
                                )}

                            </div>
                        </>
                }
            </header>
            <div className={styles.play_area}>
                <div className={styles.bar}>
                    <div className={styles.bar_value}>
                        How much you know about programming?
                    </div>
                </div>

                {
                    modal === false

                        ?
                        <>
                            <div className={styles.question} data-aos="fade-left">

                                <div style={timeprogress} />

                                {questions[currentQuestion].question}
                            </div>

                            <div className={styles.anwsers} data-aos="fade-right">
                                {
                                    questions[currentQuestion].anwsers.map(item => <div data-aos="fade-right" onClick={(which) => { handleAnswer(item.isCorrect) }} className={styles.anwser}>{item.anwser}</div>)
                                }
                            </div>
                        </>
                        :
                        <div className={styles.modal} data-aos="fade-top">
                            <div className={styles.profile}>
                                <img src={avatar} />

                                <div className={styles.profile_wrapper}>
                                    <p>
                                        Benjamin Fazli

                                    </p>

                                    <p>102013 coins + 22 from this game</p>
                                </div>

                            </div>
                            <button className={styles.button}
                                onClick={() => resetQuiz()}>
                                Play again with 200 coins
                            </button>
                        </div>
                }
            </div>
        </main>
    )
}
