import createFetchUsersAPI from './fetchUsers';

export const fetchUsers = createFetchUsersAPI(() => {
    return new Promise(resolve => setTimeout(() => resolve([
        { id: 46, name: 'Ken'},
        { id: 45, name: 'Barbie' }
    ]), 2000));
});