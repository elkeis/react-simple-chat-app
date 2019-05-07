import React from 'react';
import NavigationView from './NavigationView';

import {
    MEDIA_BREAK_WIDTH
} from '../constants';

import {
    genClass, RIGHT_SPLIT, APP_BACKGROUND_COLOR, LEFT_SPLIT
} from '../css';

genClass();
export default function ChatView ({chatView}) {

    // const ActiveView = ( activeView => {
    //     if(CONTACTS_VIEW === activeView) {
    //         return ContactsView;
    //     } else if (CONVERSATIONS_VIEW === activeView) {
    //         return ConversationsView;
    //     } else {
    //         return () => <e>{`View does not exist ${activeView}`}</e>
    //     }
    // })(chatView.activeView);

    return (
        <div className={$component}>
            {STYLE}
            <div className={$navigation}>
                <NavigationView {...chatView}></NavigationView>
            </div>
            <div className={$conversation}>
                No messages here yet    
            </div>
        </div>
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