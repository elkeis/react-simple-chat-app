import {
    LOGIN_VIEW,
    CHAT_VIEW,
        NAVIGATION_VIEW,
            CONVERSATIONS_VIEW,
            CONTACTS_VIEW,
        CONVERSATION_VIEW
} from '../view/constants';

export default {
    activeView: CHAT_VIEW,

    loginView: {
        type: LOGIN_VIEW,
        userListView: {
            users: {
                isFetching: false,
                data: [{
                        id: 1,
                        name: 'test'
                    }, {
                        id: 2,
                        name: 'test2'
                    },
                ]
            }
        }
    },

    chatView: {
        type: CHAT_VIEW,
        description: 'conversations',
        activeView: CONVERSATION_VIEW,
        user: {
            isFetching: false,
            data: {
                id: 42,
                name: 'k3n'
            }

        },

        navigationView: {
            type: NAVIGATION_VIEW,
            activeView: CONTACTS_VIEW,
            description: 'navigation',

            conversationsView: {
                type: CONVERSATIONS_VIEW,
                description: 'conversations',
                conversations: {
                    isFetching: false,
                    data: [
                        {id: 1, name: 'conversation-1'},
                        {id: 2, name: 'conversation-2'},
                        {id: 55, name: 'jjjj'},
                    ]
                }
            },
            contactsView: {
                type: CONTACTS_VIEW,
                description: 'contacts',
                contacts: {
                    isFetching: false,
                    data: [
                        {id: 42, name: 'Ken'},
                        {id: 43, name: 'Barbie'},
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
                        {},
                    ]
                }
            },
        },

        conversationView: {
            type: CONVERSATION_VIEW,
            description: 'conversation',
            conversation: {
                isFetching: false,
                data: {
                    id: 1,
                    name: 'conversation-1',
                    users: [
                        {id: 1, name: 'user-1'},
                        {id: 2, name: 'user-2'},
                    ]
                }
            },
            chatBubbles: {
                isFetching: false,
                data: [
                    {
                        id: 1, 
                        message: `Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. `,
                        sent: true,
                        sender: {
                            id: 42,
                            name: 'Ken',
                            isCurrentUser: true,
                        },
                    },
                    {
                        id: 2, 
                        message: `My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps,`,
                        sent: true,
                        sender: {
                            id: 43,
                            name: 'Barbie',
                            isCurrentUser: false,
                        },
                    },
                    {
                        id: 3, 
                        message: `Now that we know `,
                        sent: true,
                        sender: {
                            id: 42,
                            name: 'Ken',
                            isCurrentUser: true,
                        },
                    },
                    {
                        id: 4, 
                        message: `My money's in that office, `,
                        sent: true,
                        sender: {
                            id: 43,
                            name: 'Barbie',
                            isCurrentUser: false,
                        },
                    },
                    {
                        id: 5, 
                        message: `Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. `,
                        sent: true,
                        sender: {
                            id: 42,
                            name: 'Ken',
                            isCurrentUser: true,
                        },
                    },
                    {
                        id: 6, 
                        message: `My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps,`,
                        sent: true,
                        sender: {
                            id: 43,
                            name: 'Barbie',
                            isCurrentUser: false,
                        },
                    },
                    {
                        id: 7, 
                        message: `Now that we know `,
                        sent: true,
                        sender: {
                            id: 42,
                            name: 'Ken',
                            isCurrentUser: true,
                        },
                    },
                    {
                        id: 8, 
                        message: `My money's in that office, `,
                        sent: true,
                        sender: {
                            id: 43,
                            name: 'Barbie',
                            isCurrentUser: false,
                        },
                    },
                ]
            },     
            message: {
                text: 'Hel'
            }
        }
    }
}