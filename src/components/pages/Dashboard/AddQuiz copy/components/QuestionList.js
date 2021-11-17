export const QuestionList = ({ questions, editQuestion }) => {
    return (
      <>
        {questions.length <= 0 ? (
          <p>No Questions found</p>
        ) : (
          <>
            {questions.map((item, i) => {
              return (
                <div onClick={() => {}} key={i}>
                  <br />
                  <span>question:</span>
                  {item.question} id: {item.id} answer1: {item.answer1} answer2:{" "}
                  {item.answer2} answer3: {item.answer3} answer4: {item.answer4}
                  <button onClick={() => editQuestion(item)}>Edit</button>
                </div>
              );
            })}
          </>
        )}
      </>
    );
  };
  