import * as CONST from '../constants/index';

export const adminState = {
	allUsers: [],
	singleUser: '',
	isLoading: false
};

const adminReducer = (state = adminState, action) => {
	const { payload } = action;

	switch (action.type) {
		case CONST.FETCH_ALL_USERS_STARTED:
			return {
				...state,
				isLoading: true
			};

		case CONST.FETCH_ALL_USERS:
			return {
				...state,
				allUsers: payload,
				isLoading: false
			};

		case CONST.FETCH_ALL_USERS_FAILED:
			return {
				...state,
				allUsers: [],
				message: payload,
				isLoading: false
			};

		case CONST.DELETE_ALL_USERS:
			return {
				...state,
				allUsers: [],
				isLoading: false
			};

		case CONST.DELETE_USER:
			const newUserList = state.allUsers.filter((user) => user._id !== payload);
			console.log(newUserList);
			return {
				...state,
				allUsers: newUserList,
				isLoading: false
			};

		default:
			return state;
	}
};

export default adminReducer;
