import React from 'react';

export default function ItemList({items, onChooseItem}) {
    return (
        <div className="ItemList">
            {items.map(item => (
                <div className="list-item" key={item.id} onClick={() => onChooseItem(item)}>
                    {item.name}
                </div>
            ))}
        </div>
    )
}