import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import {legacy_createStore} from "redux";
import middleware from "./middleware";
import reducer from "./reducers";

const store = legacy_createStore(reducer, middleware);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
);
