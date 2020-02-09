import React from "react";
import ReactDOM from "react-dom";


import { createStore } from 'redux';
import rootReducer from './store/modules';
import { Provider } from 'react-redux';

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const devtools = window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__();
const store = createStore(rootReducer, devtools)

// import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
