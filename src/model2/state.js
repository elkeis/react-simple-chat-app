export default {
    rootView: {
        activeView: 'login-view'
    },

    loginView: {
        type: 'login-view',
        userListView: {
            isFetching: false,
            users: [{
                id: 1,
                name: 'test'
            }, {
                id: 2,
                name: 'test2'
            }]
        }
    },

    conversationsView: {
        type: 'conversations-view',
        conversationsListView: {
            isFetching: false,
            conversations: [
                {id: 1, name: 'conversation-1'},
                {id: 2, name: 'conversation-2'}
            ]
        },

        createConversationView: {
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