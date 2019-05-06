import {
    SET_ACTIVE_VIEW,
    REQUEST_USERS,
    RECEIVE_USERS,

    LOGIN_VIEW,
} from './constants';

import reducer from './reducer';

describe('Reducer function', () => {
    describe('When executed without action (initial)', () => {
        it('should return an empty state', () => {
            const state = {};
            expect(reducer(state)).toEqual({});
        });
    });

    describe('SET_ACTIVE_VIEW', () => {
        it('should create conversation view loading state', () => {
            const state = {};
            expect(reducer(state, {
                type: SET_ACTIVE_VIEW,
                data: LOGIN_VIEW
            })).toEqual({
                view: LOGIN_VIEW,
            });
        });
    });

    describe('REQUEST_USERS', () => {
        it('should create users object and put it into the fetching state', () => {
            const state = {};
            expect(reducer(state, { type: REQUEST_USERS})).toEqual({
                users: {
                    isFetching: true
                }
            });
        });

        describe('RECEIVE_USERS', () => {
            it('should create users object with users array', () => {
                const usersData = [
                    { id: 41, name: 'test1'}, 
                    { id: 42, name: 'test2', someField: 55}];

                const state = { users: { isFetching: true } };
                
                expect(reducer(state, { 
                    type: RECEIVE_USERS,
                    data: usersData
                 })).toEqual({
                    users: {
                        isFetching: false,
                        data: [
                            { id: 41, name: 'test1' }, 
                            { id: 42, name: 'test2' }
                        ]
                    }
                });
            });
        });
    });
});