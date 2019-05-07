import createConversationsView from './createConversationsView';
import wrap from '../../wrap';
import './ConversationsView.scss';

export default function _ConversationsView({ConversationList, Navigation, showConversation}) {
    return wrap(createConversationsView({
        ConversationList,
        Navigation,
        showConversation,
    }));
}