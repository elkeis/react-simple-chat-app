/* React */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';

/**
 * View Factories (thats why names are starting with `_` )
 * Wrap React components if necessary to separate logic from rendering
 */
import _MockLoginView from './view/components/MockLoginView';
import _View from './view';
// import _UserList from './view/components/UserList';
import _ItemList from './view/components/ItemList';
import _ConversationsView from './view/components/ConversationsView';
import _Navigation from './view/components/Navigation';

/* Model */
import {store} from './model';

import {
    fetchUsersCommand,
    openLoginViewCommand,
    openConversationsViewCommand,
    fetchConversationsCommand,
    showConversationViewCommand,
    hideConversationViewCommand,
} from './commands';

import {
    openConversations as dev_openConversations
} from './commands.dev';



const rootElement = document.getElementById('root');
store.subscribe(() => {
    const state = store.getState();
    const V = _View({
        view: state.view,
        LoginView: _MockLoginView({
            UserList: _ItemList({
                items: state.users,
                onChooseItem: user => { openConversationsViewCommand(); fetchConversationsCommand(user.id) }
            })
        }),
        ConversationsView: _ConversationsView({
            Navigation: _Navigation({
                onGoBack: () => {openLoginViewCommand(); fetchUsersCommand()},
                description: 'conversations'
            }),
            ConversationList: _ItemList({
                items: state.conversations,
                onChooseItem: c => {
                    console.log(c);
                    showConversationViewCommand();
                }
            }),
            showConversation: state.conversationView && state.conversationView.isVisible
        }),
    });
    ReactDOM.render(<V/>, rootElement);
});

openLoginViewCommand();
fetchUsersCommand();

dev_openConversations();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

