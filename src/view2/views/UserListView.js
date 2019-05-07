import React from 'react';
import List from '../components/List';
export default function UserListView({userListView}) {
    console.log(userListView);
    return (
        <div className="UserListView">
            {STYLE}
            <List items={userListView.users} onChooseItem={user => console.log(user)}></List>
        </div>
    )   
}

const STYLE = <style>{`
    .UserListView {
        width: 100%;
    }
`}</style>