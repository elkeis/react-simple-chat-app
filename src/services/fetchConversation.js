import {
    CONVERSATION_URL
} from './constants';
import conversation from './adapters/conversation';


export default function fetchConversation(conversationId) {
    return async get => {
        const url = CONVERSATION_URL + `/${conversationId}`;
        const data = await get(url);
        return conversation(data);
    }
}