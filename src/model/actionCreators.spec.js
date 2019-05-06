import {
    setActiveView,
    requestUsers,
    receiveUsers,
} from './actionCreators';

import {
    SET_ACTIVE_VIEW,
    REQUEST_USERS,
    RECEIVE_USERS,
} from './constants';

describe('Action Creators', () => {

    it('setActiveView()', () => {
        expect(setActiveView('test')).toEqual({
            type: SET_ACTIVE_VIEW,
            data: 'test',
        });
    });

    it('requestUsers()', () => {
        expect(requestUsers()).toEqual({ type: REQUEST_USERS});
    });

    it('receiveUsers()', () => {
        const users = [{id: 1}, {id: 2}];
        expect(receiveUsers(users)).toEqual({
            type: RECEIVE_USERS,
            data: users
        });
    });

});