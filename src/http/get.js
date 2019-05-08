import {
    getBaseUrl
} from './baseUrl';

export default async function get(url) {
    const response = await fetch(getBaseUrl() + url, {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });
    return await response.json();
}