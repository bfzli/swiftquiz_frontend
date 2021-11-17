import { useEffect, useState } from "react";

export const Question = ({ addQuestion, edited, editQuestionSubmit, mode }) => {
  
    const [fields, updateFields] = useState({
    id: Math.floor(100000 + Math.random() * 900000),
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: ""
  });

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

  const questionAction = () => {
    if (mode === "edit") {
      editQuestionSubmit(fields);
      updateFields({
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: ""
      });
    } else {
      addQuestion(fields);
    }
  };
  return (
    <>
      <input
        type="text"
        onChange={(e) => setField("question", e)}
        value={fields.question}
        placeholder="Question"
      />

      <input
        type="text"
        onChange={(e) => setField("answer1", e)}
        value={fields.answer1}
        placeholder="Answer1"
      />

      <input
        type="text"
        onChange={(e) => setField("answer2", e)}
        value={fields.answer2}
        placeholder="Answer2"
      />

      <input
        type="text"
        onChange={(e) => setField("answer3", e)}
        value={fields.answer3}
        placeholder="Answer3"
      />

      <input
        type="text"
        onChange={(e) => setField("answer4", e)}
        value={fields.answer4}
        placeholder="Answer4"
      />
      <br />
      <br />
      <center>
        <button onClick={questionAction}>
          {mode === "edit" ? "Edit" : "Add"} Question
        </button>
      </center>
    </>
  );
};
