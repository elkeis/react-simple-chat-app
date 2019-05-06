import {
    CONVERSATIONS_URL
} from './constants';

export default function createFetchConversationAPI(get, adapt) {
    return userId => {
        const url = CONVERSATIONS_URL + `/${userId}`;
        return get(url).then(data => adapt(data));
    }
}