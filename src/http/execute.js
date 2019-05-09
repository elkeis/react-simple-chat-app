import get from './get';
import post from './post';

export default function execute(fn) {
    return fn(get, post);
} 