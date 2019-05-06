import React from 'react';

export default function ConversationsView({conversations}) {
    return (
        <div className="ConversationsView">
            <h2>conversations view</h2>
            {conversations.map(c => (
                <div key={c.id}>{c.name}</div>
            ))}
        </div>
    )
}