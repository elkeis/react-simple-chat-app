import React from 'react';
import {
    genClass,

    BOTTOM_SPLIT,
} from  '../css';

export default function List({items, onChooseItem}) {
    return (
        <div className={list}>
            {STYLE}
            {items.map(item => (
                <div className={list_item} key={item.id} onClick={() => onChooseItem(item)}>
                    {item.name}
                </div>
            ))}
        </div>
    )
}

const list_item = genClass('list-item');
const list = genClass('List');
const STYLE = <style>{`
.${list} {
    width: 100%;
}
.${list_item} {
    ${BOTTOM_SPLIT};
    padding: 10px;
    display: flex;
    align-items: center;
    min-height: 30px;

    transition: background-color .1s;
    cursor: pointer;
}

.${list_item}:hover {
    background-color: rgba(255,255,255, .05);
}
`}</style>