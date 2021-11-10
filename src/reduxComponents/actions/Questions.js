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

    try{
        const response = await api.fetchQuizes();
        const data = await response.data;
        dispatch({ type: CONST.FETCH_QUIZES_SUCCEEDED, payload: data })
        console.log(data)
    }
    catch(error){
        dispatch({ type: CONST.FETCH_QUIZES_FAILED, payload: error })
    }
};

export const createQuiz = () => dispatch => {
    //...incoming soon
};