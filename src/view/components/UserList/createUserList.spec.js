import createUserList from './createUserList';

describe('Create User List function', () => {
    it('should return UserListLoader component if users undefined', () => {
        const loader = 'loader';
        expect(createUserList({
            users: undefined,
            UserListLoader: loader
        })).toEqual(loader);
    });

    it('should return UserListLoader component if users is fetching', () => {
        const loader = 'loader';
        expect(createUserList({
            users: {isFetching: true},
            UserListLoader: loader
        })).toEqual(loader);
    });

    it('should return UserList component if users exists', () => {
        const loader = 'loader';
        const list = 'list';
        const onChooseUser = () => {};
        expect(createUserList({
            users: {
                isFetching: false,
                data: [{id: 1, name: 'test'}]
            },
            onChooseUser: onChooseUser,
            UserListLoader: loader,
            UserList: list
        })).toEqual([list, {users: [{id: 1, name: 'test'}], onChooseUser}]);
    });
});