import {
    setActiveView,
    requestUsers,
    receiveUsers,
    receiveConversations,
    requestConversations,
} from './actionCreators';

import {
    SET_ACTIVE_VIEW,
    REQUEST_USERS,
    RECEIVE_USERS,
    REQUEST_CONVERSATIONS,
    RECEIVE_CONVERSATIONS,
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

    it('requestConversations()', () => {
        expect(requestConversations()).toEqual({ type: REQUEST_CONVERSATIONS});
    });

    it('receiveConversations()', () => {
        const conversations = [{id: 1}, {id: 2}];
        expect(receiveConversations(conversations)).toEqual({
            type: RECEIVE_CONVERSATIONS,
            data: conversations
        });
    });

});