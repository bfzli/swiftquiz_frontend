import * as styles from "./Quiz.module.scss";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createQuiz } from "../../../../reduxComponents/actions/Questions";
import { useTranslation } from "react-i18next";

export default function Quiz() {
  const dispatch = useDispatch();
  const [sidebarView, setSidebarView] = useState("question_operations");
  const [mode, setMode] = useState("add");
  const [trueQ, setTrueQ] = useState("none");
  const [questionList, setQuestionList] = useState([]);
  const [edited, setEdited] = useState({});
  var [errors, setErrors] = useState({});
  var [message, setMessage] = useState({});
  const [notification, setNotification] = useState(false);
  const { t } = useTranslation();
  const [quizImage, setQuizImage] = useState();
  const [stopTyping, setStopTyping] = useState(false);
  const test = t("quiz.quizbuilder");

  function isEmpty(obj) {
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }

    return JSON.stringify(obj) === JSON.stringify({});
  }

  function checkValidation() {
    if (quiz.title === "")
      errors.title = "The Quiz must have a title to be published.";
    if (quiz.description === "")
      errors.description = "Description is required for each quiz.";
    if (quiz.purchaseCoins === "")
      errors.purchaseCoins =
        "Purchase coins are required so you can share the Quiz.";

    if (isEmpty(errors) === true || isEmpty(errors) === null) {
      dispatch(createQuiz(quiz, quizImage));
      message.title = "The Quiz was published!";
      message.description =
        "The quiz was succesfully published, you can now play it or share with friends, we are redirecting you to your quizzes.";
      setSidebarView("quiz-publish");
      setNotification(true);

      setTimeout(() => {
        setNotification(false);
        setErrors({});
      }, 3000);
    } else {
      message.title = "Ops! 🥺";
      message.description =
        "We couldn't publish your quizzes because there are some fields that aren't filled yet.";
      setNotification(true);
      setTimeout(function () {
        setNotification(false);
      }, 5000);
    }
  }

  const [quiz, setQuiz] = useState({
    title: "",
    description: "",
    difficulty: 1,
    privacy: "private",
    category: "61a49f18da82d9000993e281",
    purchaseCoins: "",
    questions: [],
    thumbnail: "",
  });

  const [fields, updateFields] = useState({
    quiz_id: Math.floor(100000 + Math.random() * 900000),
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    isCorrect: "",
  });

  function handleCorrectAnwser(which) {
    if (which === "answer1") {
      setTrueQ("answer1");
      setTrue("isCorrect", "answer1");
    } else if (which === "answer2") {
      setTrueQ("answer2");
      setTrue("isCorrect", "answer2");
    } else if (which === "answer3") {
      setTrueQ("answer3");
      setTrue("isCorrect", "answer3");
    } else if (which === "answer4") {
      setTrueQ("answer4");
      setTrue("isCorrect", "answer4");
    }
  }

  const addQuestion = (question) => {
    if (question.question === "")
      errors.question = "All questions should be filled";
    if (question.answer1 === "")
      errors.answers = "All answers should be fillder";
    if (question.answer2 === "")
      errors.answers = "All answers should be fillder";
    if (question.answer3 === "")
      errors.answers = "All answers should be fillder";
    if (question.answer4 === "")
      errors.answers = "All answers should be fillder";
    if (question.isCorrect === "")
      errors.isCorrect = "All Correct answers must be chosen";

    if (isEmpty(errors) === true || isEmpty(errors) === null) {
      setQuestionList([...questionList, question]);
      setQuiz({ ...quiz, questions: [...questionList, question] });
      if (mode === "add") {
        updateFields({
          quiz_id: Math.floor(100000 + Math.random() * 900000),
          question: "",
          answer1: "",
          answer2: "",
          answer3: "",
          answer4: "",
          isCorrect: "",
        });

        setErrors({});
      }
      setTrueQ("none");
    } else {
      message.title = "Quiz was not added! 🥺";
      message.description =
        "The question is missing some of its required fields, please check and fill it completely.";

      setNotification(true);

      setTimeout(function () {
        setNotification(false);
        setErrors({});
      }, 3000);
    }
  };

  useEffect(() => {
    window.onkeydown = function (event) {
      var key = event.keyCode || event.charCode;
      if (key == 8) setStopTyping(false);
    };

    if (fields.question.length > 99) setStopTyping(true);
  }, [fields]);

  const editQuestion = (question) => {
    setTrueQ(question.isCorrect);
    console.log("this:", question.isCorrect);
    setMode("edit");
    setEdited(question);
  };

  const deleteQuestion = (question) => {
    const newQuestions = questionList.filter(
      (q) => q.quiz_id !== question.quiz_id
    );
    setQuestionList(newQuestions);
    setQuiz({ ...quiz, questions: newQuestions });
  };

  const editQuestionSubmit = (question) => {
    setMode("add");

    const newData = questionList.map((item) => {
      if (question.quiz_id === item.quiz_id) {
        return question;
      }
      return item;
    });
    setTrueQ("none");
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
  };

  const setParent = (type, e) => {
    const newData = { ...quiz };
    newData[type] = e.target.value;
    setQuiz(newData);
  };

  const setCategory = (type, e) => {
    const newData = { ...quiz };
    newData[type] = e.target.value;
    setQuiz(newData);
  };

  const questionAction = () => {
    if (mode === "edit") {
      editQuestionSubmit(fields);
      updateFields({
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        isCorrect: "",
      });
    } else {
      addQuestion(fields);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div className={styles.container}>
        <div className={styles.slides}>
          {questionList.length <= 0 ? null : (
            <>
              {questionList.map((item, i) => {
                return (
                  <div
                    key={i}
                    className={
                      item.quiz_id !== item.quiz_id
                        ? styles.single_slide_active
                        : styles.single_slide
                    }
                  >
                    {item.question}
                    <div className={styles.delete}>
                      <svg
                        onClick={() => deleteQuestion(item)}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.72076 3.75C9.61315 3.75 9.51762 3.81886 9.48359 3.92094L9.04057 5.25L14.9594 5.25L14.5164 3.92094C14.4824 3.81886 14.3868 3.75 14.2792 3.75L9.72076 3.75ZM16.5406 5.25L15.9394 3.4466C15.7012 2.732 15.0325 2.25 14.2792 2.25L9.72076 2.25C8.96751 2.25 8.29876 2.732 8.06056 3.4466L7.45943 5.25H5H3C2.58579 5.25 2.25 5.58579 2.25 6C2.25 6.41421 2.58579 6.75 3 6.75H4.29834L5.06497 18.2494C5.19629 20.2193 6.83242 21.75 8.80666 21.75H15.1933C17.1676 21.75 18.8037 20.2193 18.935 18.2494L19.7017 6.75H21C21.4142 6.75 21.75 6.41421 21.75 6C21.75 5.58579 21.4142 5.25 21 5.25H19H16.5406ZM18.1983 6.75H16L8 6.75L5.80166 6.75L6.56164 18.1497C6.64044 19.3316 7.62212 20.25 8.80666 20.25H15.1933C16.3779 20.25 17.3596 19.3316 17.4384 18.1497L18.1983 6.75ZM10 9.25C10.4142 9.25 10.75 9.58579 10.75 10L10.75 17C10.75 17.4142 10.4142 17.75 10 17.75C9.58579 17.75 9.25 17.4142 9.25 17L9.25 10C9.25 9.58579 9.58579 9.25 10 9.25ZM14.75 10C14.75 9.58579 14.4142 9.25 14 9.25C13.5858 9.25 13.25 9.58579 13.25 10L13.25 14C13.25 14.4142 13.5858 14.75 14 14.75C14.4142 14.75 14.75 14.4142 14.75 14L14.75 10Z"
                          fill="var(--icon-border)"
                        />
                      </svg>
                      <svg
                        onClick={() => editQuestion(item)}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.8408 3.90339C19.364 3.47003 18.636 3.47003 18.1592 3.90339C18.1405 3.9204 18.1161 3.9445 18.0303 4.03027L17.7233 4.33728C17.6991 5.41346 18.5865 6.30088 19.6627 6.27662L19.9697 5.96961C20.0554 5.88384 20.0795 5.85943 20.0965 5.84073C20.5299 5.36397 20.5299 4.63592 20.0965 4.15916C20.0795 4.14045 20.0554 4.11604 19.9697 4.03027C19.8839 3.94451 19.8595 3.9204 19.8408 3.90339ZM18.3917 7.54755C17.5064 7.2019 16.798 6.49357 16.4524 5.60821L13.7838 8.27679C13.3006 8.76001 13.1189 8.94489 12.9729 9.14793C12.8361 9.33827 12.7203 9.54284 12.6275 9.7581C12.5285 9.98771 12.4634 10.2386 12.2977 10.9016L12.0308 11.9692L13.0983 11.7023C13.7613 11.5365 14.0122 11.4715 14.2418 11.3725C14.4571 11.2797 14.6617 11.1638 14.852 11.027C15.055 10.881 15.2399 10.6994 15.7232 10.2161L18.3917 7.54755ZM17.1503 2.79342C18.1991 1.84002 19.8009 1.84002 20.8497 2.79342C20.8985 2.83776 20.9503 2.88957 21.0175 2.95682L21.0177 2.95698L21.0177 2.95701L21.0303 2.96961L21.0429 2.98218L21.0429 2.98221C21.1103 3.04954 21.1621 3.1014 21.2065 3.15021C22.1599 4.19908 22.1599 5.8008 21.2065 6.84967C21.1621 6.89848 21.1103 6.95033 21.0429 7.01765L21.0429 7.01769L21.0303 7.03027L16.7838 11.2768L16.7397 11.3209L16.7397 11.3209C16.3152 11.7455 16.0415 12.0193 15.7276 12.245C15.4494 12.4449 15.1504 12.6142 14.8358 12.7499C14.4807 12.903 14.1051 12.9968 13.5227 13.1424L13.5226 13.1424L13.5226 13.1424L13.4621 13.1575L11.1819 13.7275C10.9263 13.7914 10.656 13.7166 10.4697 13.5303C10.2834 13.344 10.2085 13.0736 10.2724 12.818L10.8425 10.5378L10.8576 10.4773C11.0031 9.89484 11.097 9.51922 11.2501 9.16417C11.3857 8.84957 11.555 8.55057 11.755 8.27239C11.9807 7.95844 12.2545 7.68471 12.679 7.26024L12.679 7.26023L12.6791 7.26022L12.7232 7.21613L16.9697 2.96961L16.9822 2.95703L16.9823 2.95698L16.9823 2.95696C17.0496 2.88964 17.1015 2.83779 17.1503 2.79342ZM9.367 2.24994L9.4 2.24994H12C12.4142 2.24994 12.75 2.58573 12.75 2.99994C12.75 3.41416 12.4142 3.74994 12 3.74994H9.4C8.26752 3.74994 7.46327 3.75053 6.83388 3.80195C6.21326 3.85266 5.829 3.94903 5.52453 4.10417C4.91301 4.41576 4.41582 4.91295 4.10423 5.52447C3.94909 5.82895 3.85271 6.2132 3.80201 6.83382C3.75058 7.46321 3.75 8.26746 3.75 9.39994L3.75 14.5999C3.75 15.7324 3.75058 16.5367 3.80201 17.1661C3.85271 17.7867 3.94909 18.1709 4.10423 18.4754C4.41582 19.0869 4.91301 19.5841 5.52453 19.8957C5.829 20.0508 6.21326 20.1472 6.83388 20.1979C7.46327 20.2494 8.26752 20.2499 9.4 20.2499H14.6C15.7325 20.2499 16.5367 20.2494 17.1661 20.1979C17.7867 20.1472 18.171 20.0508 18.4755 19.8957C19.087 19.5841 19.5842 19.0869 19.8958 18.4754C20.0509 18.1709 20.1473 17.7867 20.198 17.1661C20.2494 16.5367 20.25 15.7324 20.25 14.5999V11.9999C20.25 11.5857 20.5858 11.2499 21 11.2499C21.4142 11.2499 21.75 11.5857 21.75 11.9999V14.5999V14.633C21.75 15.7251 21.75 16.5906 21.693 17.2882C21.6347 18.0016 21.5131 18.6052 21.2323 19.1564C20.7769 20.0502 20.0502 20.7768 19.1565 21.2322C18.6053 21.5131 18.0017 21.6347 17.2883 21.693C16.5907 21.75 15.7252 21.7499 14.633 21.7499H14.6H9.4H9.36698C8.27485 21.7499 7.40935 21.75 6.71174 21.693C5.99835 21.6347 5.39472 21.5131 4.84355 21.2322C3.94978 20.7768 3.22312 20.0502 2.76772 19.1564C2.48688 18.6052 2.36528 18.0016 2.30699 17.2882C2.24999 16.5906 2.25 15.7251 2.25 14.633V14.6329V14.5999L2.25 9.39994V9.36694V9.36688C2.25 8.27476 2.24999 7.40928 2.30699 6.71168C2.36528 5.99829 2.48688 5.39466 2.76772 4.84349C3.22312 3.94972 3.94978 3.22306 4.84355 2.76766C5.39472 2.48682 5.99835 2.36522 6.71174 2.30693C7.40936 2.24993 8.27486 2.24994 9.367 2.24994Z"
                          fill="var(--icon-border)"
                        />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>

        {notification === true ? (
          <div className={styles.notification}>
            <div className={styles.nothead}>
              <svg
                className={styles.logo}
                viewBox="0 0 156 155"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M108.841 80.5999C111.906 82.1312 114.313 84.2504 123.166 93.2117C153.634 124.05 153.469 123.853 154.775 131.053C155.283 133.855 155.235 135.199 154.516 138.297C153.39 143.156 151.677 146.046 147.854 149.54C143.087 153.897 140.404 154.957 134.045 154.995C124.931 155.05 124.874 155.01 102.147 132.256C91.5449 121.642 82.3098 112.074 81.625 110.995C79.5546 107.729 78.5135 103.801 78.5141 99.2556C78.5141 95.7341 78.7895 94.4328 80.125 91.6428C82.4147 86.8587 86.4293 82.8503 91.3553 80.4293C95.3048 78.488 95.307 78.488 100.39 78.6282C104.505 78.7415 105.661 79.0113 108.841 80.5999Z" />
                <path d="M86.9274 0.744438C92.8692 1.73335 97.6741 2.88717 100.95 4.1111C102.339 4.62996 103.979 5.20435 104.596 5.38777C107.117 6.1366 116.553 11.3807 120.262 14.0939C122.443 15.6903 126.336 19.0255 128.91 21.5054C144.972 36.9768 153.126 55.3168 153.11 75.9369C153.104 82.613 151.79 93.0804 150.589 96.0057C149.322 99.093 149.264 99.0447 123.899 73.7953C110.506 60.4627 98.6361 48.8785 97.5221 48.0517C94.2379 45.6161 87.4827 42.5366 83.5618 41.688C70.0099 38.7543 55.8505 44.4623 47.0165 56.4201C45.8296 58.0271 44.8581 59.6807 44.8581 60.0947C44.8581 60.5092 44.6393 61.0875 44.3717 61.3809C41.9154 64.0722 40.6276 78.6406 42.2672 85.1921C43.7104 90.9584 46.7158 96.2811 51.7597 102.002C54.2883 104.87 65.6173 116.58 76.9351 128.023C91.951 143.205 97.3611 149.012 96.9494 149.508C95.252 151.553 79.2646 153.333 69.9476 152.514C50.7006 150.823 33.8466 142.527 20.1404 127.998C10.313 117.58 3.24252 103.268 0.7767 88.8022C-0.591394 80.776 -0.0910456 66.0719 1.79759 58.8203C5.57317 44.3221 12.2128 32.6924 22.5422 22.4836C34.1023 11.0581 46.7848 4.27209 61.9662 1.39062C64.4343 0.921686 66.9585 0.431438 67.5755 0.300182C70.2399 -0.26579 82.555 0.0169195 86.9274 0.744438Z" />
              </svg>

              <p className={styles.notification_title}>{message.title}</p>
            </div>
            <div className={styles.notspace} />
            <div className={styles.notbody}>{message.description}</div>
          </div>
        ) : null}

        <div className={styles.right_wrapper}>
          {mode === "edit" || mode === "add" ? (
            <div className={styles.current_slide}>
              <div className={styles.current_question}>
                <p className={styles.lengthium}>
                  {100 - fields.question.length}
                </p>
                <textarea
                  className={styles.current_question_input}
                  placeholder={t("quiz.question")}
                  onChange={(e) => {
                    stopTyping === true
                      ? console.log("")
                      : setField("question", e);
                  }}
                  value={fields.question}
                />
              </div>

              <div className={styles.options_wrapper}>
                <div
                  className={
                    trueQ === "answer1" ? styles.option_active : styles.option
                  }
                >
                  <input
                    className={styles.option_input}
                    placeholder={t("quiz.answer")}
                    type="text"
                    onChange={(e) => setField("answer1", e)}
                    value={fields.answer1}
                  />
                  <div
                    onClick={() => handleCorrectAnwser("answer1")}
                    className={styles.option_check}
                  >
                    <svg
                      className={styles.option_check_icon}
                      width="3em"
                      height="3em"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity={trueQ === "answer1" ? "1" : ".1234"}
                        d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
                      />
                    </svg>
                  </div>
                </div>

                <div
                  className={
                    trueQ === "answer2" ? styles.option_active : styles.option
                  }
                >
                  <input
                    className={styles.option_input}
                    placeholder={t("quiz.answer")}
                    type="text"
                    onChange={(e) => setField("answer2", e)}
                    value={fields.answer2}
                  />
                  <div
                    onClick={() => handleCorrectAnwser("answer2")}
                    className={styles.option_check}
                  >
                    <svg
                      className={styles.option_check_icon}
                      width="3em"
                      height="3em"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity={trueQ === "answer2" ? "1" : ".1234"}
                        d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
                      />
                    </svg>
                  </div>
                </div>

                <div
                  className={
                    trueQ === "answer3" ? styles.option_active : styles.option
                  }
                >
                  <input
                    className={styles.option_input}
                    placeholder={t("quiz.answer")}
                    type="text"
                    onChange={(e) => setField("answer3", e)}
                    value={fields.answer3}
                  />
                  <div
                    onClick={() => handleCorrectAnwser("answer3")}
                    className={styles.option_check}
                  >
                    <svg
                      className={styles.option_check_icon}
                      width="3em"
                      height="3em"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity={trueQ === "answer3" ? "1" : ".1234"}
                        d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
                      />
                    </svg>
                  </div>
                </div>

                <div
                  className={
                    trueQ === "answer4" ? styles.option_active : styles.option
                  }
                >
                  <input
                    className={styles.option_input}
                    placeholder={t("quiz.answer")}
                    type="text"
                    onChange={(e) => setField("answer4", e)}
                    value={fields.answer4}
                  />
                  <div
                    onClick={() => handleCorrectAnwser("answer4")}
                    className={styles.option_check}
                  >
                    <svg
                      className={styles.option_check_icon}
                      width="3em"
                      height="3em"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity={trueQ === "answer4" ? "1" : ".1234"}
                        d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            "something went wrong"
          )}
        </div>
      </div>
      <div className={styles.header}>
        <h3 className={styles._modal_title}>
          {
            {
              question_operations: `${test}`,
              quiz_edit: (
                <div
                  className={styles.goback}
                  onClick={() => setSidebarView("question_operations")}
                >
                  <svg
                    className={styles.gobackbtn}
                    style={{ marginLeft: ".5em" }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.828 11H20V13H7.828L13.192 18.364L11.778 19.778L4 12L11.778 4.22198L13.192 5.63598L7.828 11Z"
                      fill="var(--text-color)"
                    />
                  </svg>

                  <p>{t("quiz.quizedit")}</p>
                </div>
              ),
              "quiz-publish": (
                <div
                  className={styles.goback}
                  onClick={() => setSidebarView("question_operations")}
                >
                  <svg
                    className={styles.gobackbtn}
                    style={{ marginLeft: ".5em" }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.828 11H20V13H7.828L13.192 18.364L11.778 19.778L4 12L11.778 4.22198L13.192 5.63598L7.828 11Z"
                      fill="var(--text-color)"
                    />
                  </svg>

                  <p style={{ color: "var(--text-color)" }}>
                    {t("quiz.quizpublish")}
                  </p>
                </div>
              ),
            }[sidebarView]
          }
        </h3>
        {sidebarView === "quiz_edit" ? (
          <form class={styles.header_container}>
            <div className={styles._form_wrapper}>
              <label className={styles._form_label_name} htmFor="l-quiz-name">
                {t("quiz.title")}
              </label>
              <input
                className={styles._form_input}
                type="text"
                id="l-quiz-name"
                placeholder={t("quiz.title")}
                onChange={(e) => setParent("title", e)}
                value={quiz.title}
              />
            </div>

            <div className={styles._form_wrapper}>
              <label className={styles._form_label_name} htmFor="l-quiz-name">
                {t("quiz.description")}
              </label>
              <textarea
                className={styles._form_input}
                type="text"
                id="l-quiz-name"
                placeholder={t("quiz.description")}
                onChange={(e) => setParent("description", e)}
                value={quiz.description}
              />
            </div>

            <div className={styles._form_wrapper}>
              <label className={styles._form_label_name} htmFor="price">
                {t("quiz.priceInCoins")}
              </label>
              <input
                className={styles._form_input}
                type="text"
                id="price"
                placeholder={t("quiz.price")}
                onChange={(e) => setParent("purchaseCoins", e)}
                value={quiz.purchaseCoins}
              />
            </div>

            <div className={styles._form_wrapper}>
              <label className={styles._form_label_name} htmFor="visibility">
                {t("quiz.visibility")}
              </label>
              <select
                className={styles._form_input}
                value={quiz.privacy}
                id="visibility"
                onChange={(e) => setCategory("privacy", e)}
              >
                <option value="private">
                  {t("quiz.visibilityType.private")}
                </option>
                <option value="public">
                  {t("quiz.visibilityType.public")}
                </option>
              </select>
            </div>

            <div className={styles._form_wrapper}>
              <label className={styles._form_label_name} htmFor="Difficulty">
                {t("quiz.difficulty")}
              </label>
              <select
                className={styles._form_input}
                value={quiz.difficulty}
                id="Difficulty"
                onChange={(e) => setCategory("difficulty", e)}
              >
                <option value="1">{t("quiz.difficultyType.easy")}</option>
                <option value="2">{t("quiz.difficultyType.medium")}</option>
                <option value="3">{t("quiz.difficultyType.hard")}</option>
              </select>
            </div>

            <div className={styles._form_wrapper}>
              <label className={styles._form_label_name} htmFor="l-quiz-name">
                {t("quiz.category")}
              </label>

              <select
                className={styles._form_input}
                value={quiz.category}
                id="l-quiz-name"
                placeholder={t("quiz.category")}
                onChange={(e) => setCategory("category", e)}
              >
                <option value="61a49f18da82d9000993e281">
                  {t("quiz.religion")}
                </option>
                <option value="61961bd788d1b5058807904c">
                  {t("quiz.programming")}
                </option>
                <option value="61961c6488d1b50588079058">
                  {t("quiz.mathematics")}
                </option>
                <option value="61961c1788d1b50588079052">
                  {t("quiz.physics")}
                </option>
                <option value="617bf1df3b7012bee6d4056d">
                  {t("quiz.sport")}
                </option>
                <option value="61961c1b88d1b50588079055">
                  {t("quiz.art")}
                </option>
                <option value="61961be088d1b5058807904f">
                  {t("quiz.others")}
                </option>
              </select>
            </div>
            <div className={styles._form_wrapper}>
              <label className={styles._form_label_name} htmFor="l-quiz-name">
                {t("quiz.thumbnail")}
              </label>
              <input
                className={styles._form_input}
                accept=".gif,.jpg,.jpeg,.png,.svg"
                type="file"
                id="l-quiz-name"
                name="filename"
                placeholder="Quiz Name"
                onChange={(e) => {
                  e.preventDefault();
                  const formData = new FormData();
                  let currentlyUploaded = e.target.files[0];
                  formData.append("filename", currentlyUploaded);
                  setQuizImage(formData);
                }}
              />
            </div>
          </form>
        ) : null}
        {sidebarView === "quiz-publish" ? (
          <div class={styles.header_container}>
            <div
              className={styles.publishing}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <lottie-player
                src="https://assets8.lottiefiles.com/packages/lf20_oqlgwlim.json"
                background="transparent"
                speed="1"
                style={{ width: "150px", height: "150px" }}
                loop
                autoplay
              ></lottie-player>
              <h3>Quiz was published succesfully.</h3>
              <p>Redirecting you to Quizzes in few seconds...</p>
              <br />
            </div>
          </div>
        ) : null}
        {sidebarView === "question_operations" ? (
          <div class={styles.header_container}>
            <div className={styles.publish_options}>
              <button
                onClick={() => checkValidation()}
                className={styles.publish_cta}
              >
                <p>{t("quiz.publish")}</p>

                <svg
                  style={{ marginLeft: ".75em" }}
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9014 1.25002L15.9869 1.25003L18.5986 1.25003L18.6276 1.25003C19.0229 1.25002 19.364 1.25001 19.6449 1.27296C19.9414 1.29718 20.2363 1.35067 20.5201 1.49527C20.9435 1.71098 21.2877 2.05519 21.5034 2.47855C21.648 2.76234 21.7015 3.05725 21.7257 3.35376C21.7487 3.63466 21.7487 3.9757 21.7486 4.37101V4.37111V4.40003L21.7487 7.01181L21.7487 7.09727C21.7489 7.74883 21.749 8.19983 21.645 8.63281C21.5532 9.01545 21.4017 9.38124 21.1961 9.71676C20.9634 10.0964 20.6444 10.4152 20.1835 10.8758L20.1231 10.9362L16.9783 14.0811C17.286 14.5133 17.5412 14.8793 17.7376 15.2033C17.9865 15.6138 18.1703 16.0024 18.2576 16.4358C18.3973 17.1295 18.3379 17.8486 18.0863 18.51C17.929 18.9231 17.684 19.2763 17.3711 19.6404C17.0685 19.9925 16.6685 20.3925 16.1751 20.8859L16.1545 20.9065L15.5307 21.5303C15.3748 21.6862 15.1582 21.7656 14.9385 21.7474C14.7188 21.7293 14.5182 21.6153 14.39 21.4359L12.3916 18.6381C12.3601 18.6659 12.3292 18.6927 12.2987 18.7186C12.0081 18.9653 11.7084 19.17 11.3484 19.287C10.7961 19.4665 10.2012 19.4665 9.64886 19.287C9.28886 19.17 8.98921 18.9653 8.69865 18.7186C8.42006 18.4821 8.10482 18.1669 7.72715 17.7892L7.70558 17.7676L5.23106 15.2931L5.20953 15.2716C4.83183 14.8939 4.51656 14.5786 4.28005 14.3C4.03338 14.0095 3.82864 13.7098 3.71167 13.3498C3.53221 12.7975 3.53221 12.2026 3.71167 11.6502C3.82864 11.2902 4.03338 10.9906 4.28005 10.7C4.30584 10.6697 4.33256 10.6389 4.36019 10.6076L1.56406 8.61026C1.38467 8.48211 1.27074 8.28153 1.25256 8.06181C1.23438 7.8421 1.31379 7.62552 1.46968 7.46963L2.09378 6.84555L2.11433 6.825C2.60774 6.33159 3.00768 5.93166 3.35973 5.62912C3.72381 5.31625 4.07696 5.07122 4.49011 4.914C5.15144 4.66234 5.87048 4.60291 6.56415 4.7426C6.9975 4.82987 7.38608 5.01359 7.79658 5.26245C8.12016 5.45861 8.48576 5.7134 8.91737 6.02065L12.0624 2.87559L12.1229 2.81515C12.5834 2.35429 12.9023 2.03529 13.2819 1.80263C13.6174 1.59702 13.9832 1.44551 14.3659 1.35365C14.7988 1.2497 15.2499 1.24983 15.9014 1.25002ZM15.4683 13.4698L19.0624 9.87559C19.6065 9.33149 19.7887 9.14247 19.9171 8.93301C20.0405 8.7317 20.1314 8.51222 20.1865 8.28264C20.2438 8.04377 20.2487 7.78128 20.2487 7.01181L20.2486 4.40003C20.2486 3.96762 20.2481 3.68841 20.2307 3.47591C20.2141 3.27216 20.1858 3.19662 20.1669 3.15954C20.095 3.01842 19.9803 2.90368 19.8391 2.83178C19.8021 2.81288 19.7265 2.78462 19.5228 2.76798C19.3103 2.75061 19.0311 2.75003 18.5986 2.75003L15.9869 2.75003C15.2174 2.75003 14.9549 2.75485 14.716 2.8122C14.4865 2.86732 14.267 2.95823 14.0657 3.08159C13.8562 3.20995 13.6672 3.39215 13.1231 3.93625L8.56505 8.4943L6.03048 11.0303C6.02391 11.0368 6.01725 11.0432 6.0105 11.0495C5.75537 11.3065 5.56731 11.5015 5.42356 11.6708C5.23712 11.8904 5.16967 12.0171 5.13826 12.1138C5.05669 12.3648 5.05669 12.6353 5.13826 12.8863C5.16967 12.983 5.23712 13.1097 5.42356 13.3293C5.61569 13.5556 5.88696 13.8277 6.29172 14.2324L6.99902 14.9397L8.46902 13.4698C8.76191 13.1769 9.23678 13.1769 9.52968 13.4698C9.82257 13.7626 9.82257 14.2375 9.52968 14.5304L8.05968 16.0004L8.76624 16.707C9.17101 17.1117 9.4431 17.383 9.66941 17.5751C9.88903 17.7616 10.0157 17.829 10.1124 17.8604C10.3634 17.942 10.6339 17.942 10.8849 17.8604C10.9816 17.829 11.1083 17.7616 11.3279 17.5751C11.5542 17.383 11.8263 17.1117 12.2311 16.707L15.4683 13.4698ZM5.41813 9.51989L7.50369 7.43433L7.84132 7.09652C7.51231 6.86426 7.24947 6.68489 7.01898 6.54516C6.68431 6.34227 6.46423 6.25259 6.26803 6.21308C5.85183 6.12927 5.4204 6.16492 5.02361 6.31592C4.83656 6.3871 4.63418 6.5117 4.33736 6.76677C4.03377 7.02766 3.67415 7.38651 3.15636 7.90428L5.41813 9.51989ZM15.096 19.8436L13.4798 17.5809L15.9025 15.1572C16.1353 15.4869 16.315 15.7501 16.455 15.981C16.6579 16.3157 16.7476 16.5358 16.7871 16.732C16.871 17.1482 16.8353 17.5796 16.6843 17.9765C16.6131 18.1635 16.4885 18.3659 16.2334 18.6628C15.9726 18.9663 15.6137 19.3259 15.096 19.8436ZM12.752 8.99957C12.752 8.30921 13.3116 7.74957 14.002 7.74957C14.6923 7.74957 15.252 8.30921 15.252 8.99957C15.252 9.68992 14.6923 10.2496 14.002 10.2496C13.3116 10.2496 12.752 9.68992 12.752 8.99957ZM14.002 6.24957C12.4832 6.24957 11.252 7.48078 11.252 8.99957C11.252 10.5184 12.4832 11.7496 14.002 11.7496C15.5207 11.7496 16.752 10.5184 16.752 8.99957C16.752 7.48078 15.5207 6.24957 14.002 6.24957Z"
                    fill="var(--icon-border)"
                  />
                </svg>
              </button>

              <button
                onClick={() => setSidebarView("quiz_edit")}
                className={styles.publish_cta}
              >
                <p>{t("quiz.settings")}</p>

                <svg
                  style={{ marginLeft: ".75em" }}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 3.5L13.5669 7.43314C12.7883 8.21175 12.399 8.60105 12.1311 9.0742C11.8632 9.54736 11.7296 10.0815 11.4626 11.1497L11 13L12.8503 12.5374L12.8503 12.5374C13.9185 12.2704 14.4526 12.1368 14.9258 11.8689C15.399 11.601 15.7883 11.2117 16.5669 10.4331L16.5669 10.4331L20.5 6.5C20.5797 6.42035 20.6195 6.38052 20.6515 6.34526C21.3449 5.58244 21.3449 4.41756 20.6515 3.65474C20.6195 3.61949 20.5797 3.57967 20.5 3.50004L20.5 3.5C20.4203 3.42035 20.3805 3.38052 20.3453 3.34847C19.5824 2.65508 18.4176 2.65508 17.6547 3.34847C17.6195 3.38052 17.5797 3.42035 17.5 3.5Z"
                    fill="var(--text-color)"
                    fill-opacity="0.15"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.8408 3.90339C19.364 3.47003 18.636 3.47003 18.1592 3.90339C18.1405 3.9204 18.1161 3.9445 18.0303 4.03027L17.7233 4.33728C17.6991 5.41346 18.5865 6.30088 19.6627 6.27662L19.9697 5.96961C20.0554 5.88384 20.0795 5.85943 20.0965 5.84073C20.5299 5.36397 20.5299 4.63592 20.0965 4.15916C20.0795 4.14045 20.0554 4.11604 19.9697 4.03027C19.8839 3.94451 19.8595 3.9204 19.8408 3.90339ZM18.3917 7.54755C17.5064 7.2019 16.798 6.49357 16.4524 5.60821L14.0972 7.96342C13.2904 8.77017 12.9898 9.07958 12.7837 9.44367C12.5776 9.80776 12.4669 10.2247 12.1902 11.3316L12.0308 11.9692L12.6684 11.8098C13.7753 11.533 14.1922 11.4224 14.5563 11.2162C14.9204 11.0101 15.2298 10.7095 16.0365 9.90275L18.3917 7.54755ZM17.1503 2.79342C18.1991 1.84002 19.8009 1.84002 20.8497 2.79342C20.8985 2.83779 20.9504 2.88964 21.0177 2.95697L21.0177 2.95698L21.0177 2.95702L21.0303 2.96961L21.0429 2.98221L21.043 2.98228C21.1103 3.04958 21.1622 3.10141 21.2065 3.15021C22.1599 4.19908 22.1599 5.8008 21.2065 6.84967C21.1621 6.89849 21.1103 6.95034 21.0429 7.01768L21.0303 7.03027L17.0972 10.9634L17.0237 11.037C16.3156 11.7453 15.8583 12.2028 15.2953 12.5215C14.7324 12.8403 14.1048 12.997 13.1331 13.2398L13.1331 13.2398L13.1331 13.2398L13.0322 13.265L11.1819 13.7275C10.9263 13.7914 10.656 13.7166 10.4697 13.5303C10.2834 13.344 10.2085 13.0736 10.2724 12.818L10.735 10.9678L10.7602 10.8669C11.0029 9.89515 11.1597 9.2676 11.4784 8.70462C11.7972 8.14165 12.2546 7.68435 12.963 6.97628L13.0365 6.90276L16.9697 2.96961L16.9823 2.95703C17.0496 2.88967 17.1014 2.8378 17.1503 2.79342ZM10.9436 2.24994L11 2.24994H12C12.4142 2.24994 12.75 2.58573 12.75 2.99994C12.75 3.41416 12.4142 3.74994 12 3.74994H11C9.09318 3.74994 7.73851 3.75154 6.71085 3.8897C5.70476 4.02497 5.12511 4.27864 4.7019 4.70185C4.27869 5.12506 4.02503 5.7047 3.88976 6.71079C3.75159 7.73845 3.75 9.09312 3.75 10.9999V12.9999C3.75 14.9068 3.75159 16.2614 3.88976 17.2891C4.02503 18.2952 4.2787 18.8748 4.7019 19.298C5.12511 19.7212 5.70476 19.9749 6.71085 20.1102C7.73851 20.2484 9.09318 20.2499 11 20.2499H13C14.9068 20.2499 16.2615 20.2484 17.2892 20.1102C18.2952 19.9749 18.8749 19.7212 19.2981 19.298C19.7213 18.8748 19.975 18.2952 20.1102 17.2891C20.2484 16.2614 20.25 14.9068 20.25 12.9999V11.9999C20.25 11.5857 20.5858 11.2499 21 11.2499C21.4142 11.2499 21.75 11.5857 21.75 11.9999V12.9999V13.0564V13.0564C21.75 14.8941 21.75 16.3498 21.5969 17.489C21.4392 18.6614 21.1071 19.6103 20.3588 20.3587C19.6104 21.1071 18.6614 21.4392 17.489 21.5968C16.3498 21.75 14.8942 21.75 13.0565 21.7499H13.0564H13H11H10.9436H10.9435C9.1058 21.75 7.65018 21.75 6.51098 21.5968C5.33856 21.4392 4.38961 21.1071 3.64124 20.3587C2.89288 19.6103 2.56076 18.6614 2.40314 17.489C2.24997 16.3498 2.24999 14.8941 2.25 13.0564V13.0564V12.9999V10.9999V10.9435V10.9435C2.24999 9.10575 2.24997 7.65013 2.40314 6.51092C2.56076 5.3385 2.89288 4.38955 3.64124 3.64119C4.38961 2.89282 5.33856 2.5607 6.51098 2.40308C7.65019 2.24991 9.10583 2.24993 10.9436 2.24994Z"
                    fill="var(--icon-border)"
                  />
                </svg>
              </button>
            </div>

            <div className={styles.box_wrapper}>
              <div className={styles.boxes}>
                <div className={styles.navicon}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.29101 20.824L2.00001 22L3.17601 16.709C2.40154 15.2604 1.99754 13.6426 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.3574 22.0025 8.73963 21.5985 7.29101 20.824ZM7.00001 12C7.00001 13.3261 7.5268 14.5979 8.46448 15.5355C9.40216 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12H15C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7957 15 12 15C11.2044 15 10.4413 14.6839 9.87869 14.1213C9.31608 13.5587 9.00001 12.7956 9.00001 12H7.00001Z"
                      fill="var(--icon-border)"
                    />
                  </svg>
                </div>
                <div className={styles.navicon_text}>
                  <h3 style={{ color: "var(--text-color)" }}>
                    {quiz.questions.length}
                  </h3>
                  <p style={{ color: "var(--text-color)" }}>
                    {t("quiz.questions")}
                  </p>
                </div>
              </div>

              {mode !== "edit" ? (
                <>
                  <div
                    onClick={() => questionAction()}
                    className={styles.boxes}
                  >
                    <div className={styles.navicon}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 14H11C9.3596 13.9994 7.75023 14.4471 6.34588 15.2949C4.94152 16.1427 3.7956 17.3582 3.032 18.81C3.01054 18.5405 2.99986 18.2703 3 18C3 12.477 7.477 8 13 8V2.5L23.5 11L13 19.5V14ZM11 12H15V15.308L20.321 11L15 6.692V10H13C11.8503 9.99871 10.7138 10.2458 9.66839 10.7244C8.62299 11.203 7.69332 11.9018 6.943 12.773C8.23432 12.2612 9.61096 11.9989 11 12Z"
                          fill="var(--icon-border)"
                        />
                      </svg>
                    </div>
                    <div className={styles.navicon_text}>
                      <h3 style={{ color: "var(--text-color)" }}>
                        {t("quiz.addButton")}
                      </h3>
                      <p style={{ color: "var(--text-color)" }}>
                        {t("quiz.currentQuestion")}
                      </p>
                    </div>
                  </div>
                </>
              ) : null}

              {mode === "edit" ? (
                <>
                  <div
                    onClick={() => questionAction()}
                    className={styles.navicon_wrapper}
                  >
                    <div className={styles.navicon}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
                          fill="var(--icon-border)"
                        />
                      </svg>
                    </div>
                    <div className={styles.navicon_text}>
                      {t("quiz.editQuestion")}
                    </div>
                  </div>
                </>
              ) : null}
              <div className={styles.questiont_list}>
                {questionList.map((item, index) => (
                  <div className={styles.question_side}>
                    <p className={styles.indexium}>{++index}</p>
                    <div className={styles.mapquizztitle}>{item.question}</div>
                    <div className={styles.gridium}>
                      <div
                        className={styles.mapquizz_answer}
                        style={{ color: "var(--text-color)" }}
                      >
                        {item.answer1}
                        <div className={styles.option_check}>
                          <svg
                            className={styles.option_check_icon}
                            width="1.25em"
                            height="1.25em"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity={
                                item.isCorrect === "answer1" ? "1" : ".1234"
                              }
                              d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div
                        className={styles.mapquizz_answer}
                        style={{ color: "var(--text-color)" }}
                      >
                        {item.answer2}
                        <div className={styles.option_check}>
                          <svg
                            className={styles.option_check_icon}
                            width="1.25em"
                            height="1.25em"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity={
                                item.isCorrect === "answer2" ? "1" : ".1234"
                              }
                              d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div
                        className={styles.mapquizz_answer}
                        style={{ color: "var(--text-color)" }}
                      >
                        {item.answer3}
                        <div className={styles.option_check}>
                          <svg
                            className={styles.option_check_icon}
                            width="1.25em"
                            height="1.25em"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity={
                                item.isCorrect === "answer3" ? "1" : ".1234"
                              }
                              d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div
                        className={styles.mapquizz_answer}
                        style={{ color: "var(--text-color)" }}
                      >
                        {item.answer4}
                        <div className={styles.option_check}>
                          <svg
                            className={styles.option_check_icon}
                            width="1.25em"
                            height="1.25em"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity={
                                item.isCorrect === "answer4" ? "1" : ".1234"
                              }
                              d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
