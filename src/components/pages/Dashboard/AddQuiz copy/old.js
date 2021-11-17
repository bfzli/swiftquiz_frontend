import { useState, useEffect } from 'react'
import * as styles from './AddQuiz.module.scss'
import Helmet from 'react-helmet'

export default function AddQuiz() {

    const [questions, setQuestions] = useState([{null: true}]);
    const [QuestionOrder, setQuestionOrder] = useState(0);

    const [question, setQuestion] = {
        question: '',
        anwsers: [
            { anwser1: '', isCorrect: false },
            { anwser2: '', isCorrect: false },
            { anwser3: '', isCorrect: false },
            { anwser4: '', isCorrect: false },
        ]
    }

    function new_question() {

        

        console.log(question)

        // setQuestions([...questions, question])

        // const nextQuestion = QuestionOrder + 1;
        // setQuestionOrder(nextQuestion)
    }

    return (
        <div className={styles.container}>
            <Helmet>
                <title>Add Quiz - SwiftQuiz</title>
            </Helmet>

            <div className={styles.slides}>
                {
                    questions[0].null !== true ?
                    questions.map(item =>
                        <div className={styles.single_slide}>
                            {
                                questions[0].null !== true ? questions[0].question : 'no questions'
                            }
                        </div>
                    ) : null // here it is the somethign
                }
                <div onClick={() => new_question()} className={styles.add_slide}>
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
                        <h1 
                        onClick={(e) => setQuestion([...question, question.question = e.target.value])}
                        contentEditable="true" 
                        className={styles.current_question_text}>
                        {questions[0].null !== true ? questions[QuestionOrder].question : 'here is your question'}
                        </h1>
                    </div>

                    <div className={styles.options_wrapper}>
                        {console.log(questions)}

                        <div className={styles.option}>
                            <p
                                onChange={(e) => setQuestion([...question, question.question.answers.anwser1 = e.target.value])}
                                contentEditable="true">
                                {questions[0].null !== true ? questions[QuestionOrder].anwsers[QuestionOrder].anwser : null}
                            </p>
                        </div>

                        <div className={styles.option}>
                            <p
                                onChange={(e) => setQuestion([...question, question.question.answers.anwser2 = e.target.value])}
                                contentEditable="true">
                                {questions[0].null !== true ? questions[QuestionOrder].anwsers[QuestionOrder].anwser : null}
                            </p>
                        </div>

                        <div className={styles.option}>
                            <p
                                onChange={(e) => setQuestion([...question, question.question.answers.anwser3 = e.target.value])}
                                contentEditable="true">
                                {questions[0].null !== true ? questions[QuestionOrder].anwsers[QuestionOrder].anwser : null}
                            </p>
                        </div>

                        <div className={styles.option}>
                            <p
                                onChange={(e) => setQuestion([...question, question.question.answers.anwser4 = e.target.value])}
                                contentEditable="true">
                                {questions[0].null !== true ? questions[QuestionOrder].anwsers[QuestionOrder].anwser : null}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
