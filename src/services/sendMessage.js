import  {
    POST_MESSAGE_URL
} from './constants';

export default function sendMessage(text, userId, conversationId) {
    return async (get,post) => {
        const url = POST_MESSAGE_URL.replace(':conversationid', conversationId);
        const data = {message: text, senderId: userId};
        return await post(url, data);
    }
}