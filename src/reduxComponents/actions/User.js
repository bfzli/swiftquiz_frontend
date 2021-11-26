import * as api from '../api/index';
import * as CONST from '../constants/index';

export const updateUser = (updates) => (dispatch) => {};

export const fetchUserData = () => async (dispatch) => {
	try {
		const response = await api.fetchUserProfile();
		const data = await response.data;
		dispatch({ type: CONST.SET_USER_DATA, payload: data.profile });
	} catch (error) {
		dispatch({ type: CONST.SET_USER_DATA_FAILED, payload: error });
	}
};
