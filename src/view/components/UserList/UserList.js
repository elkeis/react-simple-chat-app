import React from 'react';

export default function UserList({users, onChooseUser}) {
    return (
        <div className="UserList">
            {users.map(u => (
                <div className="user-item" key={u.id} onClick={() => onChooseUser(u)}>
                    {u.name}
                </div>
            ))}
        </div>
    )
}