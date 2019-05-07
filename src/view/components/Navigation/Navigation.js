import React from 'react';

export default function Navigation({
    onGoBack,
    description,
}) {
    return (
        <div className="Navigation">
            <div className="back-button" onClick={() => onGoBack()}></div>
            <div className="description">{description}</div>
        </div>
    )
}