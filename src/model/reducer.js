import {
    SET_ACTIVE_VIEW,
    REQUEST_USERS,
    RECEIVE_USERS,
    REQUEST_CONVERSATIONS,
    RECEIVE_CONVERSATIONS,
    SHOW_CONVERSATION_VIEW,
    HIDE_CONVERSATION_VIEW,
} from './constants';


const reducers = {
    [SET_ACTIVE_VIEW]: (state, action) => {
        state.view = action.data;
    },
    [REQUEST_USERS]: (state) => {
        state.users = update(state.users, {
            isFetching: true
        });
    },
    [RECEIVE_USERS]: (state, action) => {
        state.users = update(state.users, {
            isFetching: false,
            data: action.data.map(u => ({
                id: u.id,
                name: u.name
            }))
        });
    },
    [REQUEST_CONVERSATIONS]: (state) => {
        state.conversations = update(state.conversations, {
            isFetching: true
        });
    },
    [RECEIVE_CONVERSATIONS]: (state, action) => {
        state.conversations = update(state.conversations, {
            isFetching: false,
            data: action.data.map(c => ({
                id: c.id,
                name: c.name
            }))
        })
    },
    [SHOW_CONVERSATION_VIEW]: (state) => {
        state.conversationView = update(state.conversationView, {
            isVisible: true
        })
    },
    [HIDE_CONVERSATION_VIEW]: (state) => {
        state.conversationView = update(state.conversationView, {
            isVisible: false
        });
    }
};

export default function reducer(oldState, action) {
    const newState = {...oldState};
    if (action) {
        const r = reducers[action.type];
        if (r) {
            r(newState, action, oldState);
        } else {
            throw new Error(`can't find reducer for action: ${JSON.stringify(action)}`);
        }
        
    }
    return newState;
}


function update(old, withNew) {
    return Object.assign({}, old, withNew);
}