import ReactDOM from 'react-dom';
import configureStore from './reduxComponents/store/configureStore';
import { Provider } from 'react-redux';
import Routing from './Routing'
import './components/shared/Global/fonts.scss'
import './components/shared/Global/global.scss'
import React from 'react';

const store = configureStore();

//Providing the store to the root 
let jsx = (
  <Provider store={store}>
    <Routing />
  </Provider>
);

ReactDOM.render(jsx,document.getElementById('root'));