import adaptConversation from './conversation';
export default function adaptConversations(array) {
    console.log(array);
    return array.map(c => adaptConversation(c));
}