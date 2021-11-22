import * as CONST from '../constants/index';

export const userState = {
    name: '',
    email: '',
    username: '',
    password: '',
    role: '',
    thumbnail: '',
    isLoggedIn: false
};

const userReducer = (state = userState, action) => {
    const { payload } = action;

    switch(action.type){
        case CONST.LOG_IN_CONFIRMED:
            const { name, username, email, password, role, thumbnail } = payload;
            return {
                name,
                username,
                email,
                password,
                role,
                thumbnail,
                isLoggedIn: true
            };

        case CONST.LOG_IN_FAILED:
            return {
                name: '',
                email: '',
                username: '',
                password: '',
                role: '',
                thumbnail: '',
                isLoggedIn: false
            };

        case CONST.UPDATE_USER:
            return {
                ...state,
                ...payload
            }

        default:
            return state
    }
}

export default userReducer;