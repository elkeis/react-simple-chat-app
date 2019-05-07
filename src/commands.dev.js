import {store} from './model';
import {
    setActiveView,
    receiveUsers,
    requestUsers,
    requestConversations,
    receiveConversations
} from './model/actionCreators'

import {
    CONVERSATIONS_VIEW
} from './view/constants';

export function openConversations() {
    store.dispatch(receiveConversations([
        {id: 1, name: 'conversation-1 fklsajdf;kajs ;dfjakls;d flkadsf '},
        {id: 2, name: 'conversation-2'},
        {id: 3, name: 'conversation-3'},
        {id: 4, name: 'conversation-4'},
        {id: 5, name: 'conversation-5'},
    ]))
    store.dispatch(setActiveView(CONVERSATIONS_VIEW));
}