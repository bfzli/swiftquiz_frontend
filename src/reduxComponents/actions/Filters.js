import * as CONST from '../constants/index';

export const sortByDifficulty = (difficulty = 'easy') => ({
	type: CONST.SORT_BY_DIFFICULTY,
	payload: difficulty
});

export const setTextFilter = (text = '') => ({
	type: CONST.SET_TEXT_FILTER,
	payload: text
});

export const setCategoryFilter = (category) => ({
	type: CONST.SET_CATEGORY_FILTER,
	payload: category
});
