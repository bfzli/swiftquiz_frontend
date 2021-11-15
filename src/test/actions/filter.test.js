import { expect } from '@jest/globals';
import { sortByDifficulty, setTextFilter } from "../../reduxComponents/actions/Filters";

test('Should setup difficulty to hard', () => {
    const action = sortByDifficulty('hard');
    expect(action).toEqual({
        type: 'SORT_BY_DIFFICULTY',
        payload: {
            difficulty: 'hard'
        }
    })
})

test('Should set text filter to any input', () => {
    const action = setTextFilter('Math');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        payload: {
            text: 'Math'
        }
    })
})