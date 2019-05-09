import React, {useContext} from 'react';
import ChatBubblesList from '../components/ChatBubblesList';
import ChatInput from '../components/ChatInput';
import {
    genClass, TOP_SPLIT, ACTIVE_COLOR, ACTIVE_BACKGROUND_COLOR
} from '../css';
import Navigation from '../components/Navigation';
import store from '../../model';
import { setActiveView, updateMessage, postMessage } from '../../model/actions';
import { NAVIGATION_VIEW } from '../constants';
import { ChatContext } from './ChatContext';

export default function ConversationView({conversationView}) {

    const context = useContext(ChatContext);
    
    const isDisabled = (conversationData => {
        return Object.keys(conversationData).length === 0;
    })(conversationView.conversation.data);
    
    const componentClass = (isDisabled => {
        if (isDisabled) {
            return `${$component} ${$disabled}`;
        } else {
            return `${$component}`;
        }
    })(isDisabled);

    return (
        <div className={componentClass}>
            {STYLE}
            <div className={$conversation_details}>
                <Navigation 
                    onGoBack={() => store.dispatch(setActiveView(NAVIGATION_VIEW))}
                    description={conversationView.description}>
                </Navigation>
                {/* {conversationView.description} */}
            </div>
            <div className={$chat_bubbles}>
                <ChatBubblesList {...conversationView} currentUser={context.user.data}></ChatBubblesList>
            </div>
            <div className={$message_input}>
                <div className={$input_area}>
                    <div className={$chat_input_wrapper}>
                        <ChatInput disabled={isDisabled} text={conversationView.message.text} onUpdateText={t => store.dispatch(updateMessage(t))}></ChatInput>
                    </div>
                    <div className={$send_button_wrapper}>
                        <div className={$send_button} onClick={() => {
                            store.dispatch(postMessage(
                                conversationView.conversation.data.conversation.id, 
                                context.user.data.id,
                                conversationView.message.text
                            ));
                        }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const $component = genClass('ConversationView');
const $conversation_details = genClass('conversation-details');
const $chat_bubbles = genClass('chat-bubbles');
const $message_input = genClass('message-input');
const $send_button = genClass('send-button');
const $send_button_wrapper = genClass('send-button-wrapper');
const $chat_input_wrapper = genClass('chat-input-wrapper');
const $input_area = genClass('input-area');
const $disabled  = genClass('disabled');

const STYLE = <style>{`
    .${$component} {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .${$disabled} {
        filter: grayscale(1);
        // background: #ebeff1;
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
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
    }

    .${$message_input} {
    }

    .${$input_area} {
        min-height: 30px;
        display: flex;
        flex-direction: row;
        justify-items: center;
        width: 100%;
        padding: 10px 5px;
    }

    .${$chat_input_wrapper} {
        width: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .${$send_button_wrapper} {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .${$send_button} {
        margin: 0 10px  ;
        min-width: 30px;
        height: 30px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${ACTIVE_COLOR};
        background: ${ACTIVE_BACKGROUND_COLOR};
        border-radius: 15px;
    }
    .${$send_button}:before {
        content: '>';
        font-size: 20px;
        transform: translateY(-3px);
    }
`}</style>
