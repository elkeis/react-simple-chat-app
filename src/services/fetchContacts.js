import users from './mockData/users';

export default function fetchContacts(userId) {
    return async () => {
        return await new Promise(resolve => {
            setTimeout(() => {
                const contacts = users.filter(u => u.id !== userId);
                resolve(contacts);
            }, 500);
        });
    }
}
