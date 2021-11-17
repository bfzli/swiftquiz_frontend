// import * as styles from './AddQuiz.module.scss'
// import Helmet from 'react-helmet'
// import { useState } from "react";

// export default function AddQuiz() {

//     const [questions, setQuestions] = useState([]);
//     const [currentEditQuestion, setCurrentEditQuestion] = useState({});

//     function add_question() {
//         const dumb = {
//             id: `${Math.floor(100000 + Math.random() * 900000)}`,
//             question: `${Math.random().toString(36).substr(2, 5)}`,
//             anwser1: `${Math.random().toString(36).substr(2, 5)}`,
//             anwser2: `${Math.random().toString(36).substr(2, 5)}`,
//             anwser3: `${Math.random().toString(36).substr(2, 5)}`,
//             anwser4: `${Math.random().toString(36).substr(2, 5)}`
//         };
//         setQuestions([...questions, dumb]);
//     }

//     const changeData = (question, type, e) => {
//         const questiontoEdit = questions.map((q) => {
//             if (q.id === question.id) {
//                 q[type] = e.target.value;
//             }
//             return q;
//         });
//         setQuestions(questiontoEdit);
//     };

//     const writeQuestion = (question) => {
//         setCurrentEditQuestion(question);
//     };


//     return (
//         <div className={styles.container}>
//             <Helmet>
//                 <title>Add Quiz - SwiftQuiz</title>
//             </Helmet>

//             <div className={styles.slides}>
//                 {
//                     questions.map((item) => (
//                         <div className={currentEditQuestion.id === item.id ? styles.single_slide_active : styles.single_slide}
//                             onClick={() => writeQuestion(item)}>
//                             {item.question}
//                         </div>
//                     ))
//                 }
//                 <div onClick={() => add_question()} className={styles.add_slide}>
//                     New Question
//                 </div>

//             </div>

//             <div className={styles.right_wrapper}>
//                 <div className={styles.header}>
//                     <div className={styles.navicon_wrapper}>
//                         <div className={styles.navicon}></div>
//                         <div className={styles.navicon_text}></div>
//                     </div>
//                     <div className={styles.navicon_wrapper}>
//                         <div className={styles.navicon}></div>
//                         <div className={styles.navicon_text}></div>
//                     </div>
//                     <div className={styles.navicon_wrapper}>
//                         <div className={styles.navicon}></div>
//                         <div className={styles.navicon_text}></div>
//                     </div>
//                 </div>
//                 <div className={styles.current_slide}>
//                     <div className={styles.current_question}>
//                         <textarea
//                             className={styles.current_question_input}
//                             placeholder="Question"
//                             onChange={(e) => changeData(currentEditQuestion, "question", e)}
//                             type="text"
//                             value={currentEditQuestion.question}
//                         />
//                     </div>

//                     <div className={styles.options_wrapper}>

//                         <div className={styles.option}>
//                             <input
//                                 className={styles.option_input}
//                                 placeholder="Anwser 1"
//                                 onChange={(e) => changeData(currentEditQuestion, "anwser1", e)}
//                                 type="text"
//                                 value={currentEditQuestion.anwser1}
//                             />
//                         </div>

//                         <div className={styles.option}>
//                             <input
//                                 className={styles.option_input}
//                                 placeholder="Anwser 2"
//                                 onChange={(e) => changeData(currentEditQuestion, "anwser2", e)}
//                                 type="text"
//                                 value={currentEditQuestion.anwser2}
//                             />
//                         </div>

//                         <div className={styles.option}>
//                             <input
//                                 className={styles.option_input}
//                                 placeholder="Anwser 3"
//                                 onChange={(e) => changeData(currentEditQuestion, "anwser3", e)}
//                                 type="text"
//                                 value={currentEditQuestion.anwser3}
//                             />
//                         </div>

//                         <div className={styles.option}>
//                             <input
//                                 className={styles.option_input}
//                                 placeholder="Anwser 4"
//                                 onChange={(e) => changeData(currentEditQuestion, "anwser4", e)}
//                                 type="text"
//                                 value={currentEditQuestion.anwser4}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }



import { useState } from "react";
import { Question } from "./components/Question";
import { QuestionList } from "./components/QuestionList";

export default function AddQuiz() {
    const [mode, setMode] = useState("add");
    const [questionList, setQuestionList] = useState([]);
    const [edited, setEdited] = useState({});
    
    const addQuestion = (question) => {
        setQuestionList([...questionList, question]);
    };

    const editQuestion = (question) => {
        setMode("edit");
        setEdited(question);
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

    return (
        <>
            <Question
                addQuestion={addQuestion}
                edited={edited}
                editQuestionSubmit={editQuestionSubmit}
                mode={mode}
            />

            <QuestionList
                questions={questionList}
                editQuestion={editQuestion}
            />
        </>
    );
}
