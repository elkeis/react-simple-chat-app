import React from 'react';
import ConversationsListView from './ConversationsListView';
import CreateConversationView from './CreateConversationView';
import Navigation from '../components/Navigation';
import {
    CONVERSATIONS_LIST_VIEW,
    CREATE_CONVERSATION_VIEW,
} from '../constants';

import {
    MEDIA_BREAK_WIDTH
} from '../constants';

import {
    genClass
} from '../css';

genClass();
export default function ConversationsView ({conversationsView}) {

    const ActiveView = ( activeView => {
        if(CREATE_CONVERSATION_VIEW === activeView) {
            return CreateConversationView;
        } else if (CONVERSATIONS_LIST_VIEW === activeView) {
            return ConversationsListView;
        } else {
            return () => <e>{`View does not exist ${activeView}`}</e>
        }
    })(conversationsView.activeView);

    return (
        <div className={$component}>
            {STYLE}
            <div className={$conversation_list}>
                <Navigation onGoBack={() => console.log('go back')} description={conversationsView.type}/>
                <ActiveView {...conversationsView}></ActiveView>
            </div>
            <div className={$conversation}>
                No messages here yet    
            </div>
        </div>
    )
}

const $component = genClass('ConversationsView');
const $conversation_list = genClass('conversation-list');
const $conversation = genClass('conversation-view');
const $show = genClass('show');
const STYLE = <style>{`

.${$component} {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
}

.${$conversation_list} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    min-width: 250px;
}

.${$conversation} {
    width: 100%;
    height: 100%;
    background: #9cb8b2;
}

@media screen and (max-width: ${MEDIA_BREAK_WIDTH}) {
    .${$conversation_list} {
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
        transform: translateX(1px);
    }
}  


`}</style>