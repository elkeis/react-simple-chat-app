import adaptConversation from './conversation';
export default function adaptConversations(array) {
    return array.map(c => adaptConversation(c));
}