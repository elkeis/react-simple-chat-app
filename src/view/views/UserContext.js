import React from 'react';

export const UserContext = React.createContext();

export const UserContextProvider = ({children, user}) => {
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}