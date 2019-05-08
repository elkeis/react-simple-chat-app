import React from 'react';
import ChatBubblesView from './ChatBubblesView';
import {
    genClass, TOP_SPLIT
} from '../css';

export default function ConversationView({conversationView}) {
    return (
        <div className={$component}>
            {STYLE}
            <div className={$conversation_details}>
                {conversationView.description}
            </div>
            <div className={$chat_bubbles}>
                <ChatBubblesView {...conversationView}></ChatBubblesView>
            </div>
            <div className={$message_input}>
                test
            </div>
        </div>
    )
}

const $component = genClass('ConversationView');
const $conversation_details = genClass('conversation-details');
const $chat_bubbles = genClass('chat-bubbles');
const $message_input = genClass('message-input');

const STYLE = <style>{`
    .${$component} {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .${$component} > div {
        ${TOP_SPLIT};
    }

    .${$conversation_details} {
        min-height: 50px;
    }
    
    .${$chat_bubbles} {
        height: 100%;
        overflow: scroll;
    }

    .${$message_input} {
        min-height: 50px;
    }
`}</style>
