import user from './user';
export default function adaptUsers(array) {
    return array.map(u => user(u));
}