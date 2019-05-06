import ConversationsView from './ConversationsView';
import wrap from '../../wrap';

export default function _ConversationsView({conversations}) {
    return wrap([ConversationsView, {conversations}]);
}