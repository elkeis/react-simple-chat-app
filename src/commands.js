import {store} from './model';
import {
    setActiveView,
    receiveUsers,
    requestUsers,
    requestConversations,
    receiveConversations
} from './model/actionCreators'

import {
    LOGIN_VIEW,
    CONVERSATIONS_VIEW
} from './view/constants'

import {
    fetchUsers, fetchConversations
} from './services';


import {
    createFetchDataCommand,
    createOpenViewCommand
} from './commandCreators'

export const openViewCommand = createOpenViewCommand({
    store,
    setActiveView
});

export const openLoginViewCommand = () => openViewCommand(LOGIN_VIEW);
export const openConversationsViewCommand = () => openViewCommand(CONVERSATIONS_VIEW);

export const fetchUsersCommand = () => createFetchDataCommand({
    store,
    createRequestDataAction: requestUsers,
    createReceiveDataAction: receiveUsers,
    fetchDataFunction: fetchUsers
})();

export const fetchConversationsCommand = userId => {
    return createFetchDataCommand({
        store,
        createRequestDataAction: requestConversations,
        createReceiveDataAction: receiveConversations,
        fetchDataFunction: fetchConversations
    })(userId);
}

