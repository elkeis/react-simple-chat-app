import React from 'react';
import List from '../components/List';
import {
    genClass
} from '../css';

export default function ConversationsListView({conversationsListView}) {
    const ListComponent = (isFetching => {
        if (isFetching) {
            return () => <>'Loading...'</>
        } else {
            return List
        }
    })(conversationsListView.isFetching);
    return (
        <div className={$component}>
            {STYLE}
            <ListComponent items={conversationsListView.conversations} onChooseItem={c => console.log(c)}></ListComponent>
        </div>
    )
}

const $component = genClass('ConversationsListView');
const STYLE = <style>{`
    .${$component} {
        width: 100%;
        height: 100%;
        overflow: scroll;
    }
`}</style>