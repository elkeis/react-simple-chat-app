import React from 'react';
import List from '../components/List';
import {
    genClass
} from '../css';

export default function ConversationsView({conversationsView}) {
    const ListComponent = (isFetching => {
        if (isFetching) {
            return () => <>'Loading...'</>
        } else {
            return List
        }
    })(conversationsView.isFetching);
    return (
        <div className={$component}>
            {STYLE}
            <ListComponent items={conversationsView.conversations} onChooseItem={c => console.log(c)}></ListComponent>
        </div>
    )
}

const $component = genClass('ConversationsView');
const STYLE = <style>{`
    .${$component} {
        width: 100%;
        height: 100%;
        overflow: scroll;
    }
`}</style>