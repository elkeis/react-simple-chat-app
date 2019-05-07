import React from 'react';
import LoginView from './views/LoginView';
import ConversationsView from './views/ConversationsView';

import {
    LOGIN_VIEW,
    CONVERSATIONS_VIEW
} from './constants';

export default function App({state}) {
    
    const ActiveView = (activeView => {
        if (LOGIN_VIEW === activeView) {
            return LoginView;
        } else if (CONVERSATIONS_VIEW === activeView) {
            return ConversationsView;
        } else {
            return (() => <e>`${activeView} does not exist`</e>);
        }
    })(state.activeView);

    return (
        <div className="App">
            {STYLE}
            <ActiveView {...state}></ActiveView>
            <code>{JSON.stringify(state, null, 2)}</code>
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
    }
`}</style>