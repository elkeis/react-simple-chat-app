import { 
    REQUEST_USERS, 
    RECEIVE_USERS,
    REQUEST_CONVERSATIONS,
    RECEIVE_CONVERSATIONS,
    RECEIVE_CONVERSATIONS_ERROR,
    REQUEST_CONTACTS,
    RECEIVE_CONTACTS,
    RECEIVE_CONTACTS_ERROR,
    SET_ACTIVE_VIEW,
    SET_USER,
} from './actionTypes';

import fetchUsers from '../services/fetchUsers';
import execute from '../http/execute';
import fetchConversations from '../services/fetchConversations';
import fetchContacts from '../services/fetchContacts';

// users
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
    return async dispatch => {
        dispatch(requestUsers());
        const users = await execute(fetchUsers())
        dispatch(receiveUsers(users));
    }
}

// conversations 
export function requestConversations() {
    return { type: REQUEST_CONVERSATIONS };
} 

export function receiveConversations(conversations) {
    return { type: RECEIVE_CONVERSATIONS, data: conversations };
}

export function receiveConversationsError(e) {
    return { type: RECEIVE_CONVERSATIONS_ERROR, data: e }
}

export function loadConversations(userId) {
    return async dispatch => {
        dispatch(requestConversations());
        try {
            const conversations = await execute(fetchConversations(userId));
            dispatch(receiveConversations(conversations));
        } catch (e) {
            dispatch(receiveConversationsError(e));
        }
    }
}

//contacts
export function requestContacts() {
    return { type: REQUEST_CONTACTS };
} 

export function receiveContacts(contacts) {
    return { type: RECEIVE_CONTACTS, data: contacts };
}

export function receiveContactsError(e) {
    return { type: RECEIVE_CONTACTS_ERROR, data: e }
}

export function loadContacts(userId) {
    return async dispatch => {
        dispatch(requestContacts());
        try {
            const contacts = await execute(fetchContacts(userId));
            dispatch(receiveContacts(contacts));
        } catch (e) {
            dispatch(receiveContactsError(e));
        }
    }
}

// views
export function setActiveView(viewType) {
    return {type: SET_ACTIVE_VIEW, data: viewType};
} 
export function setUser(user) {
    return { type: SET_USER, data: user };
}

