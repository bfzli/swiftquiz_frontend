import * as CONST from "../constants/index";

export const userState = {
  name: "",
  email: "",
  username: "",
  bio: "",
  avatar: "56a40ed882704900355010dd44e777ed.png",
  isLoggedIn: false,
  leaderboard: [],
  currentlyPlaying: {},
  purchaseMessage: "",
  coins: 100,
};

const userReducer = (state = userState, action) => {
  const { payload } = action;

  switch (action.type) {
    case CONST.SET_USER_DATA:
      // const { username, avatar, bio } = payload;
      return {
        ...state,
        ...payload,
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

    case CONST.USER_SCORE_UPDATE:
      return {
        ...state,
        coins: payload.coins,
        score: payload.score,
      };

    case CONST.CLEAR_PLAYING_QUIZ:
      return {
        ...state,
        currentlyPlaying: {},
      };

    case CONST.PURCHASE_SUCCESS:
      return {
        ...state,
        coins: payload.quiz.purchaseCoins,
        currentlyPlaying: payload.quiz,
        // purchaseMessage: payload.success,
      };
    case CONST.PURCHASE_FAILED:
      return {
        ...state,
        error: payload,
        purchaseMessage: payload,
      };

    case CONST.USER_SCORE_UPDATE:
      return {
        ...state,
        coins: payload,
      };

    case "ALL_USERS_LEADERBOARDS":
      return {
        ...state,
        leaderboard: [...payload],
      };

    case "ALL_USERS_LEADERBOARDS_FAILED":
      return {
        ...state,
        leaderboard: [],
      };

    case CONST.ACCOUNT_CLOSED_SUCCESS:
      return {
        name: "",
        email: "",
        username: "",
        bio: "",
        avatar: "56a40ed882704900355010dd44e777ed.png",
        isLoggedIn: false,
        leaderboard: [],
        currentlyPlaying: {},
        coins: 100,
      };

    case CONST.ACCOUNT_CLOSED_FAIL:
      return state;

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

export const updateUserProfil = (state = { updateState }, action) => {
  const { payload } = action;
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
