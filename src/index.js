import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Routing from "./Routing";
import "./components/shared/Global/fonts.scss";
import "./components/shared/Global/global.scss";
import configureStore from "./reduxComponents/store/configureStore";
import { Provider } from "react-redux";
import './i18n'
import './components/shared/Global/NotSass.css'

const store = configureStore();

ReactDOM.render(
   <React.StrictMode>
     <Suspense fallback={<></>}>
       <Provider store={store}>
         <Routing />
       </Provider>
     </Suspense>
   </React.StrictMode>,
   document.getElementById('root')
 );
 