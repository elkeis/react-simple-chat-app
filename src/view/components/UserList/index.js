import wrap from 'view/wrap';
import UserList from './UserList';
import UserListLoader from './UserListLoader';
import createUserList from './createUserList';



export default function _UserList({users, onChooseUser}) {
    return wrap(createUserList({
        users,
        onChooseUser,
        UserList,
        UserListLoader
    }));
}

