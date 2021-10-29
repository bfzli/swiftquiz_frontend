import React from 'react'
import ReactDOM from 'react-dom'
import Routing from './Routing'
import './components/shared/Global/fonts.scss'
import './components/shared/Global/global.scss'

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);