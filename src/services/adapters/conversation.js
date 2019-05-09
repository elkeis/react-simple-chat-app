import users from './users';
export default function adaptConversation(obj) {
    return {
        id: obj.conversation.id,
        name: obj.conversation.name,
        users: obj.users.map(u => ({
            id: u.userid
        }))
    }
};