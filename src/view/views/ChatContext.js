import React from 'react';

export const ChatContext = React.createContext();

export const ChatContextProvider = ({children, context}) => {
    return (
        <ChatContext.Provider value={context}>
            {children}
        </ChatContext.Provider>
    )
}