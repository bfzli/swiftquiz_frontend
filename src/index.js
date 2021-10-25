import React from 'react';
import ReactDOM from 'react-dom';
import './Root.css';
import Routing from './Routing';
import configureStore from './reduxComponents/store/configureStore';
import { Provider } from 'react-redux';
import showQuiz from './reduxComponents/selectors/reducerFilter';
import { addQuestion, removeQuestion, editQuestion } from './reduxComponents/actions/Questions';
import { setTextFilter, sortByDifficulty } from './reduxComponents/actions/Filters';

// creating a store instance
const store = configureStore();

//Getting state from store
const state = store.getState();

const showQuizes = showQuiz(state.questions, state.filters);



//Providing the store to the root 
let jsx = (
  <Provider store={store}>
    <Routing />
  </Provider>
);

ReactDOM.render(jsx,document.getElementById('root'));