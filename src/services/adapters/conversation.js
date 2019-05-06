export default function adaptConversation(obj) {
    return {
        id: obj.conversation.id,
        name: obj.conversation.name
    }
};