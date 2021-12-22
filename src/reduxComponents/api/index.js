import axios from "axios";
import {authState} from "../reducers/Auth";

//const API_BASE_URL = "https://swiftapi.vercel.app/api/user";

const API_BASE_URL = "http://localhost:1234/api/user";

const {user_id, token} = authState.auth;

const client = axios.create({
   baseURL: API_BASE_URL,
   headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + token,
   },
});

//fetch data request
export const fetchData = (endpoint) => client.get(`/${user_id}/${endpoint}`);

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

//Fetch all users only for admin request
export const fetchAllUsers = () => client.get(`/all-users`);
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

export const signUp = (name, email, username, password) => {
   const postData = {
      name,
      email,
      username,
      password,
   };

   return client.post("/register-user", postData);
};

//Login user request
export const logIn = (username, password) => {
   const postData = {
      username,
      password,
   };
   return client.post("/login-user", postData);
};

//Login admin request
export const logIn_admin = (username, password) => {
   const postData = {
      username,
      password,
   };
   return client.post("/login-admin", postData);
};

//Save session and authentication to localstorage
export const saveToLocalStorage = (token) => {
   localStorage.setItem("user", token);
};

//Remove token from localstorage
export const removeFromLocalStorage = () => localStorage.removeItem("user");

//Update user request
export const updateUser = (updates) => axios.put(`${API_BASE_URL}/`);

export const fetchUserProfile = () => client.get(`/${user_id}/my-profile`);
