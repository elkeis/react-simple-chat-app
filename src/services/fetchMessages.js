import {
    MESSAGES_URL
} from './constants';
import conversations from './adapters/conversations';


export default function fetchMessages(conversationId, userId) {
    return async get => {
        const url = MESSAGES_URL.replace(':conversationId', conversationId)+'?limit=50&offset=0'
        const data = await get(url);
        return data;
    }
}