import React, {useContext} from 'react';
import ConversationsView from './ConversationsView';
import ContactsView from './ContactsView';
import Navigation from '../components/Navigation';
import ViewSwitch from '../components/ViewSwitch';
import {UserContext} from './UserContext';

import {
    CONVERSATIONS_VIEW,
    CONTACTS_VIEW,
} from '../constants';

import {
    genClass, TOP_SPLIT
} from '../css';
import store from '../../model';
import { setActiveView, loadConversations, loadContacts } from '../../model/actions';

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
    const user = useContext(UserContext);
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
                <ViewSwitch 
                    views={views} 
                    activeView={navigationView.activeView} 
                    onChooseView={v => {
                        store.dispatch(setActiveView(v.type))
                        if (CONVERSATIONS_VIEW === v.type) {
                            store.dispatch(loadConversations(user.data.id));
                        } else if (CONTACTS_VIEW === v.type) {
                            store.dispatch(loadContacts(user.data.id));
                        }
                    }}>
                </ViewSwitch>
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