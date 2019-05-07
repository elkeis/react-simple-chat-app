import React from 'react';
import ConversationsView from './ConversationsView';
import ContactsView from './ContactsView';
import Navigation from '../components/Navigation';
import {
    CONVERSATIONS_VIEW,
    CONTACTS_VIEW,
} from '../constants';

import {
    genClass, TOP_SPLIT, RIGHT_SPLIT
} from '../css';

genClass();
export default function NavigationView ({navigationView}) {

    const ActiveView = ( activeView => {
        if(CONTACTS_VIEW === activeView) {
            return ContactsView;
        } else if (CONVERSATIONS_VIEW === activeView) {
            return ConversationsView;
        } else {
            return () => <e>{`View does not exist ${activeView}`}</e>
        }
    })(navigationView.activeView);

    return (
        <div className={$component}>
            {STYLE}
            <Navigation onGoBack={() => console.log('go back')} description={navigationView.description}/>
            <ActiveView {...navigationView}></ActiveView>
            <div className={$view_switch}>
                <div className={$conversations_view_switch}>conversations</div>
                <div className={$contacts_view_switch}>contacts</div>
            </div>
        </div>
    )
}

const $component = genClass('NavigationView');
const $view_switch = genClass('view-switch');
const $conversations_view_switch = genClass('list-view-switch');
const $contacts_view_switch = genClass('list-view-switch');
const STYLE = <style>{`

.${$component} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
}

.${$view_switch} {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    ${TOP_SPLIT};
}

.${$conversations_view_switch}, .${$contacts_view_switch} {
    width: 50%;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.${$conversations_view_switch} {
    ${RIGHT_SPLIT};
}

`}</style>