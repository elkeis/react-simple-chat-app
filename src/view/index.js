import createView from './createView';
import wrap from './wrap';

export default function _View({
    view,
    LoginView,
}) {
    return wrap(createView({view, LoginView, NullView: () => null}));
}