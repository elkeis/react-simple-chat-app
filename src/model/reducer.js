import {
    SET_ACTIVE_VIEW,
    REQUEST_USERS,
    RECEIVE_USERS,
    REQUEST_CONVERSATIONS,
    RECEIVE_CONVERSATIONS,
} from './constants';


const reducers = {
    [SET_ACTIVE_VIEW]: (state, action) => {
        state.view = action.data;
    },
    [REQUEST_USERS]: (state) => {
        state.users = {
            isFetching: true
        }
    },
    [RECEIVE_USERS]: (state, action) => {
        state.users = {
            isFetching: false,
            data: action.data.map(u => ({
                id: u.id,
                name: u.name
            }))
        }
    },
    [REQUEST_CONVERSATIONS]: (state) => {
        state.conversations = {
            isFetching: true
        }
    },
    [RECEIVE_CONVERSATIONS]: (state, action) => {
        state.conversations = {
            isFetching: false,
            data: action.data.map(c => ({
                id: c.id,
                name: c.name
            }))
        }
    },
};

export default function reducer(oldState, action) {
    const newState = {...oldState};
    if (action) {
        reducers[action.type](newState, action, oldState);
    }
    return newState;
}