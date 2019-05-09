import {
    LOGIN_VIEW,
    CHAT_VIEW,
        NAVIGATION_VIEW,
            CONVERSATIONS_VIEW,
            CONTACTS_VIEW,
        CONVERSATION_VIEW
} from '../view/constants';

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

export default z({
    errors: z([]),
    activeView: LOGIN_VIEW,

    loginView: z({
        type: LOGIN_VIEW,
        users: z({
            isFetching: false,
            data: z([])
        })
    }),

    chatView: z({
        type: CHAT_VIEW,
        description: 'chat app',
        activeView: NAVIGATION_VIEW,
        user: z({
            isFetching: false,
            data: z({})
        }),

        context: z({
            user: z({
                data: z({})
            }),
            conversations: z({
                isFetching: false,
                data: z([])
            }),
            contacts: z({
                isFetching: false,
                data: z([])
            }),
            messages: z({
                isFetching: false,
                data: z([])
            }),
        }),

        navigationView: z({
            type: NAVIGATION_VIEW,
            activeView: CONVERSATIONS_VIEW,
            description: 'navigation',

            contactsView: z({
                type: CONTACTS_VIEW,
                description: 'contacts',
                contacts: z({
                    isFetching: false,
                    data: z([])
                })
            }),
        }),

        conversationView: z({
            type: CONVERSATION_VIEW,
            description: 'conversation',
            conversation: z({
                isFetching: false,
                data: z({})
            }),
            chatBubbles: z({
                isFetching: false,
                data: z([])
            }),     
            message: z({
                text: ''
            })
        })
    })
});

