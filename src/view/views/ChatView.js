import React from 'react';
import NavigationView from './NavigationView';
import ConversationView from './ConversationView';
import {
    UserContextProvider
} from './UserContext';

import {
    MEDIA_BREAK_WIDTH, CONVERSATION_VIEW
} from '../constants';

import {
    genClass, RIGHT_SPLIT, APP_BACKGROUND_COLOR, LEFT_SPLIT
} from '../css';

export default function ChatView ({chatView}) {

    const getConversationClass = ((activeView) => {
        if(CONVERSATION_VIEW === activeView) {
            return `${$conversation} ${$show}`;
        } else {
            return $conversation
        }
    });

    return (
        <UserContextProvider user={chatView.user}>
            <div className={$component}>
                {STYLE}
                <div className={$navigation}>
                    <NavigationView {...chatView}></NavigationView>
                </div>
                <div className={getConversationClass(chatView.activeView)}>
                    <ConversationView {...chatView}></ConversationView>
                </div>
            </div>
        </UserContextProvider>
    )
}

const $component = genClass('ChatView');
const $conversation = genClass('conversation-view');
const $show = genClass('show');
const $navigation = genClass('navigation');
const STYLE = <style>{`

.${$component} {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
}

.${$navigation} {
    display:flex;
    height: 100%;
    min-width: 250px;
    ${RIGHT_SPLIT};
}

.${$conversation} {
    width: 100%;
    height: 100%;
    background: ${APP_BACKGROUND_COLOR};
    ${LEFT_SPLIT};
}

@media screen and (max-width: ${MEDIA_BREAK_WIDTH}) {

    .${$navigation} {
        width: 100%;
    }

    .${$conversation} {
        transform: translateX(${MEDIA_BREAK_WIDTH});
        position: absolute;
        opacity: 0;
        transition: all .5s;
    }

    .${$show} {
        opacity: 1;
        transform: translateX(0px);
    }
}  


`}</style>