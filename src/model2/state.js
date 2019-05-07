import {
    LOGIN_VIEW,
    CHAT_VIEW,
        NAVIGATION_VIEW,
            CONVERSATIONS_VIEW,
            CONTACTS_VIEW,
        CONVERSATION_VIEW
} from '../view2/constants';

export default {
    activeView: CHAT_VIEW,

    loginView: {
        type: LOGIN_VIEW,
        userListView: {
            isFetching: false,
            users: [{
                id: 1,
                name: 'test'
            }, {
                id: 2,
                name: 'test2'
            },
        ]
        }
    },

    chatView: {
        type: CHAT_VIEW,
        description: 'conversations',
        activeView: NAVIGATION_VIEW,

        navigationView: {
            type: NAVIGATION_VIEW,
            activeView: CONVERSATIONS_VIEW,
            description: 'navigation',

            conversationsView: {
                type: CONVERSATIONS_VIEW,
                description: 'conversations',
                isFetching: false,
                conversations: [
                    {id: 1, name: 'conversation-1'},
                    {id: 2, name: 'conversation-2'},
                    {id: 55, name: 'jjjj'},
                ]
            },
            contactsView: {
                type: CONTACTS_VIEW,
                description: 'contacts',
                isFetching: false,
                contacts: [{
                    id: 42, name: 'Ken',
                    id: 43, name: 'Barbie'
                }]
            },
        },

        conversationView: {
            type: CONVERSATION_VIEW,
            description: 'conversation',
            isShown: false,
            conversationDetailsView: {
                isFetching: false,
                conversationDetails: {
                    conversation: {
                        id: 1, name: 'test'
                    }, 
                    users: [
                        {id: 42, lastSeen: 'time'},
                        {id: 43, lastSeen: 'time'}
                    ]
                }
            },
            chatBubblesView: {
                isFetching: false,
                chatBubbles: [{
                    id: 1, 
                    message: 'hi', 
                    sender: {
                        id: 42,
                        name: 'Ken'
                    },
                    sent: true,
                }]
            },
            messageInputView: {
                text: 'Hel'
            }
        }
    }
}