//Setting up the default state
const questionDefaultState = [];
const demoState = {
    questions: [],
    isLoading: false,
    error: null
}

//Setting up Question Reducer 
const questionReducer = (state = demoState, action) => {
    switch(action.type){
        case 'ADD_QUESTION':
            return {
                ...state,
                questions: [...state.questions, action.question]
            }
            //return [...state, action.question];

        case 'REMOVE_QUESTION':
            return {
                ...state,
                questions: state.questions.filter(({ id }) => id !== action.id) 
            }
            //return state.filter(({ id }) => id !== action.id);
        
        case 'EDIT_QUESTION':
            return state.map(question => {
                if(question.id === action.id){
                    return {
                        ...question,
                        ...action.updates
                    }
                } else {
                    return question;
                }
            });

        default:
            return state;
    };
};

export default questionReducer;