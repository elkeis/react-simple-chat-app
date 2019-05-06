import {
    SET_ACTIVE_VIEW,
    REQUEST_USERS,
    RECEIVE_USERS,
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
    }
};

export default function reducer(oldState, action) {
    const newState = {...oldState};
    if (action) {
        reducers[action.type](newState, action, oldState);
    }
    return newState;
}