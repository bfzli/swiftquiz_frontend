export const initState = {
    title: "",
    questions: [],
    category: "",
    timer: null,
    question: {
      title: "",
      answers: [],
      A_1: { answer: "", isCorrect: false },
      A_2: { answer: "", isCorrect: false },
      A_3: { answer: "", isCorrect: false },
      A_4: { answer: "", isCorrect: false }
    }
  };
  
  export const formReducer = (state, action) => {
    const { payload } = action;
    switch (action.type) {
      case "ADD_TITLE":
        return {
          ...state,
          title: payload
        };
  
      case "ADD_CATEGORY":
        return {
          ...state,
          category: payload
        };
  
      case "ADD_QUESTION":
        return {
          ...state,
          questions: [...state.questions, state.question]
        };
  
      case "ADD_QUESTION_TITLE":
        return {
          ...state,
          question: {
            ...state.question,
            title: payload
          }
        };
  
      case "A_1":
        return {
          ...state,
          question: {
            ...state.question,
            A_1: { ...state.question.answer_1, ...payload }
          }
        };
  
      case "A_2":
        return {
          ...state,
          question: {
            ...state.question,
            A_2: { ...state.question.answer_2, ...payload }
          }
        };
  
      case "A_3":
        return {
          ...state,
          question: {
            ...state.question,
            A_3: { ...state.question.answer_3, ...payload }
          }
        };
  
      case "A_4":
        return {
          ...state,
          question: {
            ...state.question,
            A_4: { ...state.question.answer_4, ...payload }
          }
        };
  
      default:
        return state;
    }
  };