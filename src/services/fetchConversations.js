import {
    CONVERSATIONS_URL
} from './constants';
import conversations from './adapters/conversations';


export default function fetchConversations(userId) {
    return async get => {
        const url = CONVERSATIONS_URL + `/${userId}`;
        const data = await get(url);
        return conversations(data);
    }
}