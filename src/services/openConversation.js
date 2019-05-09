import {
    CREATE_CONVERSATION_URL,
    CONVERSATION_URL
} from './constants';
export default function openConversation(contact, user, conversations) {
    return async (get, post) => {
        let conversation = conversations.find(c => {
            return c.users.find(u => u.id = contact.id);
        });
        let isNew = !conversation;
        if(isNew) {
            const users = [user, contact];
            const data = {
                users: users.map(u => u.id).join(',')
            };
            conversation = await post(CREATE_CONVERSATION_URL, data);
        }

        conversation = await get(CONVERSATION_URL + `/${conversation.id}`);
        conversation = {...conversation, isNew};
        return conversation;
    }
}