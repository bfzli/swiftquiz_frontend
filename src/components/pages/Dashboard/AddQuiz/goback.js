import * as styles from './AddQuiz.module.scss'
import Helmet from 'react-helmet'
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { createQuiz } from '../../../../reduxComponents/actions/Questions';


export default function AddQuiz() {

    const dispatch = useDispatch();

    const [quiz, setQuiz] = useState({
        title: 'test',
        description: 'test',
        user_id: 'test',
        thumbnail: 'test',
        timer: 'test',
        questions: []
    })

    const newObj = {
        title: 'Quiz 2',
        description: 'Quiz to play',
        difficulty: 1,
        thumbnail: '',
        category: "61814110fef0cd2c3264a354",
        questions: [
        ]
    }

 

    const [mode, setMode] = useState("add");
    const [questionList, setQuestionList] = useState([]);
    const [edited, setEdited] = useState({});
    let questionCount = 0;

    useEffect(() => {
        console.log("The inside of Quiz: ", quiz)
        console.log("List of questions: ", questionList)
    }, [quiz, questionList])


    // const [fields, updateFields] = useState({
    //     id: Math.floor(100000 + Math.random() * 900000),
    //     question: "",
    //     answer1: "",
    //     answer2: "",
    //     answer3: "",
    //     answer4: ""
    // });



    const [fields, updateFields] = useState({
        id: Math.floor(100000 + Math.random() * 900000),
        question: "",
        anwsers: [
            { anwser1: '', isCorrect: false },
            { anwser2: '', isCorrect: false },
            { anwser3: '', isCorrect: false },
            { anwser4: '', isCorrect: false },
        ]
    });

    const addQuestion = (question) => {
        setQuestionList([...questionList, question]);
        setQuiz({...quiz, question: [...questionList, question]})

        setQuiz(newObj);

        if (mode === "add") {
            updateFields({
                question: "",
                anwsers: [
                    { anwser1: '', isCorrect: false },
                    { anwser2: '', isCorrect: false },
                    { anwser3: '', isCorrect: false },
                    { anwser4: '', isCorrect: false },
                ]
            })

        }
    };

    const editQuestion = (question) => {
        setMode("edit");
        setEdited(question);
    };

    // const deleteQuestion = (question) => {
    //     const find = questionList.filter((q) => q.id === question.id);
    //     setQuestionList(find);
    // };

    const editQuestionSubmit = (question) => {
        setMode("add");
        const newData = questionList.map((item) => {
            if (question.id === item.id) {
                return question;
            }
            return item;
        });
        setQuestionList(newData);
    };

    useEffect(() => {
        if (mode === "edit") {
            updateFields(edited);
        }
    }, [mode, edited]);

    const setField = (type, e) => {
        const newData = { ...fields };
        newData[type] = e.target.value;
        updateFields(newData);
    };

    useEffect(() => {
        const newVal = questionList.length - 1;
        questionCount = newVal;

    }, [questionList])

    const questionAction = () => {
        if (mode === "edit") {
            editQuestionSubmit(fields);
            updateFields({
                question: "",
                anwsers: [
                    { anwser1: '', isCorrect: false },
                    { anwser2: '', isCorrect: false },
                    { anwser3: '', isCorrect: false },
                    { anwser4: '', isCorrect: false },
                ]
            });
        } else {
            addQuestion(fields);
        }
    };

    return (
        <div className={styles.container}>
            <Helmet>
                <title>Add Quiz - SwiftQuiz</title>
            </Helmet>

            <div className={styles.slides}>
                {questionList.length <= 0 ? (
                    <div className={styles.empty_slide}>
                        <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_GlZGOi.json" background="transparent" speed="1" style={{ width: '220px', height: '220px' }} loop autoplay></lottie-player>
                        <p>Start by adding a quiz, because there is none</p>
                    </div>
                ) : (
                    <>
                        {questionList.map((item, i) => {
                            return (
                                <div onClick={() => editQuestion(item)} key={i} className={i === item.id ? styles.single_slide_active : styles.single_slide}>
                                    {item.question}
                                </div>
                            );
                        })}
                    </>
                )}

                {mode === "edit" ? null :
                    <div onClick={questionAction} className={styles.add_slide}>
                        Add Question
                    </div>
                }

                <button onClick={() => dispatch(createQuiz(quiz))}>Add Quiz to Database</button>
                {/* <button onClick={() => handleTest()}> add to localsor</button> */}
            </div>

            <div className={styles.right_wrapper}>
                <div className={styles.header}>
                    <div className={styles.navicon_wrapper}>
                        <div className={styles.navicon}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.92908 21.485L10.7751 15.639C11.2003 15.753 11.6514 15.7235 12.0581 15.555C12.4649 15.3865 12.8047 15.0886 13.0249 14.7073C13.2451 14.326 13.3332 13.8827 13.2758 13.4462C13.2183 13.0097 13.0184 12.6043 12.7071 12.293C12.3958 11.9817 11.9904 11.7818 11.5539 11.7243C11.1174 11.6668 10.6741 11.755 10.2928 11.9752C9.91152 12.1954 9.61354 12.5352 9.44508 12.942C9.27661 13.3487 9.24709 13.7997 9.36108 14.225L3.51508 20.071L2.45508 19.011C5.28208 15.711 6.34308 12.057 7.75708 5.92901L14.1211 5.22201L19.7781 10.879L19.0711 17.243C12.9431 18.657 9.28908 19.718 5.99008 22.546L4.92908 21.486V21.485ZM16.5961 2.04001L22.9431 8.38601C23.0085 8.4513 23.0545 8.53344 23.076 8.62331C23.0976 8.71318 23.0938 8.80726 23.0651 8.89511C23.0364 8.98296 22.9839 9.06113 22.9135 9.12096C22.8431 9.18078 22.7574 9.21991 22.6661 9.23401L21.1921 9.46401L15.5361 3.80801L15.7481 2.32301C15.7613 2.23118 15.7997 2.14483 15.8592 2.07361C15.9186 2.0024 15.9967 1.94912 16.0847 1.91976C16.1727 1.89039 16.2672 1.88608 16.3575 1.90732C16.4478 1.92856 16.5304 1.9745 16.5961 2.04001Z" fill="#333333" />
                            </svg>
                        </div>
                        <div className={styles.navicon_text}>
                            <p>Edit Quiz</p>
                        </div>
                    </div>
                    <div className={styles.navicon_wrapper}>
                        <div className={styles.navicon}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.29101 20.824L2.00001 22L3.17601 16.709C2.40154 15.2604 1.99754 13.6426 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.3574 22.0025 8.73963 21.5985 7.29101 20.824ZM7.00001 12C7.00001 13.3261 7.5268 14.5979 8.46448 15.5355C9.40216 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12H15C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7957 15 12 15C11.2044 15 10.4413 14.6839 9.87869 14.1213C9.31608 13.5587 9.00001 12.7956 9.00001 12H7.00001Z" fill="#333333" />
                            </svg>

                        </div>
                        <div className={styles.navicon_text}>
                            <p>{quiz.question.length} questions</p>
                        </div>
                    </div>


                    <div className={styles.navicon_wrapper}>
                        <div className={styles.navicon}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM10.622 8.415C10.5618 8.37485 10.4919 8.35177 10.4196 8.34822C10.3473 8.34467 10.2755 8.36079 10.2116 8.39486C10.1478 8.42893 10.0944 8.47967 10.0572 8.54168C10.0199 8.60369 10.0001 8.67465 10 8.747V15.253C10.0001 15.3253 10.0199 15.3963 10.0572 15.4583C10.0944 15.5203 10.1478 15.5711 10.2116 15.6051C10.2755 15.6392 10.3473 15.6553 10.4196 15.6518C10.4919 15.6482 10.5618 15.6252 10.622 15.585L15.501 12.333C15.5559 12.2965 15.6009 12.247 15.632 12.1889C15.6631 12.1308 15.6794 12.0659 15.6794 12C15.6794 11.9341 15.6631 11.8692 15.632 11.8111C15.6009 11.753 15.5559 11.7035 15.501 11.667L10.621 8.415H10.622Z" fill="#333333" />
                            </svg>
                        </div>
                        <div className={styles.navicon_text}>
                            <p>15 seconds</p>
                        </div>
                    </div>

                    <div className={styles.navicon_wrapper}>
                        <div className={styles.navicon}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM18.355 15.952V15.847C18.355 14.925 18.355 14.504 17.703 14.131C17.4934 14.0122 17.2782 13.9037 17.058 13.806C16.691 13.639 16.448 13.53 16.12 13.05C16.0808 12.993 16.0422 12.9357 16.004 12.878C15.659 12.353 15.41 11.975 14.462 12.125C12.597 12.421 12.459 12.749 12.377 13.303L12.364 13.394C12.243 14.204 12.221 14.476 12.559 14.831C13.824 16.158 14.582 17.115 14.812 17.675C14.924 17.948 15.212 18.775 15.014 19.593C16.2278 19.1095 17.3083 18.3425 18.165 17.356C18.275 16.982 18.355 16.516 18.355 15.952ZM12 3.833C9.683 3.833 7.59 4.799 6.104 6.349C6.281 6.472 6.435 6.645 6.541 6.883C6.745 7.34 6.745 7.811 6.745 8.228C6.745 8.556 6.745 8.868 6.85 9.093C6.994 9.401 7.616 9.533 8.165 9.647C8.362 9.689 8.564 9.731 8.748 9.782C9.254 9.922 9.646 10.377 9.959 10.742C10.089 10.893 10.282 11.116 10.379 11.172C10.429 11.136 10.59 10.961 10.669 10.674C10.731 10.454 10.713 10.26 10.624 10.154C10.064 9.494 10.095 8.224 10.268 7.755C10.54 7.016 11.39 7.071 12.012 7.111C12.244 7.126 12.462 7.141 12.626 7.12C13.248 7.042 13.44 6.095 13.575 5.91C13.867 5.51 14.761 4.907 15.315 4.535C14.2715 4.07099 13.142 3.83181 12 3.833Z" fill="#333333" />
                            </svg>
                        </div>
                        <div className={styles.navicon_text}>
                            <p>Public</p>
                        </div>
                    </div>
                    {
                        mode === "edit"
                            ?

                            <div onClick={questionAction} className={styles.navicon_wrapper}>
                                <div className={styles.navicon}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#333333" />
                                    </svg>
                                </div>
                                <div className={styles.navicon_text}>
                                    Save Question
                                </div>
                            </div>

                            :

                            null

                    }
                </div>
                <div className={styles.current_slide}>
                    <div className={styles.current_question}>
                        <input
                            className={styles.current_question_input}
                            placeholder="START TYPING YOUR QUIZ"
                            onChange={(e) => setField("question", e)}
                            value={fields.question}
                        />
                    </div>

                    <div className={styles.options_wrapper}>

                        <div className={styles.option}>
                            <input
                                className={styles.option_input}
                                placeholder="Option One"
                                type="text"
                                onChange={(e) => setField("answer1", e)}
                                value={fields.anwsers.answer1}
                            />
                        </div>

                        <div className={styles.option}>
                            <input
                                className={styles.option_input}
                                placeholder="Option Two"
                                type="text"
                                onChange={(e) => setField("answer2", e)}
                                value={fields.anwsers.answer2}
                            />
                        </div>

                        <div className={styles.option}>
                            <input
                                className={styles.option_input}
                                placeholder="Option Three"
                                type="text"
                                onChange={(e) => setField("answer3", e)}
                                value={fields.anwsers.answer3}
                            />
                        </div>

                        <div className={styles.option}>
                            <input
                                className={styles.option_input}
                                placeholder="Option Four"
                                type="text"
                                onChange={(e) => setField("anwsers.answer4", e)}
                                value={fields.anwsers.answer4}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}