import React from 'react';
import  {
    genClass,
    CHAT_BUBBLE_COLOR,
    CHAT_MINE_BUBBLE_COLOR,
    SHADOW_COLOR,
} from '../css';

export default function ChatBubblesView({chatBubblesView}) {
    const getBubbleContainerClass = (sender => {
        if(sender.isCurrentUser) {
            return `${$bubble_container} ${$mine}`;
        } else {
            return `${$bubble_container}`;
        }
    })
    return (
        <div className={$component}>
            {STYLE}
            <div className={$chat_bubbles}>
                {chatBubblesView.chatBubbles.data.map(cb => (
                    <div className={getBubbleContainerClass(cb.sender)} key={cb.id}>
                        <div className={$bubble}>
                            <div className={$message}>
                                {cb.message}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const $component = genClass('ChatBubblesView');
const $chat_bubbles = genClass('chat-bubbles');
const $bubble_container = genClass('bubble-container');
const $mine = genClass('mine');
const $bubble = genClass('bubble');
const $sender = genClass('sender');
const $message = genClass('message');
const STYLE = <style>{`
    .${$component} {
        width: 100%;
        min-height: 100%;
    }

    .${$chat_bubbles} {
        width: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
    }

    .${$bubble_container} {
        width: 100%;
        min-height: 50px;
        display: flex;
        flex-direction: row;
        margin-top: 10px;
    }

    .${$bubble_container}:last-child {
        margin-bottom: 10px;
    }

    .${$mine} {
        justify-content: flex-end;
    }

    .${$mine} .${$bubble} {
        background: ${CHAT_MINE_BUBBLE_COLOR};
    }

    .${$bubble} {
        display: block;
        max-width: 80%;
        min-width: 100px;
        background: ${CHAT_BUBBLE_COLOR};
        padding: 10px;
        border-radius: 12px;
        margin: 0 10px 0 10px;
        box-shadow: inset 0 0 1px ${SHADOW_COLOR};
    }

    .${$sender} {
        font-weight: bold;
    }
    .${$message} {
        font-weight: lighter;
    }
 `}</style>


