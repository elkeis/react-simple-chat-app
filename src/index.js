/* React */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

/**
 * View Factories (thats why names are starting with `_` )
 * Wrap React components if necessary to separate logic from rendering
 */
import _MockLoginView from './view/components/MockLoginView';
import _View from './view';
import _UserList from './view/components/UserList';

/* Model */
import {store} from './model';

import {
    fetchUsersCommand,
    openLoginViewCommand
} from './commands';


const rootElement = document.getElementById('root');
store.subscribe(() => {
    const state = store.getState();
    const V = _View({
        view: state.view,
        LoginView: _MockLoginView({
            UserList: _UserList({
                users: state.users,
                onChooseUser: u => console.log(u)
            })
        })
    });
    ReactDOM.render(<V/>, rootElement);
});
openLoginViewCommand();
fetchUsersCommand();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
