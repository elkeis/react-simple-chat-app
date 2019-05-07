import React from 'react';
import UserListView from './UserListView';
import {
    MEDIA_BREAK_WIDTH
} from '../constants';

export default function LoginView({loginView}) {
    return (
        <div className="LoginView">
            {STYLE}
            <h1>Simple Chat App</h1>
            <h5>Please choose demo user:</h5>
            <div class="user-list-container">
                <UserListView {...loginView}></UserListView>
            </div>
        </div>
    )
}


const STYLE = <style>{
    `
    .LoginView {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    }


    .LoginView .user-list-container {
        padding: 0 20px;
        width: 200px;
    }

    @media screen and (max-width: ${MEDIA_BREAK_WIDTH})  {
        .LoginView .user-list-container {
            width: 100%;
        }
    }
`}</style>