import React, {useContext} from 'react';
import List from '../components/List';
import {
    genClass
} from '../css';
import {ChatContext} from './ChatContext';
import store from '../../model';
import { loadConversation, setActiveView } from '../../model/actions';
import { CONVERSATION_VIEW } from '../constants';


export default function ContactsView({contactsView}) {
    const context = useContext(ChatContext);
    return (
        <div className={$component}>
            {STYLE}
            <List 
                items={context.contacts}
                onChooseItem={c => {
                    store.dispatch(loadConversation(c, context.user.data, context.conversations.data));
                    store.dispatch(setActiveView(CONVERSATION_VIEW));
                }}>
            </List>
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