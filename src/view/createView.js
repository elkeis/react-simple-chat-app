import {
    LOGIN_VIEW, CONVERSATIONS_VIEW
} from './constants';

export default function createView({view, LoginView, NullView, ConversationsView}) {
    if (LOGIN_VIEW === view) {
        return LoginView;
    } else if (CONVERSATIONS_VIEW === view) {
        return ConversationsView
    } else {
        return NullView;
    }
}