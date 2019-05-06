import {
    SET_ACTIVE_VIEW,
    REQUEST_USERS,
    RECEIVE_USERS,
    REQUEST_CONVERSATIONS,
    RECEIVE_CONVERSATIONS,
} from './constants';

export function setActiveView(view) {
    return  { type: SET_ACTIVE_VIEW, data: view };
}

export function requestUsers() {
    return { type: REQUEST_USERS };
}

export function receiveUsers(users) {
    return { type: RECEIVE_USERS,  data: users };
}

export function requestConversations() {
    return { type: REQUEST_CONVERSATIONS };
}

export function receiveConversations(conversations) {
    return { type: RECEIVE_CONVERSATIONS,  data: conversations };
}