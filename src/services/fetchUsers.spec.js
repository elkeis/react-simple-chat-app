import {
    USERS_URL
} from './constants';

import fetchUsers from './fetchUsers';

describe('Fetch users api', () => {
    let get;
    beforeEach(() => {
        get = jest.fn(url => {
            return new Promise(resolve => resolve([{
                id: 1,
                name: 'test-user1'
            }, {
                id: 2,
                name: 'test-user2'
            }]))
        });
    });

    it('should return promise which will be resolved with users', async () => {
        expect.assertions(2);
        
        const users = await fetchUsers(get)();
        
        expect(users).toEqual([
            { id: 1, name: 'test-user1' }, 
            { id: 2, name: 'test-user2' }
        ]);
        expect(get.mock.calls[0]).toEqual([USERS_URL]);
    });
});