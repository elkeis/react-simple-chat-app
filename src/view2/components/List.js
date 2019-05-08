import React from 'react';
import {
    genClass,

    BOTTOM_SPLIT,
} from  '../css';

export default function List({items, onChooseItem}) {
    
    const itemsToDisplay = ((items, onChooseItem) => {
        if (items.isFetching) {
            return <div className={$loader}>Loading...</div>
        } else {
            return items.data.map(item => (
                <div className={$list_item} key={item.id} onClick={() => onChooseItem(item)}>
                    {item.name}
                </div>
            ))
        }
    })(items, onChooseItem);

    return (
        <div className={$list}>
            {STYLE}
            {itemsToDisplay}
        </div>
    )
}

const $list_item = genClass('list-item');
const $list = genClass('List');
const $loader = genClass('loader');

const STYLE = <style>{`
.${$list} {
    width: 100%;
}
.${$list_item} {
    ${BOTTOM_SPLIT};
    padding: 10px;
    display: flex;
    align-items: center;
    min-height: 30px;
    transition: background-color .1s;
    cursor: pointer;
}

.${$list_item}:hover {
    background-color: rgba(255,255,255, .05);
}

.${$loader} {
    display: flex;
    justify-content: center;
    padding-top: 10px;
}
`}</style>