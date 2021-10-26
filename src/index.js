import React from 'react';
import ReactDOM from 'react-dom';
import './components/shared/Website/global.scss'
import './components/shared/Website/fonts.scss'
import Routing from './Routing';

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);