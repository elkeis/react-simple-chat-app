import {USERS_URL} from './constants';

export default function fetchUsers() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {id: 421, name: 'Scott Pilgrim'},
                {id: 422, name: 'Ramona Flowers'},
                {id: 423, name: 'Chip'}
            ]);

        }, 500);
    });
}
