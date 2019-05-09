import React, {useContext} from 'react';
import ContactsView from './ContactsView';
import Navigation from '../components/Navigation';

import {
    CONVERSATIONS_VIEW,
    CONTACTS_VIEW,
} from '../constants';

import {
    genClass, TOP_SPLIT
} from '../css';

export default function NavigationView ({navigationView}) {
    return (
        <div className={$component}>
            {STYLE}
            <div className={$navigation}>
                <Navigation onGoBack={() => console.log('go back')} description={navigationView.description}/>
            </div>
            <div className={$active_view}>
                <ContactsView {...navigationView}></ContactsView>
            </div>
        </div>
    )
}

const $component = genClass('NavigationView');
const $navigation = genClass('navigation');
const $active_view = genClass('active_view');

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
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
}

`}</style>