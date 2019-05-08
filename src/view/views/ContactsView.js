import React from 'react';
import List from '../components/List';
import {
    genClass
} from '../css';

export default function ContactsView({contactsView}) {
    return (
        <div className={$component}>
            {STYLE}
            <List items={contactsView.contacts} onChooseItem={c => console.log(c)}></List>
        </div>
    )
}

const $component = genClass('ContactsView');
const STYLE = <style>{`
    .${$component} {
        width: 100%;
        min-height: 100%;
    }
`}</style>