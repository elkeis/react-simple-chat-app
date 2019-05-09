import {
    CREATE_CONVERSATION_URL
} from './constants';
export default function createNewConversation(user, recipient) {
    return async (get, post) => {
        const users = [user, recipient];
        const data = {
            users: users.map(u => u.id).join(','),
            name: `Chat with ${recipient.name}`
        };
        const result = await post(CREATE_CONVERSATION_URL, data);
        return result.id;
    }
}