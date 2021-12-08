const initialState = {
    text: '',
    difficulty: 1
};


const filterReducer = (state = initialState, action) => {
    const { payload } = action;
    
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: payload
            }

        case 'SORT_BY_DIFFICULTY':
            return {
                ...state,
                difficulty: payload
            }

        default:
            return state;
    };
};

export default filterReducer;