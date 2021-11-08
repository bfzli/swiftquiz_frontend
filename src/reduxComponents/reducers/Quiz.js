import * as CONST from '../constants/index';

//Setting up the default state
const quizState = {
    quizes: [],
    isLoading: false,
    error: null
}

//Setting up Question Reducer 
const quizReducer = (state = quizState, action) => {
    const { payload } = action;

    switch(action.type){
        case CONST.FETCH_QUIZES_STARTED: 
            return {
                ...state,
                isLoading: true
            };

        case CONST.FETCH_QUIZES_SUCCEEDED: 
            return {
                quizes: [...payload],
                isLoading: false,
                error: null
            };
        
        case CONST.FETCH_QUIZES_FAILED: 
            return {
                quizes: [],
                isLoading: false,
                error: payload
            };

        default:
            return state;
    };
};

export default quizReducer;