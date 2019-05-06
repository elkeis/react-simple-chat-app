export default function createOpenMockLoginViewCommand({
    fetchUsers,
    store,
    setMockLoginViewAsActive,
    requestUsers,
    receiveUsers
}) {
    return () => {
        store.dispatch(setMockLoginViewAsActive());
        store.dispatch(requestUsers());
        fetchUsers().then(users => {
            store.dispatch(receiveUsers(users));
        });
    };
}