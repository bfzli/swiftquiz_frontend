import * as CONST from '../constants/index';
import * as api from '../api/index';

export const signUpAction = (name, email, username, password) => async dispatch => {
    try{
        const response = await api.signUp(name, email, username, password);
        const data = await response.data;
        dispatch({ type: CONST.SIGN_UP_CONFIRMED, payload: data });
    }
    catch(error){
        dispatch({ type: CONST.SIGN_UP_FAILED, payload: error });
    }
};

export const logInAction = (username, password) => async dispatch => {
    try{
        const response = await api.logIn(username, password);
        const data = await response.data;
        const { token } = data;
        api.saveToLocalStorage(token);
        dispatch({ type: CONST.LOG_IN_CONFIRMED, payload: data });
    }
    catch(error){
        dispatch({ type: CONST.LOG_IN_FAILED, payload: error });
    }
};

export const logOutAction = () => ({
    type: CONST.LOG_OUT_ACTION
});