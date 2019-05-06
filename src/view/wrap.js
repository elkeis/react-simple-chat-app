import React from 'react';

const MALFORMED_EXCEPTION = 'render object is malformed';

export default function wrap(renderObject) {

    if (typeof renderObject === 'function') {
        return renderObject;
    } else if (Array.isArray(renderObject)) {
        checkArray(renderObject);
        return function Wrapper() {
            const Component = renderObject[0];
            const properties = renderObject[1];
            return <Component {...properties}></Component>
        }
    } else {
       _throw(renderObject);
    }
};

function checkArray(arr) {
    if (arr.length !== 2) {
        _throw(arr);
    }

    if (typeof arr[0] !== 'function') {
        _throw(arr);
    }

    if (typeof arr[1] !== 'object') {
        _throw(arr);
    }
}

function _throw(arr) {
    const example = [function Example() {return null}, {prop1: 'p1', prop2: 'p2'}];
    throw new Error(MALFORMED_EXCEPTION + ` got: ${JSON.stringify(arr)}, expected kind of: ${JSON.stringify(example)}`);
}
