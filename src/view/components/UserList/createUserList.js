export default function createUserList({
    users,
    onChooseUser,
    UserListLoader,
    UserList,
}) {
    if(users && !users.isFetching) {
        return [UserList, {users: users.data, onChooseUser}];
    } else {
        return UserListLoader;
    }
}