import * as CONST from '../constants/index';
import * as api from '../api/index';

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

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
        api.saveFullUserToStorage(JSON.stringify(data))
        localStorage.setItem('user_token', data.token)
        localStorage.setItem('user_id', data.user_id)
        dispatch({ type: CONST.LOG_IN_CONFIRMED, payload: data });
        window.location.href = "/"; //test this because i did some changes
    }

    catch(error){
        dispatch({ type: CONST.LOG_IN_FAILED, payload: error });
    }
};

export const logOutAction = () => ({
    type: CONST.LOG_OUT_ACTION
});