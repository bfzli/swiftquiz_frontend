import { useState, useEffect } from 'react'
import * as styles from './AddQuiz.module.scss'
import Helmet from 'react-helmet'

export default function AddQuiz() {

    const [questions, setQuestions] = useState([
        {
            question: 'Your question here...',
            anwsers: [
                { anwser: 'your option here...', isCorrect: true },
                { anwser: 'your option here...', isCorrect: false },
                { anwser: 'your option here...', isCorrect: false },
                { anwser: 'your option here...', isCorrect: false },
            ]
        }]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [indexes, setIndexes] = useState(0)

    function addQuiz() {
        const temp = {
            question: 'What type of data is "23.4"?',
            anwsers: [
                { anwser: 'String', isCorrect: false },
                { anwser: 'Int', isCorrect: false },
                { anwser: 'Float', isCorrect: true },
                { anwser: 'Double', isCorrect: false },
            ]
        }

        setQuestions([...questions, temp])

        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion)
    }

    return (
        <div className={styles.container}>
            <Helmet>
                <title>Add Quiz - SwiftQuiz</title>
            </Helmet>

            <div className={styles.slides}>
                {
                    questions.map(item =>
                        <div className={styles.single_slide}>
                            {
                                questions[0].question
                            }
                        </div>
                    )
                }
                <div onClick={() => addQuiz()} className={styles.add_slide}>
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
                        <h1 contentEditable="true" className={styles.current_question_text}>{questions[currentQuestion].question}</h1>
                    </div>

                    <div className={styles.options_wrapper}>
                        {questions[currentQuestion].anwsers.map(item =>
                            <div className={styles.option}>
                                <p contentEditable="true" className={styles.option_text}>{item.anwser}</p>
                            </div>
                        )}
                        {console.log(questions)}
                    </div>
                </div>
            </div>

        </div>
    )
}
