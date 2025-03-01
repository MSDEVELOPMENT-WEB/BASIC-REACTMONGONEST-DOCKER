import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './pages/App';
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <Switch>
                    <Route exact path="/" component={App} />
                </Switch>
            </Provider>
        </Router>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
