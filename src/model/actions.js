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
    REQUEST_CONVERSATION,
    RECEIVE_CONVERSATION,
    RECEIVE_CONVERSATION_ERROR,
    RECEIVE_NEW_CONVERSATION,
    REQUEST_NEW_CONVERSATION,
    RECEIVE_NEW_CONVERSATION_ERROR,
} from './actionTypes';

import fetchUsers from '../services/fetchUsers';
import execute from '../http/execute';
import fetchConversations from '../services/fetchConversations';
import fetchConversation from '../services/fetchConversation';
import fetchContacts from '../services/fetchContacts';
import { NAVIGATION_VIEW, CONVERSATIONS_VIEW, CONTACTS_VIEW, CONVERSATION_VIEW } from '../view/constants';
import createNewConversation from '../services/createNewConversation';

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

//Conversation
export function requestConversation() {
    return { type: REQUEST_CONVERSATION };
} 

export function receiveConversation(conversation) {
    return { type: RECEIVE_CONVERSATION, data: conversation };
}

export function receiveConversationError(e) {
    return { type: RECEIVE_CONVERSATION_ERROR, data: e }
}

export function loadConversation(conversationId) {
    return async dispatch => {
        dispatch(requestConversation());
        try {
            const conversation = await execute(fetchConversation(conversationId));
            dispatch(receiveConversation(conversation));
        } catch (e) {
            dispatch(receiveConversationError(e));
        }
    }
}

export function requestNewConversation() {
    return {type: REQUEST_NEW_CONVERSATION};
}

export function receiveNewConversation(newConversation) {
    return {type: RECEIVE_NEW_CONVERSATION, data: newConversation};
}

export function receiveNewConversationError(e) {
    return {type: RECEIVE_NEW_CONVERSATION_ERROR, data: e};
}

export function createAndOpenNewConversation(user, recipient) {
    return async dispatch => {
        try {
            debugger;
            dispatch(setActiveView(CONVERSATION_VIEW));
            dispatch(requestNewConversation());
            const conversationId = await execute(createNewConversation(user, recipient));
            const conversation = await execute(fetchConversation(conversationId))
            dispatch(receiveNewConversation(conversation));
        } catch (e) {
            dispatch(receiveNewConversationError());
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

export function switchAndRefreshNavigationView(viewType, userId) {
    console.log(viewType, userId);
    return async dispatch => {
        dispatch(setActiveView(NAVIGATION_VIEW))
        dispatch(setActiveView(viewType))
        if (CONVERSATIONS_VIEW === viewType) {
            await dispatch(loadConversations(userId));
        } else if (CONTACTS_VIEW === viewType) {
            dispatch(loadContacts(userId));
        }
    }
}

