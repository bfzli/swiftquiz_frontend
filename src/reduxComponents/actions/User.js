import * as api from "../api/index";
import * as CONST from "../constants/index";
import axios from "axios";

export const fetchUserData = () => async (dispatch) => {
   try {
      const response = await api.fetchUserProfile();
      const data = await response.data;
      dispatch({type: CONST.SET_USER_DATA, payload: data.profile});
   } catch (error) {
      dispatch({type: CONST.SET_USER_DATA_FAILED, payload: error});
   }
};
// Update Profil
export const updateUser = (name, username, email, password, about) => {
   return async (dispatch, getState) => {
      try {
         dispatch({
            type: CONST.USER_UPDATE_REQUEST,
         });
         const userInfo = getState().auth.auth;
         const config = {
            headers: {
               "Content-Type": "application/json",
               authorization: `Bearer ${userInfo.token}`,
            },
         };
         const getdata = await api.editprofil("/profile/update", {
            name,
            email,
            username,
            password,
            about,
         });
         const data = await getdata.data;
         api.saveToLocalStorage(JSON.stringify(data));
         dispatch({
            type: CONST.USER_UPDATE_SUCCESS,
            payload: data,
         });
      } catch (error) {
         dispatch({
            type: CONST.USER_UPDATE_FAIL,
            payload:
               error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
         });
      }
   };
};

//Get User Profile Action  (Get)
export const getUserProfileAction = () => {
   return async (dispatch, getState) => {
      const {userInfo} = getState().auth;
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
         const {data} = await axios.get("/api/user/profile", config);
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
