import * as api from '../api/index';
import * as CONST from '../constants/index';

export const fetchAllUsers = () => async (dispatch) => {
	dispatch({ type: CONST.FETCH_ALL_USERS_STARTED });
	try {
		const response = api.fetchAllUsers();
		const data = response.data;
		console.log(data);
		dispatch({ type: CONST.FETCH_ALL_USERS, payload: data });
	} catch (error) {
		dispatch({ type: CONST.FETCH_ALL_USERS_FAILED, payload: error });
	}
};
