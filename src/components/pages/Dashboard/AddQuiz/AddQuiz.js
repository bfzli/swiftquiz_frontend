import * as styles from './AddQuiz.module.scss'
import Helmet from 'react-helmet'
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { createQuiz } from '../../../../reduxComponents/actions/Questions';

import Edit from './modals/Edit';


export default function AddQuiz() {
    const dispatch = useDispatch();

    const [editModal, setEditModal] = useState(false)
    const [publishingModal, setPublishingModal] = useState('not-showing')

    const [mode, setMode] = useState("add");
    const [saving, setSaving] = useState(false);
    const [trueQ, setTrueQ] = useState('none');

    const [questionList, setQuestionList] = useState([]);

    const [edited, setEdited] = useState({});

    const [currentID, setCurrentID] = useState('')

    const [quiz, setQuiz] = useState({
        title: '',
        description: '',
        difficulty: 1,
        thumbnail: '',
        category: "61814110fef0cd2c3264a354",
        questions: [],
    })

    const [fields, updateFields] = useState({
        quiz_id: Math.floor(100000 + Math.random() * 900000),
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        isCorrect: ""
    });

    useEffect(() => {
        console.log("quiz: ", quiz)
        console.log("list of q: ", questionList)
    }, [quiz, questionList])

    function handleCorrectAnwser(which) {

        if (which === "answer1") {
            setTrueQ('anwser1');
            setTrue("isCorrect", "answer1")
        }

        else if (which === "answer2") {
            setTrueQ('anwser2');
            setTrue("isCorrect", "answer2")
        }

        else if (which === "answer3") {
            setTrueQ('anwser3');
            setTrue("isCorrect", "answer3")
        }

        else if (which === "answer4") {
            setTrueQ('anwser4');
            setTrue("isCorrect", "answer4")
        }
    }
    const addQuestion = (question) => {
        setQuestionList([...questionList, question]);
        setQuiz({ ...quiz, questions: [...questionList, question] })
        if (mode === "add") {
            updateFields({
                quiz_id: Math.floor(100000 + Math.random() * 900000),
                question: "",
                answer1: "",
                answer2: "",
                answer3: "",
                answer4: "",
                isCorrect: ""
            })
        }
        setTrueQ('none')
    };

    const editQuestion = (question) => {
        setMode("edit");
        setEdited(question);
    };

    const deleteQuestion = (question) => {
        const find = questionList.filter((q) => q.id === question.id);
        setQuestionList(find);
    };

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

    const setTrue = (type, e) => {
        const newData = { ...fields };
        newData[type] = e;
        updateFields(newData);
    }

    const setParent = (type, e) => {
        const newData = { ...quiz };
        newData[type] = e.target.value;
        setQuiz(newData);
    }

    const questionAction = () => {
        if (mode === "edit") {
            editQuestionSubmit(fields);
            updateFields({
                question: "",
                answer1: "",
                answer2: "",
                answer3: "",
                answer4: "",
                isCorrect: ""
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
                <div className={styles.miniheader}>
                    <p className={styles.mini_title}>
                        Your Questions
                    </p>
                </div>
                {questionList.length <= 0 ? (
                    <div className={styles.empty_slide}>
                        <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_GlZGOi.json" background="transparent" speed="1" style={{ width: '242px', height: '242px' }} loop autoplay></lottie-player>
                        <p className={styles.empty_text}>No questions yet!</p>
                    </div>
                ) : (
                    <div className={styles.quiz_list}>
                        {questionList.map((item, i) => {
                            return (
                                <div onClick={() => editQuestion(item)} key={i} className={i === item.id ? styles.single_slide_active : styles.single_slide}>
                                    {item.question}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            <div className={styles.right_wrapper}>
                <div className={styles.header}>
                    <div className={styles.navicon_wrapper}>
                        <div className={styles.navicon}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.29101 20.824L2.00001 22L3.17601 16.709C2.40154 15.2604 1.99754 13.6426 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.3574 22.0025 8.73963 21.5985 7.29101 20.824ZM7.00001 12C7.00001 13.3261 7.5268 14.5979 8.46448 15.5355C9.40216 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12H15C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7957 15 12 15C11.2044 15 10.4413 14.6839 9.87869 14.1213C9.31608 13.5587 9.00001 12.7956 9.00001 12H7.00001Z" fill="#333333" />
                            </svg>
                        </div>
                        <div className={styles.navicon_text}>
                            <p>{quiz.questions.length} Questions</p>
                        </div>
                    </div>

                    <div onClick={() => setEditModal(!editModal)} className={styles.navicon_wrapper}>
                        <div className={styles.navicon}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.92908 21.485L10.7751 15.639C11.2003 15.753 11.6514 15.7235 12.0581 15.555C12.4649 15.3865 12.8047 15.0886 13.0249 14.7073C13.2451 14.326 13.3332 13.8827 13.2758 13.4462C13.2183 13.0097 13.0184 12.6043 12.7071 12.293C12.3958 11.9817 11.9904 11.7818 11.5539 11.7243C11.1174 11.6668 10.6741 11.755 10.2928 11.9752C9.91152 12.1954 9.61354 12.5352 9.44508 12.942C9.27661 13.3487 9.24709 13.7997 9.36108 14.225L3.51508 20.071L2.45508 19.011C5.28208 15.711 6.34308 12.057 7.75708 5.92901L14.1211 5.22201L19.7781 10.879L19.0711 17.243C12.9431 18.657 9.28908 19.718 5.99008 22.546L4.92908 21.486V21.485ZM16.5961 2.04001L22.9431 8.38601C23.0085 8.4513 23.0545 8.53344 23.076 8.62331C23.0976 8.71318 23.0938 8.80726 23.0651 8.89511C23.0364 8.98296 22.9839 9.06113 22.9135 9.12096C22.8431 9.18078 22.7574 9.21991 22.6661 9.23401L21.1921 9.46401L15.5361 3.80801L15.7481 2.32301C15.7613 2.23118 15.7997 2.14483 15.8592 2.07361C15.9186 2.0024 15.9967 1.94912 16.0847 1.91976C16.1727 1.89039 16.2672 1.88608 16.3575 1.90732C16.4478 1.92856 16.5304 1.9745 16.5961 2.04001Z" fill="#333333" />
                            </svg>
                        </div>
                        <div className={styles.navicon_text}>
                            <p>Edit Quiz</p>
                        </div>
                    </div>

                    {mode === "edit" ? null :
                        <div onClick={() => questionAction()} className={styles.navicon_wrapper}>
                            <div className={styles.navicon}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="#333333" />
                                </svg>

                            </div>

                            <div className={styles.navicon_text}>
                                <p>Add Question</p>
                            </div>

                        </div>}

                    {mode !== "edit" ?
                        <div onClick={() => { setPublishingModal(!publishingModal); dispatch(createQuiz(quiz)) }} className={styles.navicon_wrapper}>
                            <div className={styles.navicon}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 14H11C9.3596 13.9994 7.75023 14.4471 6.34588 15.2949C4.94152 16.1427 3.7956 17.3582 3.032 18.81C3.01054 18.5405 2.99986 18.2703 3 18C3 12.477 7.477 8 13 8V2.5L23.5 11L13 19.5V14ZM11 12H15V15.308L20.321 11L15 6.692V10H13C11.8503 9.99871 10.7138 10.2458 9.66839 10.7244C8.62299 11.203 7.69332 11.9018 6.943 12.773C8.23432 12.2612 9.61096 11.9989 11 12Z" fill="#333333" />
                                </svg>
                            </div>
                            <div className={styles.navicon_text}>
                                <p>Publish Quiz</p>
                            </div>
                        </div>
                        :
                        <div onClick={() => deleteQuestion(currentID)} className={styles.navicon_wrapper}>
                            <div className={styles.navicon}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z" fill="#333333" />
                                </svg>
                            </div>
                            <div className={styles.navicon_text}>
                                <p>Delete Question</p>
                            </div>
                        </div>
                    }

                    {
                        mode === "edit"
                            ?

                            <div onClick={() => questionAction()} className={styles.navicon_wrapper}>
                                <div className={styles.navicon}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" fill="#333333" />
                                    </svg>
                                </div>
                                <div className={styles.navicon_text}>
                                    Edit Question
                                </div>
                            </div>

                            :

                            null
                    }
                </div>
                {mode === "edit" || mode === "add" ?
                    <div className={styles.current_slide}>
                        <div className={styles.current_question}>
                            <input
                                className={styles.current_question_input}
                                placeholder="Start typing your question..."
                                onChange={(e) => setField("question", e)}
                                value={fields.question}
                            />
                        </div>

                        <div className={styles.options_wrapper}>
                            <div className={trueQ === "anwser1" ? styles.option_active : styles.option}>
                                <input
                                    className={styles.option_input}
                                    placeholder="Your anwser here..."
                                    type="text"
                                    onChange={(e) => setField("answer1", e)}
                                    value={fields.answer1}
                                />
                                <div
                                    onClick={() =>
                                        handleCorrectAnwser('answer1')} className={styles.option_check}>
                                    <svg className={styles.option_check_icon} width="3.5em" height="3.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity={trueQ === "anwser1" ? "1" : ".1234"} d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" />
                                    </svg>
                                </div>
                            </div>

                            <div className={trueQ === "anwser2" ? styles.option_active : styles.option}>
                                <input
                                    className={styles.option_input}
                                    placeholder="Your anwser here..."
                                    type="text"
                                    onChange={(e) => setField("answer2", e)}
                                    value={fields.answer2}
                                />
                                <div
                                    onClick={() => handleCorrectAnwser('answer2')} className={styles.option_check}>
                                    <svg className={styles.option_check_icon} width="3.5em" height="3.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity={trueQ === "anwser2" ? "1" : ".1234"} d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" />
                                    </svg>
                                </div>
                            </div>

                            <div className={trueQ === "anwser3" ? styles.option_active : styles.option}>
                                <input
                                    className={styles.option_input}
                                    placeholder="Your anwser here..."
                                    type="text"
                                    onChange={(e) => setField("answer3", e)}
                                    value={fields.answer3}
                                />
                                <div
                                    onClick={() => handleCorrectAnwser('answer3')}
                                    className={styles.option_check}>
                                    <svg className={styles.option_check_icon} width="3.5em" height="3.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity={trueQ === "anwser3" ? "1" : ".1234"} d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" />
                                    </svg>
                                </div>
                            </div>

                            <div className={trueQ === "anwser4" ? styles.option_active : styles.option}
                            >
                                <input
                                    className={styles.option_input}
                                    placeholder="Your anwser here..."
                                    type="text"
                                    onChange={(e) => setField("answer4", e)}
                                    value={fields.answer4}
                                />
                                <div onClick={() => handleCorrectAnwser('answer4')} className={styles.option_check}>
                                    <svg className={styles.option_check_icon} width="3.5em" height="3.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity={trueQ === "anwser4" ? "1" : ".1234"} d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div> : 'add one question'}
            </div>

            {
                editModal &&

                <section className={styles._container}>
                    <div className={styles._modal}>
                        <svg className={styles._close_icon} onClick={() => setEditModal(!editModal)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.04999L7.04999 5.63599L12 10.586Z" />
                        </svg>
                        <h3 className={styles._modal_title}>Quiz Settings</h3>

                        <div className={styles._form_wrapper}>
                            <label className={styles._form_label_name} for="l-quiz-name">Title</label>
                            <input
                                className={styles._form_input}
                                type="text"
                                id="l-quiz-name"
                                placeholder="Title"
                                onChange={(e) => setParent("title", e)}
                                value={quiz.title} />
                        </div>

                        <div className={styles._form_wrapper}>
                            <label className={styles._form_label_name} for="l-quiz-name">Description</label>
                            <textarea
                                className={styles._form_input}
                                type="text"
                                id="l-quiz-name"
                                placeholder="Description"
                                onChange={(e) => setParent("description", e)}
                                value={quiz.description}
                            />
                        </div>

                        <div className={styles._form_wrapper}>
                            <label className={styles._form_label_name} for="l-quiz-name">Category</label>
                            <select className={styles._form_input} id="l-quiz-name" placeholder="Quiz Name">
                                <option>Programming</option>
                                <option>Mathematics</option>
                                <option>Algorithm</option>
                                <option>Physics</option>
                                <option>Computer Science</option>
                                <option>Sport</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className={styles._form_wrapper}>
                            <label className={styles._form_label_name} for="l-quiz-name">Quiz Name</label>
                            <input className={styles._form_input} type="file" id="l-quiz-name" placeholder="Quiz Name" />
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9999 12.586L16.2429 16.828L14.8279 18.243L12.9999 16.415V22H10.9999V16.413L9.17189 18.243L7.75689 16.828L11.9999 12.586ZM11.9999 2C13.7169 2.00008 15.374 2.63111 16.6561 3.77312C17.9382 4.91512 18.756 6.48846 18.9539 8.194C20.1982 8.53332 21.2836 9.2991 22.0206 10.3575C22.7575 11.416 23.099 12.6997 22.9855 13.9844C22.872 15.2691 22.3106 16.473 21.3995 17.3858C20.4883 18.2986 19.2854 18.8622 18.0009 18.978L17.9999 17C18.0015 15.4271 17.3854 13.9166 16.2842 12.7935C15.1831 11.6703 13.685 11.0245 12.1124 10.995C10.5398 10.9655 9.01856 11.5547 7.87608 12.6357C6.7336 13.7168 6.0613 15.2032 6.00389 16.775L5.99989 17V18.978C4.71534 18.8623 3.5123 18.2989 2.60103 17.3862C1.68976 16.4735 1.12822 15.2696 1.01457 13.9848C0.900915 12.7001 1.24237 11.4163 1.97926 10.3578C2.71615 9.29926 3.8016 8.53339 5.04589 8.194C5.2436 6.48838 6.0613 4.91491 7.34347 3.77287C8.62565 2.63082 10.2829 1.99986 11.9999 2Z" fill="#333333" />
                            </svg>
                        </div>
                    </div>
                </section>
            }

            {
                publishingModal &&
                <section className={styles._container}>
                    <div className={styles._modal_small}>
                        <svg className={styles._close_icon} onClick={() => setPublishingModal(!publishingModal)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 10.586L16.95 5.63599L18.364 7.04999L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.04999 18.364L5.63599 16.95L10.586 12L5.63599 7.04999L7.04999 5.63599L12 10.586Z" />
                        </svg>
                        <h3 className={styles._modal_title}>Publication</h3>

                        {
                            saving && <div>
                                auto saving
                                <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_WLDTXp.json" background="transparent" speed="1" width="300px" loop autoplay></lottie-player>
                            </div>
                        }

                    </div>
                </section>
            }
        </div >
    )
}

