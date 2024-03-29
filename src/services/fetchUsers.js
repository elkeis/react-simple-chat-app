import users from './mockData/users';
export default function fetchUsers() {
    return async () => {
        return await new Promise(resolve => {
            setTimeout(() => {
                resolve(users);
            }, 500);
        });
    }
}
