import React from 'react';


export default function MockLoginView({UserList}) {
    return (
        <div className="MockLoginView">
            <h1>Simple Chat App</h1>
            <h5>Please choose demo user:</h5>
            <UserList></UserList>
        </div>
    )
}