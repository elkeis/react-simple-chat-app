import MockLoginView from './MockLoginView';
import wrap from '../../wrap';

export default function _MockLoginView({UserList}) {
    return wrap([MockLoginView, {UserList}]);
}