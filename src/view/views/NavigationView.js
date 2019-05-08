import React from 'react';
import ConversationsView from './ConversationsView';
import ContactsView from './ContactsView';
import Navigation from '../components/Navigation';
import ViewSwitch from '../components/ViewSwitch';
import {
    CONVERSATIONS_VIEW,
    CONTACTS_VIEW,
} from '../constants';

import {
    genClass, TOP_SPLIT
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
    const views = [navigationView.conversationsView, navigationView.contactsView];
    return (
        <div className={$component}>
            {STYLE}
            <div className={$navigation}>
                <Navigation onGoBack={() => console.log('go back')} description={navigationView.description}/>
            </div>
            <div className={$active_view}>
                <ActiveView {...navigationView}></ActiveView>
            </div>
            <div className={$view_switch}>
                <ViewSwitch views={views} activeView={navigationView.activeView} onChooseView={v => console.log(v)}></ViewSwitch>
            </div>
        </div>
    )
}

const $component = genClass('NavigationView');
const $navigation = genClass('navigation');
const $active_view = genClass('active_view');
const $view_switch = genClass('view_switch');

const STYLE = <style>{`

.${$component} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
}

.${$component} > div {
    width: 100%;
    ${TOP_SPLIT};
}

.${$navigation} {
    min-height: 50px;
}

.${$active_view} {
    height: 100%;
    overflow: scroll;
}

.${$view_switch} {
    min-height: 50px;
}

`}</style>