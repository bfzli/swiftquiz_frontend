const initialState = {
    text: '',
    difficulty: 'easy'
};


const filterReducer = (state = initialState, action) => {
    const { payload } = action;
    
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: payload.text
            }

        case 'SORT_BY_DIFFICULTY':
            return {
                ...state,
                difficulty: payload.difficulty
            }

        default:
            return state;
    };
};

export default filterReducer;