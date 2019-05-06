import {
    LOGIN_VIEW
} from './constants';

export default function createView({view, LoginView, NullView}) {
    if (LOGIN_VIEW === view) {
        return LoginView;
    } else {
        return NullView;
    }
}