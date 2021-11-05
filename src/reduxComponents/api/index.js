import axios from "axios";

const API_BASE_URL = 'https://swiftquzi-api.herokuapp.com/api/user/api/user/quizzes/';

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-type': 'application/json'
    }
});

export const fetchData = (endpoint) => client.get(`/${endpoint}`);

export const createQuiz = (params) => client.post('/questions', params);

export const editQuiz = (id, params) => axios.put(`${API_BASE_URL}/questions/${id}`, params); 

export const signUp = (name, email, username, password) => {
    const postData = {
        name,
        email,
        username,
        password
    }
    return client.post('/register-user', postData);
};

export const logIn = (username, password) => {
    const postData = {
        username,
        password
    };
    return client.post('/login-user', postData);
};