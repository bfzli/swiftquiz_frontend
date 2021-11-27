const {
   USER_PROFIL_REQUEST,
   USER_PROFIL_SUCCESS,
   USER_PROFIL_FAILED,
} = require("../constants/index");

const userProfileReducer = (state = {}, action) => {
   switch (action.type) {
      case USER_PROFIL_REQUEST:
         return {
            loading: true,
         };
      case USER_PROFIL_SUCCESS:
         return {
            user: action.payload,
         };
      case USER_PROFIL_FAILED:
         return {
            loading: false,
            error: action.payload,
         };
      default:
         return state;
   }
};

export default userProfileReducer;
