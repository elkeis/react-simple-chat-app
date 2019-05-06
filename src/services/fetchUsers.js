import {USERS_URL} from './constants';

export default function createFetchUsersAPI(get) {
    return () => get(USERS_URL);
}
