import {store} from './model';
import {
    setActiveView,
    receiveUsers,
    requestUsers
} from './model/actionCreators'

import {
    LOGIN_VIEW
} from './view/constants'

import {
    fetchUsers
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

export const fetchUsersCommand = createFetchDataCommand({
    store,
    createRequestDataAction: requestUsers,
    createReceiveDataAction: receiveUsers,
    fetchDataFunction: fetchUsers
});

