import createOpenMockLoginViewCommand from './openMockLoginView';

describe('Open Mock Login View Command', () => {

    let openMockLoginView,
        fetchUsers,
        store,
        setMockLoginViewAsActive,
        requestUsers,
        receiveUsers;
    
    beforeEach(() => {
        fetchUsers = jest.fn(() => new Promise(resolve => resolve([
            {id: 1, name: 'user-1'},
            {id: 2, name: 'user-2'}
        ])));
        store = {dispatch: jest.fn()};
        setMockLoginViewAsActive = jest.fn(() => ({type: 'set-mock-login-view'}));
        requestUsers = jest.fn(() => ({type: 'request-users'}));
        receiveUsers = jest.fn(() => ({type: 'receive-users'}));
        
        openMockLoginView = createOpenMockLoginViewCommand({
            fetchUsers,
            store,
            setMockLoginViewAsActive,
            requestUsers,
            receiveUsers
        });
    });

    afterEach(() => {
        openMockLoginView = undefined;
        fetchUsers = undefined;
        store = undefined;
        setMockLoginViewAsActive = undefined;
        requestUsers = undefined;
        receiveUsers = undefined;
    });

    it('should set Mock Login View As Active, set users fetching, then set users when fetched', () => {
        openMockLoginView();
        expect.assertions(3);
        expect(store.dispatch.mock.calls).toEqual([
            [{ type: 'set-mock-login-view' }],
            [{ type: 'request-users' }]
        ]);
        fetchUsers.mock.results[0].value.then(() => {
            expect(store.dispatch.mock.calls[2]).toEqual([{type: 'receive-users'}]);
            expect(receiveUsers.mock.calls).toEqual([[
                [{ id: 1, name: 'user-1' }, 
                 { id: 2, name: 'user-2'}]
            ]]);
        })
    });
});