import * as CONST from "../constants/index";
import * as api from "../api/index";

//Remove a Question action
export const removeQuiz = (id) => async (dispatch) => {
  try {
    const response = await api.deleteQuiz(id);
    const data = await response.data;
    dispatch({ type: CONST.REMOVE_QUIZ_SUCCEEDED, payload: id });
  } catch (error) {
    dispatch({ type: CONST.REMOVE_QUIZ_FAILED, payload: error });
  }
};

//Edit a Question action
// export const editQuiz = (id, updates) => ({
// 	type: 'EDIT_QUESTION',
// 	id,
// 	updates
// });

export const fetchQuiz = () => async (dispatch) => {
  dispatch({ type: CONST.FETCH_QUIZES_STARTED });

  try {
    //const response = await api.fetchQuizes();
    const response = await api.fetchData("quizzes/my-quizzes");
    const data = await response.data;
    dispatch({ type: CONST.FETCH_QUIZES_SUCCEEDED, payload: data.quizzes });
  } catch (error) {
    dispatch({ type: CONST.FETCH_QUIZES_FAILED, payload: error });
  }
};

export const createQuiz = (data) => async (dispatch) => {
  let user = JSON.parse(localStorage.getItem("user"));

  const { title, questions, thumbnail, description, category, difficulty } =
    data;
  const newObj = {
    created_by: user.user_id,
    title,
    description,
    category,
    questions,
    thumbnail,
    difficulty,
  };
  try {
    const response = await api.createQuiz(newObj);
    const data = await response.data;
    window.location.href = "/dashboard/welcome";
    dispatch({ type: CONST.ADD_QUIZ_SUCCEEDED, payload: data });
  } catch (error) {
    dispatch({ type: CONST.ADD_QUIZ_FAILED, payload: error });
  }
};

export const clearPlayingQuiz = () => {
  return {
    type: CONST.CLEAR_PLAYING_QUIZ,
  };
};

export const purchaseQuiz = (purchaseCoins) => async (dispatch) => {
  dispatch({ type: CONST.QUIZ_PURCHASE });
  try {
    const response = await api.purchaseQuiz(purchaseCoins);
    const data = await response.data;
    if (data.success) {
      dispatch({ type: CONST.PURCHASE_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: CONST.PURCHASE_FAILED, payload: error });
    if (error.success) {
      alert(error.message);
    }
  }
};

//Find quiz for update
const findQuiz = (id, quizzes) => {
  return quizzes.find((quiz) => quiz._id === id);
};

//Edit a Quiz action
export const editQuiz = (id, body) => async (dispatch, getState) => {
  const quizzes = getState().quizes.quizes;
  const quiz = findQuiz(id, quizzes);
  try {
    const response = await api.editQuiz(id, body);
    const data = await response.data;
    const editedQuiz = { ...quiz, ...data };
    console.log(data);
    dispatch({ type: CONST.EDIT_QUIZ_SUCCEEDED, payload: editedQuiz });
  } catch (error) {
    dispatch({ type: CONST.EDIT_QUIZ_FAILED, payload: error });
  }
};
