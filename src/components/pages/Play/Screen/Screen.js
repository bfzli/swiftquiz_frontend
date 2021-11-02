import * as styles from './Screen.module.scss'
import { useState, useEffect } from 'react'
import Questions from './dataJSON'
import wrong_choice from '../../../../assets/voices/isWrong.mp3'
import correct_choice from '../../../../assets/voices/isCorrect.mp3'

export default function Screen() {

    const [menuView, setMenuView] = useState('stats');
    const [questions] = useState(Questions)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [correctAnswersCount, setCorrectAnwsersCount] = useState(0)
    const [points, setPoints] = useState(0)
    const [wrongAnswersCount, setWrongAnwsersCount] = useState(0)
    const [modal, setModal] = useState(false)
    const TotalQuestions = questions.length
    const [countDown, setCountDown] = useState(0);
    const [runTimer, setRunTimer] = useState(true);

    let [all, setAll] = useState([])

    let wrong_choice_run = new Audio(wrong_choice)
    let correct_choice_run = new Audio(correct_choice)

    useEffect(() => {
        var seperate = questions[currentQuestion -1];
        setAll([...all, seperate])
    }, [currentQuestion])

    useEffect(() => {
        console.log("all:", all);
        console.log("questions:", questions);
    }, [all])

    let handleAnswer = (isCorrect) => {
        if (isCorrect === true) {
            correct_choice_run.play()
            var newScore = correctAnswersCount + 1;
            var newPoints = points + 10;
            setPoints(newPoints);
            setCorrectAnwsersCount(newScore);
        }

        if (isCorrect !== true) {
            wrong_choice_run.play();
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
    }

    let timeout = () => {

        var nextQuestion = currentQuestion + 1

        var wrong = wrongAnswersCount + 1;
        setWrongAnwsersCount(wrong)
        wrong_choice_run.play()

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
        bottom: '0',
        left: '0',
        width: `${prg}%`,
        backgroundColor: 'white',
        transform: 'width 0.45s ease-in-out',
        borderBottomLeftRadius: '2323em',
        borderBottomRightRadius: '232em'
    }


    return (
        <main className={styles.container}>
            <header className={styles.header}>
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
                                        <p className={styles.view_item_text}>Anwsers</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.general_stats}>
                                <div className={styles.stats_boxes}>
                                    <h3 className={styles.stats_icon}>{minutes}:{seconds}</h3>
                                    <p className={styles.stats_description}>Time to Answer</p>
                                    <div style={timeprogress} />
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
                                        <p className={styles.view_item_text}>Anwsers</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.general_stats}>
                                 {all.map(item =>
                                    <div className={styles.questions_boxes}>
                                        {item.anwsers.map(test => <h3 className={styles.question_which}>{test.isCorrect && test.anwser}</h3>)}
                                        <p className={styles.question_current}>
                                            {item.question}
                                        </p>
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
                            <div className={styles.question}>
                                {questions[currentQuestion].question}
                            </div>

                            <div className={styles.anwsers}>
                                {
                                    questions[currentQuestion].anwsers.map(item => <div onClick={() => handleAnswer(item.isCorrect)} className={styles.anwser}>{item.anwser}</div>)
                                }
                            </div>
                        </>
                        :
                        <div className={styles.modal}>
                            <h1>
                                You scored {correctAnswersCount} of {TotalQuestions}
                            </h1>

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
