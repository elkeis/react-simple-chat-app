import React from 'react';
import LoginView from './views/LoginView';
import ChatView from './views/ChatView';

import { APP_BACKGROUND_COLOR, APP_TEXT_COLOR} from './css';

import {
    LOGIN_VIEW,
    CHAT_VIEW
} from './constants';

export default function App({state}) {
    
    const ActiveView = (activeView => {
        if (LOGIN_VIEW === activeView) {
            return LoginView;
        } else if (CHAT_VIEW === activeView) {
            return ChatView;
        } else {
            return (() => <e>{`${activeView} does not exist`}</e>);
        }
    })(state.activeView);

    return (
        <div className="App">
            {STYLE}
            <ActiveView {...state}></ActiveView>
            {/* <code>{JSON.stringify(state, null, 2)}</code> */}
        </div>
    )
}

const STYLE = <style>{`
    code {
        white-space: pre;
    }
    e {
        color: red;
        font-size: 45px;
    }
    .App {
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
        background: ${APP_BACKGROUND_COLOR};
        color: ${APP_TEXT_COLOR};
    }
`}</style>