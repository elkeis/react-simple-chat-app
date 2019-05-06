import get from './http/get';

import createFetchUsersAPI from './fetchUsers';
import createFetchConversationsAPI from './fetchConversations';

import adaptConversations from './adapters/conversations';

export const fetchUsers = createFetchUsersAPI(() => {
    return new Promise(resolve => setTimeout(() => resolve([
        { id: 41, name: 'Ken'},
        { id: 42, name: 'Barbie' }
    ]), 2000));
});

export const fetchConversations = createFetchConversationsAPI(get, adaptConversations);