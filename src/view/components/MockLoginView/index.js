import MockLoginView from './MockLoginView';
import wrap from '../../wrap';
import './MockLoginView.scss';

export default function _MockLoginView({UserList}) {
    return wrap([MockLoginView, {UserList}]);
}