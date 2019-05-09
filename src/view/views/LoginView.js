import React from 'react';
import List from '../components/List';
import {
    MEDIA_BREAK_WIDTH, CHAT_VIEW
} from '../constants';
import {
    genClass
} from '../css';

import store from '../../model';
import { setUser, loadConversations, setActiveView, loadContacts, populateContext } from '../../model/actions';


export default function LoginView({loginView}) {
    return (
        <div className={$component}>
            {STYLE}
            <h1>Simple Chat App</h1>
            <h5>Please choose demo user:</h5>
            <div className={$user_list_container}>
                <List items={loginView.users} onChooseItem={user => {
                    store.dispatch(populateContext(user));
                }}></List>
            </div>
        </div>
    )
}

const $component = genClass('LoginView');
const $user_list_container = genClass('user-list-container');
const STYLE = <style>{
    `
    .${$component} {
        overflow: scroll;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
        
        position: absolute;
        height: 100%;
        width: 100%;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }


    .${$user_list_container} {
        padding: 0 20px;
        width: 200px;
    }

    @media screen and (max-width: ${MEDIA_BREAK_WIDTH})  {
        .${$user_list_container} {
            width: 100%;
        }
    }
`}</style>