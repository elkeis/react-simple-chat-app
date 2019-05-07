import {
    LOGIN_VIEW,
    CONVERSATIONS_VIEW,
    CONVERSATIONS_LIST_VIEW,
    CREATE_CONVERSATION_VIEW
} from '../view2/constants';

export default {
    activeView: CONVERSATIONS_VIEW,

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

    conversationsView: {
        type: CONVERSATIONS_VIEW,
        activeView: CREATE_CONVERSATION_VIEW,
        conversationsListView: {
            type: CONVERSATIONS_LIST_VIEW,
            isFetching: false,
            conversations: [
                {id: 1, name: 'conversation-1'},
                {id: 2, name: 'conversation-2'},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {id: 55, name: 'jjjj'},
            ]
        },

        createConversationView: {
            type: CREATE_CONVERSATION_VIEW,
            isFetching: false,
            users: [{
                id: 42, name: 'Ken',
                id: 43, name: 'Barbie'
            }]
        },

        activeConversationView: {
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