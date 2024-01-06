import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import {createStore} from "redux";
import middleware from "./middleware";
import reducer from "./reducers";
import App from "./components/App";

const store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);
