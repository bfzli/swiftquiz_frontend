import * as CONST from '../constants/index';

let user = JSON.parse(localStorage.getItem('user'));    

export const authState = {
    auth: user ? user : {},
    messageResponse: {
        message: '',
        success: ''
    },
    is_loggedin: false
};

const authReducer = (state = authState, action) => {
    const { payload } = action;

    switch(action.type){
        case CONST.SIGN_UP_CONFIRMED:
            return {
                ...state,
                messageResponse: payload
            };

        case CONST.SIGN_UP_FAILED:
            return { 
                auth: {},
                messageResponse: payload
            };

        case CONST.LOG_IN_CONFIRMED:
            return {
                ...state,
                auth: payload,
                is_loggedin: true
            }

        case CONST.LOG_IN_FAILED:
            return {
                auth: {},
                messageResponse: payload,
                is_loggedin: false
            }
        
        case CONST.LOG_OUT_ACTION:
            return {
                ...state,
                auth: {},
                is_loggedin: false
            }

        default:
            return state;
    };
};

export default authReducer;