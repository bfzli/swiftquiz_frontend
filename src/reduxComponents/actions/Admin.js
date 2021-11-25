import * as api from '../api/index';
import * as CONST from '../constants/index';

export const fetchAllUsersAction = () => async (dispatch) => {
	dispatch({ type: CONST.FETCH_ALL_USERS_STARTED });
	try {
		const response = await api.fetchAllUsers();
		const data = await response.data;
		dispatch({ type: CONST.FETCH_ALL_USERS, payload: data });
	} catch (error) {
		dispatch({ type: CONST.FETCH_ALL_USERS_FAILED, payload: error });
	}
};

export const deleteUserAction = (userId) => async (dispatch) => {
	try {
		const response = await api.deleteUser(userId);
		const data = await response.data;
		dispatch({ type: CONST.DELETE_USER, payload: userId });
	} catch (error) {
		dispatch({ type: CONST.DELETE_USER_FAILED, payload: error });
	}
};
