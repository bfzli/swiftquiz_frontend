import * as CONST from '../constants/index';

export const userState = {
    name: '',
    email: '',
    username: '',
    coins: null,
    thumbnail: '',
    isLoggedIn: false,
    currentlyPlaying: {},
    coins: 0
};

const userReducer = (state = userState, action) => {
    const { payload } = action;

    switch(action.type){
        case CONST.SET_USER_DATA:
            const { name, username, email, thumbnail,coins } = payload;
            console.log(payload);
            return {
                name,
                username,
                email,
                coins,
                thumbnail,
                isLoggedIn: true
            };

        case CONST.REMOVE_USER_DATA:
            return {
                name: '',
                email: '',
                username: '',
                thumbnail: '',
                coins: null,
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