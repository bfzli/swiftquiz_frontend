import * as CONST from '../constants/index';

export const userState = {
    name: '',
    email: '',
    username: '',
    role: '',
    thumbnail: '',
    isLoggedIn: false,
    currentlyPlaying: {},
    coins: 0
};

const userReducer = (state = userState, action) => {
    const { payload } = action;

    switch(action.type){
        case CONST.LOG_IN_CONFIRMED:
            const { name, username, email, role, thumbnail } = payload;
            return {
                name,
                username,
                email,
                role,
                thumbnail,
                isLoggedIn: true
            };

        case CONST.LOG_IN_FAILED:
            return {
                name: '',
                email: '',
                username: '',
                role: '',
                thumbnail: '',
                isLoggedIn: false
            };

        case CONST.UPDATE_USER:
            return {
                ...state,
                ...payload
            };
        
        case CONST.PLAY_QUIZ_STARTED:
            return state;

        case CONST.PLAY_QUIZ_SUCCEEDED:
            return {
                ...state,
                currentlyPlaying: payload
            };
        
        case CONST.PLAY_QUIZ_FAILED:
            return {
                ...state,
                currentlyPlaying: { 
                    error: payload 
                }
            };

        default:
            return state
    }
}

export default userReducer;