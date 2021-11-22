import * as CONST from '../constants/index';

export const adminState = {
    allUsers: [],
    singleUser: '',
};

const adminReducer = (state = adminState, action) => {
    const { payload } = action;

    switch(action.type){
        case CONST.FETCH_ALL_USERS:
            return {
                ...state,
                allUsers: payload
            }
        
        case CONST.DELETE_ALL_USERS:
            return {
                ...state,
                allUsers: []
            };

        case CONST.DELETE_USER:
            const newUserList = state.allUsers.filter(user => user.user_id !== payload);
            return {
                ...state,
                allUsers: newUserList
            };

        default: 
            return state
    };
};

export default adminReducer;