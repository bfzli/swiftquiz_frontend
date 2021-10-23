export const sortByDifficulty = (difficulty = 'easy') => ({
    type: 'SORT_BY_DIFFICULTY',
    payload: {
        difficulty
    }
});

export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    payload: {
        text
    }
});