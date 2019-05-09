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
    REQUEST_MESSAGES,
    RECEIVE_MESSAGES,
    RECEIVE_MESSAGES_ERROR,
    UPDATE_MESSAGE,
} from './actionTypes';

import fetchUsers from '../services/fetchUsers';
import execute from '../http/execute';
import fetchConversations from '../services/fetchConversations';
import fetchContacts from '../services/fetchContacts';
import { CHAT_VIEW } from '../view/constants';
import openConversation from '../services/openConversation';
import fetchMessages from '../services/fetchMessages';
import sendMessage from '../services/sendMessage';

// init
export function populateContext(user) {
    return async dispatch => {
        dispatch(setUser(user));
        dispatch(setActiveView(CHAT_VIEW));
        dispatch(loadContacts(user.id));
        dispatch(loadConversations(user.id));
    }
}

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

export function loadConversation(contact, user, conversations) {
    return async dispatch => {
        dispatch(requestConversation());
        try {
            const conversation = await execute(openConversation(contact, user, conversations));
            dispatch(receiveConversation(conversation));
            if (conversation.isNew) {
                dispatch(loadConversations(user.id));
            }
            dispatch(loadMessages(conversation.conversation.id, user.id));
        } catch (e) {
            dispatch(receiveConversationError(e));
        }
    }
}

// messages 
export function requestMessages () {
    return {type: REQUEST_MESSAGES};
}

export function receiveMessages (messages) {
    return {type: RECEIVE_MESSAGES, data: messages};
}

export function receiveMessagesError(e) {
    return { type: RECEIVE_MESSAGES_ERROR, data: e };
}


export function loadMessages(conversationId, userId) {
    return async dispatch => {
        dispatch(requestMessages());
        const messages = await execute(fetchMessages(conversationId, userId));
        dispatch(receiveMessages(messages));
    }
}

export function postMessage(conversationId, userId, text) {
    return async dispatch => {
        await execute(sendMessage(text,userId,conversationId));
        dispatch(loadMessages);
    }
}

export function updateMessage(text) {
    return {type: UPDATE_MESSAGE, data: text};
}

// views
export function setActiveView(viewType) {
    return {type: SET_ACTIVE_VIEW, data: viewType};
} 
export function setUser(user) {
    return { type: SET_USER, data: user };
}
