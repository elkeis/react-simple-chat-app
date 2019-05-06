import createView from './createView';
import wrap from './wrap';

export default function _View({
    view,
    LoginView,
    ConversationsView,
}) {
    return wrap(createView({
        view, 
        LoginView, 
        NullView: () => null, 
        ConversationsView
    }));
}