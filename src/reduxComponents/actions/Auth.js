import * as CONST from "../constants/index";
import * as api from "../api/index";

const confirmedLogIn = (data) => {
   return {
      type: CONST.LOG_IN_CONFIRMED,
      payload: data,
   };
};

export const signUpAction =
   (name, email, username, password) => async (dispatch) => {
      try {
         const response = await api.signUp(name, email, username, password);
         const data = await response.data;
         dispatch({type: CONST.SIGN_UP_CONFIRMED, payload: data});
         if (data) {
            const response = await api.logIn(username, password);
            const newData = await response.data;
            api.saveToLocalStorage(JSON.stringify(newData));
            dispatch(confirmedLogIn(newData));
            window.location.href = "/dashboard";
         }
      } catch (error) {
         dispatch({type: CONST.SIGN_UP_FAILED, payload: error});
      }
   };

export const logInAction = (username, password) => async (dispatch) => {
   try {
      const response = await api.logIn(username, password);
      const data = await response.data;
      console.table(data)
      api.saveToLocalStorage(JSON.stringify(data));

      dispatch(confirmedLogIn(data));

      //redirecting user to welcome page
      window.location.href = "/dashboard";
   } catch (error) {
      if (error) {
         const response = await api.logIn_admin(username, password);
         const newData = await response.data;
         api.saveToLocalStorage(JSON.stringify(newData));
         dispatch(confirmedLogIn(newData));
         window.location.href = "/dashboard/admin";
      }
      dispatch({type: CONST.LOG_IN_FAILED, payload: error});
   }
};

export const logOutAction = () => {
   api.removeFromLocalStorage();
   return {
      type: CONST.LOG_OUT_ACTION,
   };
};
