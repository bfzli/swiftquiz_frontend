import * as CONST from '../constants/index';
import * as api from '../api/index';

//Remove a Question action
export const removeQuiz = ({ id } = {}) => ({
    type: 'REMOVE_QUESTION',
    id
});

//Edit a Question action
export const editQuiz = (id, updates) => ({
    type: 'EDIT_QUESTION',
    id,
    updates
});

export const fetchQuiz = () => async dispatch => {
    dispatch({ type: CONST.FETCH_QUIZES_STARTED });

    try {
        //const response = await api.fetchQuizes();
        const response = await api.fetchData('quizzes/my-quizzes');
        const data = await response.data;
        dispatch({ type: CONST.FETCH_QUIZES_SUCCEEDED, payload: data });
    }
    catch (error) {
        dispatch({ type: CONST.FETCH_QUIZES_FAILED, payload: error })
    }
};

export const createQuiz = (data) => async dispatch => {
    let user = JSON.parse(localStorage.getItem('user'));

    const { title, questions, thumbnail, description, category, difficulty } = data;
    const newObj = { created_by: user.user_id, title, description, category, questions, thumbnail, difficulty };
    console.log(newObj);
    try {
        const response = await api.createQuiz(newObj);
        const data = await response.data;
        dispatch({ type: CONST.ADD_QUIZ_SUCCEEDED, payload: data });
    }
    catch (error) {
        dispatch({ type: CONST.ADD_QUIZ_FAILED, payload: error });
    }
};