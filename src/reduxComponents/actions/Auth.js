import * as CONST from "../constants/index";
import * as api from "../api/index";
import axios from "axios";

export const signUpAction =
   (name, email, username, password) => async (dispatch) => {
      try {
         const response = await api.signUp(name, email, username, password);
         const data = await response.data;
         dispatch({type: CONST.SIGN_UP_CONFIRMED, payload: data});
      } catch (error) {
         dispatch({type: CONST.SIGN_UP_FAILED, payload: error});
      }
   };

const confirmedLogIn = (data) => {
   console.log(data);
   return {
      type: CONST.LOG_IN_CONFIRMED,
      payload: data,
   };
};

export const logInAction = (username, password) => async (dispatch) => {
   try {
      const response = await api.logIn(username, password);
      const data = await response.data;
      api.saveToLocalStorage(JSON.stringify(data));
      dispatch(confirmedLogIn(data));
      window.location.href = "/dashboard/welcome";
   } catch (error) {
      dispatch({type: CONST.LOG_IN_FAILED, payload: error});
   }
};

export const logOutAction = () => {
   api.removeFromLocalStorage();
   return {
      type: CONST.LOG_OUT_ACTION,
   };
};

export const updateUser = (name, username, email, password, about) => {
   return async (dispatch, getState) => {
      try {
         dispatch({
            type: CONST.USER_UPDATE_REQUEST,
         });
         const {userInfo} = getState().auth.auth;
         const config = {
            headers: {
               "Content-Type": "application/json",
               authorization: `Bearer ${userInfo.token}`,
            },
         };
         const {getdata} = await api.editprofil("/api/user/profile/update", {
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
