//Add a Question action
export const addQuestion = ({ author = 'Guest', title = '', answers = [], category = '', difficulty = 'easy'} = {}) => ({
    type: 'ADD_QUESTION',
    question: {
        id: Math.floor(Math.random() * 99),
        author,
        title,
        answers,
        category,
        difficulty
    }
});

//Remove a Question action
export const removeQuestion = ({ id } = {}) => ({
    type: 'REMOVE_QUESTION',
    id
});

//Edit a Question action
export const editQuestion = (id, updates) => ({
    type: 'EDIT_QUESTION',
    id,
    updates
});