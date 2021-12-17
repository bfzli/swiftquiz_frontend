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
  currentylViewing: {},
  purchaseMessage: false,
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
        currentylViewing: {},
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

    case CONST.USER_SCORE_UPDATE:
      return {
        ...state,
        coins: payload.coins,
        score: payload.score,
      };

    case CONST.PURCHASE_SUCCESS:
      return {
        ...state,
        coins: payload.purchaseCoins,
        purchaseMessage: payload.success,
      };
    case CONST.PURCHASE_FAILED:
      return {
        ...state,
        error: payload,
        purchaseMessage: false,
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
        currentylViewing: {},
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
