import * as CONST from '../constants/index';

const initialState = {
	text: '',
	difficulty: 1,
	category: ''
};

const filterReducer = (state = initialState, action) => {
	const { payload } = action;

	switch (action.type) {
		case CONST.SET_TEXT_FILTER:
			return {
				...state,
				text: payload
			};

		case CONST.SORT_BY_DIFFICULTY:
			return {
				...state,
				difficulty: payload
			};

		case CONST.SET_CATEGORY_FILTER:
			return {
				...state,
				category: payload
			};

		default:
			return state;
	}
};

export default filterReducer;
