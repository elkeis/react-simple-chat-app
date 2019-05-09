import {
    getBaseUrl
} from './baseUrl';

export default async function post(url, dataObject) {
    const response = await fetch(getBaseUrl() + url, {
        method: 'POST',
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(dataObject)
    });
    return await response.json();
}