import {
   USER_UPDATE_REQUEST,
   USER_UPDATE_SUCCESS,
   USER_UPDATE_FAIL,
} from "../constants/index";

const updateState = {
   updatedUser: {},
   messageResponse: {
      message: "",
      success: "",
   },
};
const updateUserProfil = (state = {updateState}, action) => {
   const {payload} = action;
   switch (action.type) {
      case USER_UPDATE_REQUEST:
         return {
            ...state,
            // messageResponse: payload
         };
      case USER_UPDATE_SUCCESS:
         return {
            ...state,
            messageResponse: payload,
         };
      case USER_UPDATE_FAIL:
         return {
            // loading: false,
            // error: action.payload,
            updatedUser: {},
         };
      default:
         return state;
   }
};

export default updateUserProfil;
