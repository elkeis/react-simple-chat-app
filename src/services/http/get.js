const BASE_URL = 'http://assignment.bunq.com';

export default function get(url) {
    return fetch(BASE_URL + url, {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(response => response.json());
}