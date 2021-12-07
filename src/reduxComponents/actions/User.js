import * as api from "../api/index";
import * as CONST from "../constants/index";
import axios from "axios";

export const fetchUserData = () => async (dispatch) => {
   try {
      const response = await api.fetchUserProfile();
      const data = await response.data;
      dispatch({ type: CONST.SET_USER_DATA, payload: data.profile });
   } catch (error) {
      dispatch({ type: CONST.SET_USER_DATA_FAILED, payload: error });
   }
};

// Update Profil

export const updateUser = (name, username, email, password, about) => {
	return async (dispatch, getState) => {
		try {
			dispatch({
				type: CONST.USER_UPDATE_REQUEST
			});
			const userInfo = getState().auth.auth;
			const config = {
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${userInfo.token}`
				}
			};
			const getdata = await api.editprofil('/profile/update', {
				name,
				email,
				username,
				password,
				about
			});
			const data = await getdata.data;
			api.saveToLocalStorage(JSON.stringify(data));
			dispatch({
				type: CONST.USER_UPDATE_SUCCESS,
				payload: data
			});
		} catch (error) {
			dispatch({
				type: CONST.USER_UPDATE_FAIL,
				payload: error.response && error.response.data.message ? error.response.data.message : error.message
			});
		}
	};
};

// Get All Users
export const allUsersLeaderboard = () => async (dispatch) => {
   try {
      const response = await api.leaderboardCoins();
      const data = await response.data;
      dispatch({ type: 'ALL_USERS_LEADERBOARDS', payload: data });
   } catch (error) {
      dispatch({ type: 'ALL_USERS_LEADERBOARDS_FAILED', payload: error });
   }
};

// export const getUserById = (username) => async (dispatch) => {
//    try {
//       const response = await api.fetchUserById(username)();
//       const data = await response.data;
//       dispatch({ type: 'USER_GET_PROFILE_SUCCESS', payload: data });
//    } catch (error) {
//       dispatch({ type: 'USER_GET_PROFILE_FAIL', payload: error });
//       return error;
//    }
// };

// Get User by Id
export const getUserById = async (username) => {
   try {
      const response = await api.fetchUserById(username);
      const data = await response.data;
      return data;
   } catch (error) {
      return error;
   }
};


//Get User Profile Action  (Get)
export const getUserProfileAction = () => {
   return async (dispatch, getState) => {
      const { userInfo } = getState().auth;
      try {
         dispatch({
            type: CONST.USER_PROFIL_REQUEST,
         });
         const config = {
            headers: {
               authorization: `Bearer ${userInfo.token}`,
            },
         };
         //  make a request
         const { data } = await axios.get("/api/user/profile", config);
         dispatch({
            type: CONST.USER_PROFIL_SUCCESS,
            payload: data,
         });
      } catch (error) {
         dispatch({
            type: CONST.USER_PROFIL_FAILED,
            payload: error.response && error.response.data.message,
         });
      }
   };
};
