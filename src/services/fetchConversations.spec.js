import createFetchConversationsAPI from './fetchConversations';
import fetchConversationsJSON from './mockData/fetchConversations.json';
import {
    CONVERSATIONS_URL
} from './constants'

describe('Fetch Conversations api', () => {
    it('return conversations for specified user', async () => {
        const get = jest.fn(userId => {
            return new Promise(resolve => resolve(fetchConversationsJSON))
        })
        const adapt = jest.fn(data => data);
        const fetchConversations = createFetchConversationsAPI(get, adapt);
        
        expect.assertions(3);
        const data = await fetchConversations(66)
        expect(data).toEqual(fetchConversationsJSON);
        expect(get.mock.calls[0]).toEqual([CONVERSATIONS_URL + '/66']);
        expect(adapt.mock.calls[0]).toEqual([fetchConversationsJSON]);
    });
});

