import get from './get';

export default function execute(fn) {
    return fn(get);
} 