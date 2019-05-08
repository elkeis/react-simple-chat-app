import React from 'react';
import List from '../components/List';
import {
    genClass
} from '../css';

export default function ConversationsView({conversationsView}) {
    return (
        <div className={$component}>
            {STYLE}
            <List items={conversationsView.conversations} onChooseItem={c => console.log(c)}></List>
        </div>
    )
}

const $component = genClass('ConversationsView');
const STYLE = <style>{`
    .${$component} {
        width: 100%;
        min-height: 100%;
    }
`}</style>