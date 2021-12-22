import * as api from "../api/index";
import * as CONST from "../constants/index";
import axios from "axios";

export const fetchUserData = () => async (dispatch) => {
   try {
      const response = await api.fetchUserProfile();
      const data = await response.data;
      dispatch({ type: CONST.SET_USER_DATA, payload: data});
   } catch (error) {
      dispatch({ type: CONST.SET_USER_DATA_FAILED, payload: error });
   }
};

//Update and save user score
export const updateUserScore =(coins,score)=>{
   return async (dispatch) => {
      try {
         const response = await api.userScore(coins,score);
         dispatch({
            type: CONST.USER_SCORE_UPDATE,
            payload: response.data.newCoins
         })
      } catch (error) {
         dispatch({
            type: CONST.USER_SCORE_FAILED,
            payload: error
         })
      }
   }
}

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

// Close the account of the current user
export const closeAccount = () => async (dispatch) => {
   try {
      const response = await api.closeAccount();
      const data = await response.data;
      dispatch({ type: 'ACCOUNT_CLOSED_SUCCESS', payload: data });
      localStorage.removeItem("user");
      window.location.href = '/';
   } catch (error) {
      dispatch({ type: 'ACCOUNT_CLOSED_FAIL', payload: error });
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

// Forgot Pasaword
export const forgotpasswordAction = (email) => async (dispatch) => {
   try {
      dispatch({type: CONST.USER_FORGOT_REQUEST});

      // Headers
      const config = {headers: {"Content-Type": "application/json"}};
      const data = await api.forgot("/password/forgot", email, config);
      dispatch({type: CONST.USER_FORGOT_SUCESS, payload: data.message});
   } catch (error) {
      dispatch({
         type: CONST.USER_FORGOT_FAIL,
         payload: error.response && error.response.data.message,
      });
   }
};

// Reset Password
export const resetPasswordAction = (token, passwords) => async (dispatch) => {
   try {
      dispatch({type: CONST.USER_RESET_PASSWORD_REQUEST});

      // Headers
      const config = {headers: {"Content-Type": "application/json"}};
      const data = await api.resetPassword(
         `password/reset/${token}`,
         passwords,
         config
      );
      dispatch({type: CONST.USER_RESET_PASSWORD_SUCESS, payload: data.message});
   } catch (error) {
      dispatch({
         type: CONST.USER_RESET_PASSWORD_FAIL,
         payload: error.response && error.response.data.message,
      });
   }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
   dispatch({type: CONST.CLEAR_ERROR});
};

// Update profil

// Update Profile
export const updateProfile = (userData) => async (dispatch, getState) => {
   try {
      dispatch({type: CONST.UPDATE_PROFILE_REQUEST});

      const userInfo = getState().auth.auth;
      const config = {
         headers: {"Content-Type": "multipart/form-data"},
         authorization: `Bearer ${userInfo.token}`,
      };

      const data = await api.editprofil(`/me/update`, userData, config);
      //    name
      //    email,
      //    username,
      //    about,
      // });

      const dataStore = await data.data;
      api.saveToLocalStorage(JSON.stringify(dataStore));

      dispatch({type: CONST.UPDATE_PROFILE_SUCCESS, payload: data.success});
   } catch (error) {
      dispatch({
         type: CONST.UPDATE_PROFILE_FAIL,
         payload: error.response.data.message,
      });
   }
};

// Load User

export const loadUser = () => async (dispatch) => {
   try {
      dispatch({type: CONST.LOAD_USER_REQUEST});

      const {data} = await axios.get(`s`);

      dispatch({type: CONST.LOAD_USER_SUCCESS, payload: data.user});
   } catch (error) {
      dispatch({
         type: CONST.LOAD_USER_FAIL,
         payload: error.response.data.message,
      });
   }
};
// Update Password
export const updatePassword =
   (currentPassword, newPassword, confirmPassword) =>
   async (dispatch, getState) => {
      try {
         dispatch({type: CONST.UPDATE_PASSWORD_REQUEST});

         const userData = getState().auth.auth;
         const config = {
            headers: {"Content-Type": "application/json"},
            authorization: `Bearer ${userData.token}`,
         };

         const sentData = await api.updatingPsw(
            `/profile/password/update`,
            currentPassword,
            newPassword,
            confirmPassword
            // config
         );
         const data = await sentData.data;
         api.saveToLocalStorage(JSON.stringify(data));

         dispatch({type: CONST.UPDATE_PASSWORD_SUCCESS, payload: data.success});
      } catch (error) {
         dispatch({
            type: CONST.UPDATE_PASSWORD_FAIL,
            payload: error.response && error.response.data.message,
         });
      }
   };
