import React from 'react';
import  {
    genClass,
    CHAT_BUBBLE_COLOR,
    CHAT_MINE_BUBBLE_COLOR,
    SHADOW_COLOR,
} from '../css';

export default function ChatBubblesList({chatBubbles, currentUser}) {
    const getBubbleContainerClass = (isCurrentUser => {
        if(isCurrentUser) {
            return `${$bubble_container} ${$mine}`;
        } else {
            return `${$bubble_container}`;
        }
    })

    const bubbleNodes = (chatBubbles => {
        const result = []
        if (chatBubbles.data && chatBubbles.data.length === 0) {
            return <div className={$no_messages}> <p>No messages here yet...</p></div>;
        } else {
            result.push(chatBubbles.data.map(cb => (
                <div className={getBubbleContainerClass(cb.senderId === currentUser.id)} key={cb.id}>
                    <div className={$bubble}>
                        <div className={$message}>
                            {cb.message}
                        </div>
                    </div>
                </div>
            )));
        }
        if (chatBubbles.isFetching) {
            result.push(<div className={$no_messages}> <p>Loading...</p></div>);
        } 
        return result;
    })(chatBubbles);
    return (
        <div className={$component}>
            {STYLE}
            <div className={$chat_bubbles}>
                {bubbleNodes}
            </div>
        </div>
    )
}

const $component = genClass('ChatBubblesList');
const $chat_bubbles = genClass('chat-bubbles');
const $bubble_container = genClass('bubble-container');
const $mine = genClass('mine');
const $bubble = genClass('bubble');
const $sender = genClass('sender');
const $message = genClass('message');
const $no_messages = genClass('no-messages');
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

    .${$no_messages} {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
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


