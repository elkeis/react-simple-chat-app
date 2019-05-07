import React from 'react';
import List from '../components/List';
import {
    genClass
} from '../css';

export default function ContactsView({contactsView}) {
    const ListComponent = (isFetching => {
        if (isFetching) {
            return () => <>'Loading...'</>
        } else {
            return List
        }
    })(contactsView.isFetching);
    return (
        <div className={$component}>
            {STYLE}
            <ListComponent items={contactsView.contacts} onChooseItem={c => console.log(c)}></ListComponent>
        </div>
    )
}

const $component = genClass('ContactsView');
const STYLE = <style>{`
    .${$component} {
        width: 100%;
        height: 100%;
        overflow: scroll;
    }
`}</style>