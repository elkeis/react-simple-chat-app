import { 
    LOGIN_VIEW,
    CHAT_VIEW,
    NAVIGATION_VIEW,
    CONVERSATIONS_VIEW,
    CONTACTS_VIEW,
    CONVERSATION_VIEW 
} from '../view/constants';



import initialState from './initialState';
import { REQUEST_USERS, RECEIVE_USERS, REQUEST_CONVERSATIONS, RECEIVE_CONVERSATIONS, RECEIVE_CONVERSATIONS_ERROR, SET_ACTIVE_VIEW, SET_USER, REQUEST_CONTACTS, RECEIVE_CONTACTS, RECEIVE_CONTACTS_ERROR } from './actionTypes';

export default function reducer(state = initialState, action = {type: '__init__'}) {
    const s = state;
    const a = action;

    return z({
        errors: (s => {
            if(a.type.includes('ERROR')) {
                return z([a, ...s]);
            } else {
                return s;
            }
        })                                  (s.errors),
        activeView: (s => {
            if (SET_ACTIVE_VIEW === a.type) {
                return [LOGIN_VIEW, CHAT_VIEW].find(v => a.data === v) || s;
            } else {
                return s;
            }
        })                                  (s.activeView),
// login 
        loginView: z({
            type: LOGIN_VIEW,
            users: z({
                isFetching: (s => {
                    if (REQUEST_USERS === a.type) {
                        return true;
                    } else if (RECEIVE_USERS === a.type) {
                        return false;
                    } else {
                        return s;
                    }
                })                      (s.loginView.users.isFetching),
                data: (s => {
                    if (RECEIVE_USERS === a.type) {
                        return z(a.data);
                    } else {
                        return s;
                    }
                })                      (s.loginView.users.data)
            })
        }),
// chat 
        chatView: z({
            type: CHAT_VIEW,
            description: 'chat app',
            activeView: (s => {
                if (SET_ACTIVE_VIEW === a.type) {
                    return [NAVIGATION_VIEW, CONVERSATION_VIEW].find(v => a.data === v) || s;
                } else {
                    return s;
                }
            })                              (s.chatView.activeView),
            user: z({
                isFetching: (s => {
                    if (SET_USER === a.type) {
                        return false;
                    } else {
                        return s;
                    }
                })                          (s.chatView.user),
                data: (s => {
                    if (SET_USER === a.type) {
                        return z(a.data);
                    } else {
                        return s;
                    }
                })                          (s.chatView.user.data),
            }),
    // navigation 
            navigationView: z({
                type: NAVIGATION_VIEW,
                description: 'navigation',
                activeView: (s => {
                    if (SET_ACTIVE_VIEW === a.type) {
                        return [CONVERSATIONS_VIEW, CONTACTS_VIEW].find(v => a.data === v) || s;
                    } else {
                        return s;
                    }
                })                          (s.chatView.navigationView.activeView),
        // conversations       
                conversationsView: z({
                    type: CONVERSATIONS_VIEW,
                    description: 'conversations',
                    conversations: z({
                        isFetching: (s => {
                            if (REQUEST_CONVERSATIONS === a.type) {
                                return true;
                            } else if (RECEIVE_CONVERSATIONS === a.type) {
                                return false;
                            } else if (RECEIVE_CONVERSATIONS_ERROR === a.type) {
                                return false;
                            } else {
                                return s;
                            }
                        })                  (s.chatView.navigationView.conversationsView.conversations.isFetching),
                        data: (s => {
                            if (RECEIVE_CONVERSATIONS === a.type) {
                                return z(a.data);
                            } else {
                                return s;
                            }
                        })                  (s.chatView.navigationView.conversationsView.conversations.data)
                    })
                }),
        // contacts
                contactsView: z({
                    type: CONTACTS_VIEW,
                    description: 'contacts',
                    contacts: z({
                        isFetching: (s => {
                            if (REQUEST_CONTACTS === a.type) {
                                return true;
                            } else if (RECEIVE_CONTACTS === a.type) {
                                return false;
                            } else if (RECEIVE_CONTACTS_ERROR === a.type) {
                                return false;
                            } else {
                                return s;
                            }
                        })                  (s.chatView.navigationView.contactsView.contacts.isFetching),
                        data: (s => {
                            if (RECEIVE_CONTACTS === a.type) {
                                return z(a.data);
                            } else {
                                return s;
                            }
                        })                  (s.chatView.navigationView.contactsView.contacts.data)
                    })
                })
            }),
    // conversation
            conversationView: z({
                type: CONVERSATION_VIEW,
                description: 'conversation',
                conversation: z({
                    isFetching: (s => {
                        return s;
                    })                      (s.chatView.conversationView.conversation.isFetching),
                    data: (s => {
                        return s;
                    })                      (s.chatView.conversationView.conversation.data)
                }),
                chatBubbles: z({
                    isFetching: (s => {
                        return s;
                    })                      (s.chatView.conversationView.chatBubbles.isFetching),
                    data: (s => {
                        return s;
                    })                      (s.chatView.conversationView.chatBubbles.data)
                }),
                message: {
                    text: (s => {
                        return s;
                    })                      (s.chatView.conversationView.message.text)
                }
            })
        })
    });
};

/**
 * Freeze object
 * @param {Object} obj 
 */
const z = (obj => {
    if(typeof obj === 'object') {
        return Object.freeze(obj)
    } else {
        return obj;
    }
});