import axios from "axios";
<<<<<<< HEAD
import {authState} from "../reducers/Auth";

//const API_BASE_URL = "https://swiftapi.vercel.app/api/user";

const API_BASE_URL = "http://localhost:1234/api/user";
=======
import { authState } from "../reducers/Auth";

const API_BASE_URL = "https://swiftapi.vercel.app/api/user";
>>>>>>> dev

const { user_id, token } = authState.auth;

const client = axios.create({
<<<<<<< HEAD
   baseURL: API_BASE_URL,
   headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + token,
   },
=======
  baseURL: API_BASE_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: "Bearer " + token,
  },
>>>>>>> dev
});

//fetch data request
export const fetchData = (endpoint) => client.get(`/${user_id}/${endpoint}`);

<<<<<<< HEAD
//Fetch single quiz to play request
export const playQuiz = (redeemCode) =>
   client.get(`/${user_id}/quizzes/my-quizzes/${redeemCode}`);

//Create a quiz request
export const createQuiz = (params) =>
   client.post(`/${user_id}/quizzes/create-quiz`, params);

//Edit quiz request
export const editQuiz = (id, params) =>
   axios.put(`${API_BASE_URL}/...add end point here`, params);

//Delete a single quiz request
export const deleteQuiz = (id) =>
   client.delete(`/${user_id}/quizzes/my-quizzes/${id}`);
=======
// //Fetch single quiz to play request
// export const playQuiz = (redeemCode) =>
//   client.get(`/${user_id}/quizzes/my-quizzes/${redeemCode}`);

//Quiz purchasing
export const purchaseQuiz = (quizId) =>
  client.put(`/${user_id}/quiz-purchasing/${quizId}`);

//Create a quiz request
export const createQuiz = (params) =>
  client.post(`/${user_id}/quizzes/create-quiz`, params);

//Edit quiz request
export const editQuiz = (quiz_id, body) =>
  client.put(`/${user_id}/quizzes/update-quiz/${quiz_id}`, body);

//Delete a single quiz request
export const deleteQuiz = (id) =>
  client.delete(`/${user_id}/quizzes/my-quizzes/${id}`);
>>>>>>> dev

//Fetch all users only for admin request
export const fetchAllUsers = () => client.get(`/all-users`);

// Fetch Single User from Database
export const fetchUserById = (username) => client.get(`/${username}`);

//Delete single user request
export const deleteUser = (userId) => client.delete(`/${userId}`);

// Edit Profil Information
export const editprofil = (id, params) => client.put(`${id}`, params);
// Forgot Password
export const forgot = (id, email) => {
   const sendEmail = {
      email,
   };
   return axios.post(`${API_BASE_URL}/${id}`, sendEmail);
};
// Reset Password
export const resetPassword = (token, password, confirmPassword) => {
   const sucessReset = {
      password,
      confirmPassword,
   };
   return axios.put(`${token}`, sucessReset);
};
// export const resetPassword = (id, password, confirmpassword) =>
//    client.put(`${id}`, password, confirmpassword);

export const updatingPsw = (id, params) =>client.put(`${id}`, params);

//Saving user coins after playing quiz
export const userScore = (coins, score) =>
  client.put(`${user_id}/saving-new-score`, { coins, score });

// Leaderboard Coins
export const leaderboardCoins = () => client.get(`/user-collection`);

export const signUp = (name, email, username, password) => {
<<<<<<< HEAD
   const postData = {
      name,
      email,
      username,
      password,
   };

   return client.post("/register-user", postData);
=======
  const postData = {
    name,
    email,
    username,
    password,
  };

  return client.post("/register-user", postData);
>>>>>>> dev
};

//Login user request
export const logIn = (username, password) => {
<<<<<<< HEAD
   const postData = {
      username,
      password,
   };
   return client.post("/login-user", postData);
=======
  const postData = {
    username,
    password,
  };
  return client.post("/login-user", postData);
>>>>>>> dev
};

//Login admin request
export const logIn_admin = (username, password) => {
<<<<<<< HEAD
   const postData = {
      username,
      password,
   };
   return client.post("/login-admin", postData);
=======
  const postData = {
    username,
    password,
  };
  return client.post("/login-admin", postData);
>>>>>>> dev
};

//Save session and authentication to localstorage
export const saveToLocalStorage = (token) => {
<<<<<<< HEAD
   localStorage.setItem("user", token);
=======
  localStorage.setItem("user", token);
>>>>>>> dev
};

//Remove token from localstorage
export const removeFromLocalStorage = () => localStorage.removeItem("user");

//Update user request
export const updateUser = (updates) => axios.put(`${API_BASE_URL}/`);

// Fetch user profile from DB
export const fetchUserProfile = () => client.get("/profile");

// Close accout call
export const closeAccount = () => client.delete(`/${user_id}`);
