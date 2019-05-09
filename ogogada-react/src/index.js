import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/index.css";
import App from "./App";
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Router history={createBrowserHistory()}><App /></Router>, document.getElementById('root'));
registerServiceWorker();