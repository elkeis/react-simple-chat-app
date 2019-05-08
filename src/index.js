/* React */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';

import store from './model';

import App from './view/App';
import {
    loadUsers
} from './model/actions';

const rootElement = document.getElementById('root');
store.subscribe(() => {
    ReactDOM.render(<App state={store.getState()}/>, rootElement);
});

store.dispatch(loadUsers());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

