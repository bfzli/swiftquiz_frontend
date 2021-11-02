import axios from "axios";

const API_BASE_URL = '';

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-type': 'application/json'
    }
});

export const fetchQuestions = () => client.get('/questions');

export const createQuestion = (params) => client.post('/questions', params);

export const editQuestion = (id, params) => axios.put(`${API_BASE_URL}/questions/${id}`, params); 