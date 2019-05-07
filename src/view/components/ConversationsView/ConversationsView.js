import React from 'react';

export default function ConversationsView({
    ConversationList, 
    Navigation = (() => null), 
    conversationClass = ''}) {
    return (
        <div className="ConversationsView">
            <div className="conversation-list">
                <Navigation/>
                <ConversationList/>
            </div>
            <div className={`conversation-view ${conversationClass}`}>
                No messages here yet    
            </div>
        </div>
    )
}