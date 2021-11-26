import axios from "axios";
import {authState} from "../reducers/Auth";

// const API_BASE_URL = "https://swiftquiz-api.herokuapp.com/api/user";
const API_BASE_URL = "https://swiftapi.vercel.app/api/user";
//const API_BASE_URL = "http://localhost:5000";

const {user_id, token} = authState.auth;

const client = axios.create({
   baseURL: API_BASE_URL,
   headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + token,
   },
});

export const fetchQuizes = () =>
   client.get(`${API_BASE_URL}/${user_id}/quizzes/my-quizzes`);

export const fetchData = (endpoint) => client.get(`/${endpoint}`);

export const createQuiz = (params) =>
   client.post(`/${user_id}/quizzes/create-quiz`, params);

export const editQuiz = (id, params) =>
   axios.put(`${API_BASE_URL}/questions/${id}`, params);

// Edit Profil Information
export const editprofil = (id, params) => client.put(`${id}`, params);

export const signUp = (name, email, username, password) => {
   const postData = {
      name,
      email,
      username,
      password,
   };

   return client.post("/register-user", postData);
};

export const logIn = (username, password) => {
   const postData = {
      username,
      password,
   };

   return client.post("/login-user", postData);
};

export const saveToLocalStorage = (token) => {
   localStorage.setItem("user", token);
};

export const removeFromLocalStorage = () => localStorage.removeItem("user");
