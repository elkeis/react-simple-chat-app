import ConversationsView from './ConversationsView';

export default function createConversationsView({
    ConversationList,
    Navigation,
    showConversation,
}) {
    const conversationClass = showConversation ? 'show' : '';

    return [ConversationsView, {
        ConversationList, 
        Navigation, 
        conversationClass: conversationClass
    }];
}