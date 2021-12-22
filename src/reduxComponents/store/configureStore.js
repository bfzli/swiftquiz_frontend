import {createStore, combineReducers, applyMiddleware} from "redux";
import quizReducer from "../reducers/Quiz";
import filterReducer from "../reducers/Filters";
import authReducer from "../reducers/Auth";
import userReducer from "../reducers/User";
import adminReducer from "../reducers/Admin";
import UIreducer from "../reducers/Theme";
import logger from "../middleware/logger";
import thunk from "redux-thunk";
import {
   updateUserProfil,
   profileReducer,
   userProfileReducer,
   forgotPasswordUser,
   ResetPasswordUser,
} from "../reducers/User";
// import userProfileReducer from "../reducers/User";
// import forgotPasswordUser from "../reducers/User";
// import ResetPasswordUser from "../reducers/User";
const configureStore = () => {
   const store = createStore(
      combineReducers({
         auth: authReducer,
         quizes: quizReducer,
         filters: filterReducer,
         admin: adminReducer,
         user: userReducer,
         ui: UIreducer,
         // Fetch User Profil
         userProfile: userProfileReducer,
         //  Store Update User
         updatedUser: updateUserProfil,
         // Forgot password
         forgotPass: forgotPasswordUser,
         // Reset Password
         resetPass: ResetPasswordUser,
         // Update Profil User
         profile: profileReducer,
      }),
      applyMiddleware(thunk, logger)
      //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );
			

	return store;
};

export default configureStore;
