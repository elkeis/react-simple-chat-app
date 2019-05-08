import { 
    REQUEST_USERS, 
    RECEIVE_USERS,
    OPEN_CHAT_VIEW,

} from './actionTypes';

import fetchUsers from '../services/fetchUsers';

export function requestUsers() {
    return { type: REQUEST_USERS };
}

export function receiveUsers(users) {
    return { 
        type: RECEIVE_USERS,
        data: users
    };
}

export function loadUsers() {
    return dispatch => {
        dispatch(requestUsers());
        fetchUsers().then(users => {
            dispatch(receiveUsers(users));
        });
    }
}

export function openChatView(user) {
    return { type: OPEN_CHAT_VIEW, data: user };
}

