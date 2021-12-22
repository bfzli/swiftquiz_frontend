import * as CONST from "../constants/index";

export const userState = {
   name: "",
   email: "",
   username: "",
   bio: "",
   avatar: "56a40ed882704900355010dd44e777ed.png",
   isLoggedIn: false,
   currentlyPlaying: {},
   coins: 100,
};

const userReducer = (state = userState, action) => {
   const {payload} = action;

   switch (action.type) {
      case CONST.SET_USER_DATA:
         const {username, avatar, bio} = payload;
         return {
            ...state,
            email: username.email,
            username: username.username,
            name: username.name,
            avatar,
            bio,
            isLoggedIn: true,
         };

      case CONST.REMOVE_USER_DATA:
         return {
            name: "",
            email: "",
            username: "",
            bio: "",
            avatar: "",
            coins: 0,
            currentlyPlaying: {},
            isLoggedIn: false,
         };

      case CONST.UPDATE_USER:
         return {
            ...state,
            ...payload,
         };

      case CONST.PLAY_QUIZ_STARTED:
         return state;

      case CONST.PLAY_QUIZ_SUCCEEDED:
         return {
            ...state,
            currentlyPlaying: payload,
         };

      case CONST.PLAY_QUIZ_FAILED:
         return {
            ...state,
            currentlyPlaying: {
               error: payload,
            },
         };

      default:
         return state;
   }
};

export default userReducer;

const updateState = {
   updatedUser: {},
   messageResponse: {
      message: "",
      success: "",
   },
};
export const updateUserProfil = (state = {updateState}, action) => {
   const {payload} = action;
   switch (action.type) {
      case CONST.USER_UPDATE_REQUEST:
         return {
            ...state,
            // messageResponse: payload
         };
      case CONST.USER_UPDATE_SUCCESS:
         return {
            ...state,
            messageResponse: payload,
         };
      case CONST.USER_UPDATE_FAIL:
         return {
            // loading: false,
            // error: action.payload,
            updatedUser: {},
         };
      default:
         return state;
   }
};

// Get User Profil Reducer
export const userProfileReducer = (state = {}, action) => {
   switch (action.type) {
      case CONST.USER_PROFIL_REQUEST:
         return {
            loading: true,
         };
      case CONST.USER_PROFIL_SUCCESS:
         return {
            user: action.payload,
         };
      case CONST.USER_PROFIL_FAILED:
         return {
            loading: false,
            error: action.payload,
         };
      default:
         return state;
   }
};

// Forgot password
export const forgotPasswordUser = (state = userState, action) => {
   const {payload} = action;
   switch (action.type) {
      case CONST.USER_FORGOT_SUCESS:
         return {
            ...state,
            messageResponse: payload,
         };
      case CONST.USER_FORGOT_FAIL:
         return {
            ...state,
            error: payload,
         };
      case CONST.CLEAR_ERROR:
         return {
            ...state,
            error: null,
         };
      default:
         return state;
   }
};

// Reset password

const userReset_upd = {
   password: "",
   confirmPassword: "",
   messageResponse: {
      message: "",
      success: "",
   },
};
export const ResetPasswordUser = (state = {userReset_upd}, action) => {
   const {payload} = action;
   switch (action.type) {
      case CONST.USER_RESET_PASSWORD_SUCESS:
         return {
            ...state,
            messageResponse: payload,
         };
      case CONST.USER_RESET_PASSWORD_FAIL:
         return {
            ...state,
            error: payload,
         };
      default:
         return state;
   }
};

// Update User Profil Reducer

export const profileReducer = (state = {}, action) => {
   switch (action.type) {
      case CONST.UPDATE_PROFILE_REQUEST:
      case CONST.UPDATE_PASSWORD_REQUEST:
      case CONST.UPDATE_USER_REQUEST:
         return {
            ...state,
            loading: true,
         };
      case CONST.UPDATE_PROFILE_SUCCESS:
      case CONST.UPDATE_PASSWORD_SUCCESS:
      case CONST.UPDATE_USER_SUCCESS:
         return {
            ...state,
            loading: false,
            isUpdated: action.payload,
         };

      case CONST.UPDATE_PROFILE_FAIL:
      case CONST.UPDATE_PASSWORD_FAIL:
      case CONST.UPDATE_USER_FAIL:
         return {
            ...state,
            loading: false,
            error: action.payload,
         };

      case CONST.UPDATE_PROFILE_RESET:
      case CONST.UPDATE_PASSWORD_RESET:
      case CONST.UPDATE_USER_RESET:
         return {
            ...state,
            isUpdated: false,
         };
      case CONST.CLEAR_ERROR:
         return {
            ...state,
            error: null,
         };

      default:
         return state;
   }
};
