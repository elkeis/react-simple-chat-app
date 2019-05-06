/* React */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

/* View */
import MockLoginView from './view/components/MockLoginView';
import View from './view';
import UserList from './view/components/UserList';

/* Model */
import {store} from './model';
import {openMockLoginView} from './commands';

const rootElement = document.getElementById('root');
store.subscribe(() => {
    const state = store.getState();
    const V = View({
        view: state.view,
        LoginView: MockLoginView({
            UserList: UserList({
                users: state.users,
                onChooseUser: u => console.log(u)
            })
        })
    });
    ReactDOM.render(<V/>, rootElement);
});

openMockLoginView();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
